import React, { useEffect, useState, useCallback, useContext } from "react";
import axios from "axios";

import ActivityList from "../activities/activities-components/ActivityList";

import GlobalBar from "../common-components/GlobalBar";
import PageTitle from "../common-components/PageTitle";
import Paging from "../common-components/Paging";
import SearchPeriodBar from "../common-components/search-components/SearchPeriodBar";
import SideMenuBar from "../common-components/SideMenuBar";
import OnlineConsultationList from "../sc-ok/online-consultation-components/OnlineConsultationList";
import PhoneCounselingList from "../sc-ok/phone-counseling-components/list-components/PhoneCounselingList";

import UserDetailInfo from "./detail-components/UserDetailInfo";
import convertValidString, {
  convertValidAddressString,
} from "../../util/string-convert-finction";
import LoginContext from "../../context/login";
import checkLoginValidation from "../../util/login-validation";

const pagePathList = [
  {
    pageUrl: "/dashboard",
    pageName: "홈",
  },
];

const UserDetailView = ({ match }) => {
  const { isLogin } = useContext(LoginContext).state;

  const [userInfo, setUserInfo] = useState(null);

  const [participatedActivities, setParticipatedActivities] = useState({
    totalRows: null,
    list: null,
  });
  const [consumedActivities, setConsumedActivities] = useState({
    totalRows: null,
    list: null,
  });
  const [onlineCounselingList, setOnlineCounselingList] = useState({
    totalRows: null,
    list: null,
  });
  const [phoneCounselingList, setPhoneCounselingList] = useState({
    totalRows: null,
    list: null,
  });

  const [pageNumber, setPageNumber] = useState({
    partActPageNumber: 1,
    consActPageNumber: 1,
    onlineConselPageNumber: 1,
    phoneConselPageNumber: 1,
  });

  const getPartActPageNumber = (curNumber) => {
    setPageNumber({
      ...pageNumber,
      partActPageNumber: curNumber,
    });
  };

  const getConsActPageNumber = (curNumber) => {
    setPageNumber({
      ...pageNumber,
      consActPageNumber: curNumber,
    });
  };

  const getOnlineConselPageNumber = (curNumber) => {
    setPageNumber({
      ...pageNumber,
      onlineConselPageNumber: curNumber,
    });
  };

  const getPhoneConselPageNumber = (curNumber) => {
    setPageNumber({
      ...pageNumber,
      phoneConselPageNumber: curNumber,
    });
  };

  // 참여한 활동 목록
  const getParticipatedActivities = useCallback(
    async (userIdx) => {
      const url = `${process.env.REACT_APP_SERVICE_API}/api/v1/user/${userIdx}/part`;

      try {
        const response = await axios.get(url, {
          params: {
            page: pageNumber.partActPageNumber,
            count: 10,
          },
        });

        if (response.status === 200) {
          const { totalRows, data } = response.data;

          let ary = [];

          for (let i = 0; i < data.length; i++) {
            ary.push({
              id: data[i].idx,
              name: data[i].title,
              organization: data[i].orgTitle,
              categoryName: data[i].category,
              partType: data[i].partType,
              beneType: data[i].beneType,
              numberOfPeople: data[i].recruitNum,
              location: convertValidAddressString(
                data[i].address1,
                data[i].address2
              ),
              activityTime: data[i].totalTime,
              state: "O",
            });
          }

          setParticipatedActivities({
            totalRows: totalRows,
            list: ary,
          });
        }
      } catch (e) {
        alert("사용자가 참여한 활동 목록을 불러오는데 오류가 발생하였습니다.");
        console.log(e);
      }
    },
    [pageNumber.partActPageNumber]
  );

  // 수요 활동 목록
  const getConsumedActivities = useCallback(
    async (userIdx) => {
      const url = `${process.env.REACT_APP_SERVICE_API}/api/v1/user/${userIdx}/bene`;

      try {
        const response = await axios.get(url, {
          params: {
            page: pageNumber.consActPageNumber,
            count: 10,
          },
        });

        if (response.status === 200) {
          const { totalRows, data } = response.data;

          let ary = [];

          for (let i = 0; i < data.length; i++) {
            ary.push({
              id: data[i].idx,
              name: data[i].title,
              organization: data[i].orgTitle,
              categoryName: data[i].category,
              partType: data[i].partType,
              beneType: data[i].beneType,
              numberOfPeople: data[i].recruitNum,
              location: convertValidAddressString(
                data[i].address1,
                data[i].address2
              ),
              activityTime: data[i].totalTime,
              state: "O",
            });
          }

          setConsumedActivities({
            totalRows: totalRows,
            list: ary,
          });
        }
      } catch (e) {
        alert("사용자의 수요 활동 목록을 불러오는데 오류가 발생하였습니다.");
        console.log(e);
      }
    },
    [pageNumber.consActPageNumber]
  );

  // 온라인 상담 목록
  const getOnlineCounselingList = useCallback(
    async (userIdx) => {
      const url = `${process.env.REACT_APP_SERVICE_API}/api/v1/user/${userIdx}/online`;

      try {
        const response = await axios.get(url, {
          params: {
            page: pageNumber.onlineConselPageNumber,
            count: 10,
          },
        });

        if (response.status === 200) {
          const { totalRows, data } = response.data;

          let ary = [];

          for (let i = 0; i < data.length; i++) {
            ary.push({
              idx: data[i].idx,
              title: data[i].title, // 상담 제목
              area: data[i].area, // 상담 분야
              expertName: data[i].expertName, // 전문가 이름
              createDate: data[i].createdAt,
              consultationState: data[i].consultationStatus, // 상태
              state: data[i].openStatus, // 공개 / 비공개
            });
          }

          setOnlineCounselingList({
            totalRows: totalRows,
            list: ary,
          });
        }
      } catch (e) {
        alert("사용자의 온라인 상담 목록을 불러오는데 오류가 발생하였습니다.");
        console.log(e);
      }
    },
    [pageNumber.onlineConselPageNumber]
  );

  // 전화 상담 목록
  const getPhoneCounselingList = useCallback(
    async (userIdx) => {
      const url = `${process.env.REACT_APP_SERVICE_API}/api/v1/user/${userIdx}/phone`;

      try {
        const response = await axios.get(url, {
          params: {
            page: pageNumber.phoneConselPageNumber,
            count: 10,
          },
        });

        if (response.status === 200) {
          const { totalRows, data } = response.data;

          let ary = [];

          for (let i = 0; i < data.length; i++) {
            ary.push({
              idx: data[i].idx,
              title: convertValidString(data[i].title), // 상담 제목
              area: data[i].area, // 상담 분야
              expertName: data[i].expertName, // 전문가 이름
              createDate: data[i].consultationDate,
              consultationState: data[i].consultationStatus, // 상태
            });
          }

          setPhoneCounselingList({
            totalRows: totalRows,
            list: ary,
          });
        }
      } catch (e) {
        alert("사용자의 수요 활동 목록을 불러오는데 오류가 발생하였습니다.");
        console.log(e);
      }
    },
    [pageNumber.phoneConselPageNumber]
  );

  useEffect(() => {
    checkLoginValidation(isLogin);

    if (isLogin) {
      const { userIdx } = match.params;

      const getUserDetailInfo = async () => {
        const url = `${process.env.REACT_APP_SERVICE_API}/api/v1/user/${userIdx}`;

        try {
          const response = await axios.get(url);

          if (response.status === 200) {
            setUserInfo({
              idx: response.data.idx,
              // 이미지
              name: response.data.name,
              nickName: response.data.nickname,
              email: response.data.email,
              birth: response.data.birth,
              gender: response.data.gender,
              state: response.data.orgStatus,
              // 총 활동 시간
              phone: response.data.phoneNum,
              address: response.data.address1 + " " + response.data.address2,
            });
          }
        } catch (e) {
          alert("사용자 상세조회시에 오류가 발생하였습니다.");
          console.log(e);
        }
      };

      getUserDetailInfo();

      getParticipatedActivities(userIdx);
      getConsumedActivities(userIdx);

      getOnlineCounselingList(userIdx);
      getPhoneCounselingList(userIdx);

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
    }
  }, [
    getConsumedActivities,
    getOnlineCounselingList,
    getParticipatedActivities,
    getPhoneCounselingList,
    isLogin,
    match.params,
  ]);

  if (isLogin)
    return (
      <div
        className="mdk-drawer-layout js-mdk-drawer-layout"
        data-push
        data-responsive-width="992px"
      >
        <div className="mdk-drawer-layout__content page-content">
          <GlobalBar />
          <PageTitle
            pageTitle="사용자 상세"
            pagePathList={pagePathList}
            onlyTitle={true}
          />

          <div className="container-fluid page__container">
            <div className="page-section">
              {userInfo && <UserDetailInfo userInfo={userInfo} type="USER" />}

              <div className="page-section">
                <h2>활동</h2>

                <div className="page-separator">
                  <div className="page-separator__text">
                    참여한 활동 목록(
                    <span className="number-count">
                      {participatedActivities.totalRows}
                    </span>
                    )
                  </div>
                </div>
                <div className="card mb-lg-32pt">
                  <div className="card-header">
                    <SearchPeriodBar />
                  </div>
                  {participatedActivities.list && (
                    <ActivityList
                      list={participatedActivities.list}
                      pageNumber={pageNumber.partActPageNumber}
                      count={10}
                    />
                  )}
                  <Paging
                    pageNumber={pageNumber.partActPageNumber}
                    getPageNumber={getPartActPageNumber}
                    totalNum={participatedActivities}
                    cpunt={10}
                  />
                </div>

                <div className="page-separator">
                  <div className="page-separator__text">
                    수요 활동 목록(
                    <span className="number-count">
                      {consumedActivities.totalRows}
                    </span>
                    )
                  </div>
                </div>
                <div className="card mb-lg-32pt">
                  <div className="card-header">
                    <SearchPeriodBar />
                  </div>
                  {consumedActivities.list && (
                    <ActivityList
                      list={consumedActivities.list}
                      count={10}
                      pageNumber={pageNumber.consActPageNumber}
                    />
                  )}
                  <Paging
                    pageNumber={pageNumber.consActPageNumber}
                    totalNum={consumedActivities.totalRows}
                    getPageNumber={getConsActPageNumber}
                    count={10}
                  />
                </div>

                <h2>상담 목록</h2>
                <div className="page-separator">
                  <div className="page-separator__text">
                    온라인 상담 목록(
                    <span className="number-count">
                      {onlineCounselingList.totalRows}
                    </span>
                    )
                  </div>
                </div>
                <div className="card mb-lg-32pt">
                  <div className="card-header">
                    <SearchPeriodBar />
                  </div>
                  {onlineCounselingList.list && userInfo && (
                    <OnlineConsultationList
                      list={onlineCounselingList.list}
                      userName={userInfo.name}
                      pageNumber={pageNumber.onlineConselPageNumber}
                      count={10}
                      dateString={true}
                    />
                  )}
                  <Paging
                    pageNumber={pageNumber.onlineConselPageNumber}
                    totalNum={onlineCounselingList.totalRows}
                    getPageNumber={getOnlineConselPageNumber}
                    count={10}
                  />
                </div>

                <div className="page-separator">
                  <div className="page-separator__text">
                    전화 상담 목록(
                    <span className="number-count">
                      {phoneCounselingList.totalRows}
                    </span>
                    )
                  </div>
                </div>

                <div className="card mb-lg-32pt">
                  <div className="card-header">
                    <SearchPeriodBar />
                  </div>
                  {phoneCounselingList.list && userInfo && (
                    <PhoneCounselingList
                      list={phoneCounselingList.list}
                      userName={userInfo.name}
                      pageNumber={pageNumber.phoneConselPageNumber}
                      count={10}
                    />
                  )}
                  <Paging
                    pageNumber={pageNumber.phoneConselPageNumber}
                    totalNum={phoneCounselingList.totalRows}
                    getPageNumber={getPhoneConselPageNumber}
                    count={10}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <SideMenuBar />
      </div>
    );
  else return null;
};

export default UserDetailView;
