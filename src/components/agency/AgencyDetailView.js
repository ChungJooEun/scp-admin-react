import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";

import ActivityList from "../activities/activities-components/ActivityList";
import UserList from "../activities/activities-detail-components/UserList";
import GlobalBar from "../common-components/GlobalBar";
import PageTitle from "../common-components/PageTitle";
import Paging from "../common-components/Paging";
import SearchPeriodBar from "../common-components/search-components/SearchPeriodBar";
import SideMenuBar from "../common-components/SideMenuBar";
import AgencyDetailInfo from "./agency-detail-components/AgencyDetailInfo";

const pagePathList = [
  {
    pageUrl: "/dashboard",
    pageName: "홈",
  },
  {
    pageUrl: "/agency/agency-list",
    pageName: "기관/단체",
  },
];

const AgencyDetailView = ({ match }) => {
  const [orgInfo, setOrgInfo] = useState(null);

  const [memberList, setMemberList] = useState({
    totalRows: null,
    list: null,
  });
  const [activityList, setActivityList] = useState({
    totalRows: null,
    list: null,
  });

  const [pageNumber, setPageNumber] = useState({
    memberPaegNumber: 1,
    activityPageNumber: 1,
  });

  const getMemberPageNumber = (seletedPage) => {
    setPageNumber({
      ...pageNumber,
      memberPaegNumber: seletedPage,
    });
  };

  const getActivityPageNumber = (seletedPage) => {
    setPageNumber({
      ...pageNumber,
      activityPageNumber: seletedPage,
    });
  };

  const getOrgMemberList = useCallback(
    async (orgId) => {
      const url = `${process.env.REACT_APP_SERVICE_API}/api/v1/org/${orgId}/user`;

      try {
        const response = await axios.get(url, {
          params: {
            page: pageNumber.memberPaegNumber,
            count: 10,
          },
        });

        if (response.status === 200) {
          const { totalRows, data } = response.data;
          let ary = [];

          for (let i = 0; i < data.length; i++) {
            ary.push({
              id: data[i].idx, // idx
              nickName: data[i].nickname, // 닉네임
              userId: data[i].email, // 아이디 -> 이메일
              createDate: data[i].createdAt, // 활동일 -> 계정 생성일
              recentActivityDate: "2022.01.01", // 최근 활동일
              state: "W", // 상태(공개/비공개) -> 누락
            });
          }

          setMemberList({
            totalRows: totalRows,
            list: ary,
          });
        }
      } catch (e) {
        alert("기관 상세조회에 오류가 발생하였습니다.");
        console.log(e);
      }
    },
    [pageNumber.memberPaegNumber]
  );

  const getOrgActicityList = useCallback(
    async (orgId) => {
      const url = `${process.env.REACT_APP_SERVICE_API}/api/v1/org/${orgId}/activity`;

      try {
        const response = await axios.get(url, {
          params: {
            page: pageNumber.activityPageNumber,
            count: 10,
          },
        });

        if (response.status === 200) {
          const { totalRows, data } = response.data;
          let ary = [];

          for (let i = 0; i < data.length; i++) {
            ary.push({
              id: data[i].idx, // idx
              activityNumber: data[i].recruitNum, // 활동 번호
              name: data[i].title, // 활동명
              organization: data[i].orgTitle, // 기관/단체 명
              categoryName: data[i].category, // 카테고리
              partType: data[i].partType, // 활동자 모집 // X -> 없음, A -> 전체, U -> 일반 , O -> 기관
              beneType: data[i].beneType, // 수요자 모집 // X -> 없음, A -> 전체, U -> 일반 , O -> 기관
              // recruitmentField: data[i].recruitmentField, // 모집 분야
              // recruitmentTarget: data[i].recruitmentTarget, //모집 대상
              location: data[i].address1, // 활동 장소
              numberOfPeople: data[i].recruitNum, // 필요 인원
              activityTime: data[i].totalTime, // 총 활동 시간
              state: "O", // 상태(공개/비공개) -> 누락
            });
          }

          setActivityList({
            totalRows: totalRows,
            list: ary,
          });
        }
      } catch (e) {
        alert("기관 상세조회에 오류가 발생하였습니다.");
        console.log(e);
      }
    },
    [pageNumber.activityPageNumber]
  );

  useEffect(() => {
    const { orgId } = match.params;

    const getOrgDetailInfo = async () => {
      const url = `${process.env.REACT_APP_SERVICE_API}/api/v1/org/${orgId}`;

      try {
        const response = await axios.get(url);

        if (response.status === 200) {
          setOrgInfo({
            id: response.data.id,
            // img : Object.keys(response.data).includes("images")
            // ? `${process.env.REACT_APP_SERVICE_API}/main/${response.data.folder}/${response.data.images}`
            // : `${process.env.PUBLIC_URL}/assets/images/people/110/guy-1.jpg`,
            img: `${process.env.PUBLIC_URL}/assets/images/people/110/guy-1.jpg`,
            name: response.data.orgTitle,
            address: response.data.address1 + " " + response.data.address2,
            contactInfo: response.data.contact,
            email: response.data.email,
            type: response.data.type,
            category: Object.keys(response.data).includes("category")
              ? response.data.category
              : "",
            introduction: response.data.bio,
            fileUrl: Object.keys(response.data).includes("fileUrl")
              ? response.data.fileUrl
              : "",
            fileName: Object.keys(response.data).includes("fileName")
              ? response.data.fileName
              : "",
            fileSize: Object.keys(response.data).includes("fileSize")
              ? response.data.fileSize
              : 0,
          });
        }
      } catch (e) {
        alert("기관 상세조회에 오류가 발생하였습니다.");
        console.log(e);
      }
    };

    getOrgDetailInfo();
    getOrgMemberList(orgId);
    getOrgActicityList(orgId);

    const srcList = [
      `${process.env.PUBLIC_URL}/assets/vendor/jquery.min.js`,
      `${process.env.PUBLIC_URL}/assets/vendor/popper.min.js`,
      `${process.env.PUBLIC_URL}/assets/vendor/bootstrap.min.js`,
      `${process.env.PUBLIC_URL}/assets/vendor/perfect-scrollbar.min.js`,
      `${process.env.PUBLIC_URL}/assets/vendor/dom-factory.js`,
      `${process.env.PUBLIC_URL}/assets/js/app.js`,
      `${process.env.PUBLIC_URL}/assets/js/hljs.js`,
      `${process.env.PUBLIC_URL}/assets/js/settings.js`,
      `${process.env.PUBLIC_URL}/assets/js/app-settings.js`,
    ];
    let scriptList = [];

    for (let i = 0; i < srcList.length; i++) {
      const script = document.createElement("script");
      script.src = process.env.PUBLIC_URL + srcList[i];
      script.async = true;
      scriptList.push(script);
      document.body.appendChild(script);
    }

    return () => {
      for (let i = 0; i < scriptList.length; i++) {
        document.body.removeChild(scriptList[i]);
      }
    };
  }, [getOrgMemberList, getOrgActicityList]);

  return (
    <div
      className="mdk-drawer-layout js-mdk-drawer-layout"
      data-push
      data-responsive-width="992px"
    >
      <div className="mdk-drawer-layout__content page-content">
        <GlobalBar />
        <PageTitle
          pageTitle="기관/단체 상세"
          pagePathList={pagePathList}
          onlyTitle={true}
        />

        <div className="container-fluid page__container">
          <div className="page-section">
            {orgInfo && <AgencyDetailInfo orgInfo={orgInfo} />}

            <div className="page-separator">
              <div className="page-separator__text">
                소속 활동자 목록(
                <span className="number-count">{memberList.totalRows}</span>)
              </div>
            </div>
            <div className="card mb-lg-32pt">
              <div className="card-header">
                <SearchPeriodBar />
              </div>
              {memberList.list && (
                <UserList
                  list={memberList.list}
                  pageNumber={pageNumber.memberPaegNumber}
                  count={10}
                />
              )}
              <Paging
                pageNumber={pageNumber.memberPaegNumber}
                getPageNumber={getMemberPageNumber}
                totalNum={memberList.totalRows}
                count={10}
              />
            </div>

            <div className="page-separator">
              <div className="page-separator__text">
                등록된 활동 목록(
                <span className="number-count">{activityList.totalRows}</span>)
              </div>
            </div>
            <div className="card mb-lg-32pt">
              <div className="card-header">
                <SearchPeriodBar />
              </div>
              {activityList.list && (
                <ActivityList
                  list={activityList.list}
                  pageNumber={pageNumber.activityPageNumber}
                  count={10}
                />
              )}
              <Paging
                pageNumber={pageNumber.activityPageNumber}
                getPageNumber={getActivityPageNumber}
                totalNum={activityList.totalRows}
                count={10}
              />
            </div>
          </div>
        </div>
      </div>
      <SideMenuBar />
    </div>
  );
};

export default AgencyDetailView;
