import React, { useContext, useEffect, useState, useCallback } from "react";
import MenuContext from "../../context/menu";
import axios from "axios";

import ActivityList from "../activities/activities-components/ActivityList";
import GlobalBar from "../common-components/GlobalBar";
import PageTitle from "../common-components/PageTitle";
import Paging from "../common-components/Paging";
import SearchPeriodBar from "../common-components/search-components/SearchPeriodBar";
import SearchPeriodWithExpertBar from "../common-components/search-components/SearchPeriodWithExpertBar";
import SideMenuBar from "../common-components/SideMenuBar";
import OnlineConsultationList from "./online-consultation-components/OnlineConsultationList";
import PhoneCounselingList from "./phone-counseling-components/list-components/PhoneCounselingList";
import UserDetailInfo from "../user/detail-components/UserDetailInfo";

const pagePathList = [
  {
    pageUrl: "/dashboard",
    pageName: "홈",
  },
  {
    pageUrl: "/sc-ok/pro-management",
    pageName: "서초 OK 생활 자문단 - 전문가 관리",
  },
];

const ExpertDetailView = ({ match }) => {
  const { expertId } = match.params;
  const { state, actions } = useContext(MenuContext);

  const [expertInfo, setExpertInfo] = useState(null);

  const [pageNumber, setPageNumber] = useState({
    partActPageNumber: 1,
    consActPageNumber: 1,
    onlineConselPageNumber: 1,
    phoneConselPageNumber: 1,
  });

  const [onlineCounselingSession, setOnlineCounselingSession] = useState(null);
  const [phoneCounselingSession, setPhoneCounselgingSession] = useState(null);

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

  const getParticipatedActivities = useCallback(async (expertId) => {
    const url = `${process.env.REACT_APP_SERVICE_API}/api/v1/user/${expertId}/part`;

    try {
      const response = await axios.get(url, {
        params: {
          page: 1,
          count: 10,
        },
      });

      if (response.status === 200) {
        const { totalRows, data } = response.data;

        let ary = [];

        for (let i = 0; i < data.length; i++) {
          ary.push({
            activityNumber: "",
            name: "",
            organization: "",
            categoryName: "",
            recruitmentField: "CONSUMER",
            recruitmentTarget: "",
            location: "",
            activityTime: "",
            state: "PRIVATE",
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
  }, []);

  const getConsumedActivities = useCallback(async (expertId) => {
    const url = `${process.env.REACT_APP_SERVICE_API}/api/v1/user/${expertId}/bene`;

    try {
      const response = await axios.get(url, {
        params: {
          page: 1,
          count: 10,
        },
      });

      if (response.status === 200) {
        const { totalRows, data } = response.data;

        let ary = [];

        for (let i = 0; i < data.length; i++) {
          ary.push({
            activityNumber: "",
            name: "",
            organization: "",
            categoryName: "",
            recruitmentField: "CONSUMER",
            recruitmentTarget: "",
            location: "",
            activityTime: "",
            state: "PRIVATE",
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
  }, []);

  const getOnlineCounselingList = useCallback(async (expertId) => {
    const url = `${process.env.REACT_APP_SERVICE_API}/api/v1/user/${expertId}/online`;

    try {
      const response = await axios.get(url, {
        params: {
          page: 1,
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
  }, []);

  const getPhoneCounselingList = useCallback(async (expertId) => {
    const url = `${process.env.REACT_APP_SERVICE_API}/api/v1/user/${expertId}/phone`;

    try {
      const response = await axios.get(url, {
        params: {
          page: 1,
          count: 10,
        },
      });

      if (response.status === 200) {
        const { totalRows, data } = response.data;

        let ary = [];

        for (let i = 0; i < data.length; i++) {
          ary.push({
            idx: data[i].idx,
            title:
              Object.keys(data[i]).includes("title") === false ||
              data[i].title === null
                ? "-"
                : data[i].title, // 상담 제목
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
  }, []);

  useEffect(() => {
    const getExpertDetailInfo = async () => {
      const url = `${process.env.REACT_APP_SERVICE_API}/api/v1/ok/online/admin/detail/${expertId}`;

      try {
        const response = await axios.get(url);

        if (response.status === 200) {
          setExpertInfo({
            idx: response.data.idx,
            // 이미지
            name: response.data.name,
            nickName: response.data.nickname,
            email: response.data.email,
            birth: Object.keys(response.data).includes("birth")
              ? response.data.birth
              : "-",
            gender: Object.keys(response.data).includes("gender")
              ? response.data.gender
              : "-",
            state: response.data.orgStatus,
            // 총 활동 시간
            phone: response.data.phoneNum,
            address: Object.keys(response.data).includes("address1")
              ? response.data.address1 + " " + response.data.address2
              : "-",
            area: response.data.category,
          });
        }
      } catch (e) {
        alert("사용자 상세조회시에 오류가 발생하였습니다.");
        console.log(e);
      }
    };

    getExpertDetailInfo();

    getParticipatedActivities(expertId);
    getConsumedActivities(expertId);

    getOnlineCounselingList(expertId);
    getPhoneCounselingList(expertId);

    if (state.menu.topMenu !== 4 || state.menu.subMenu !== 2) {
      actions.setMenu({
        topMenu: 4,
        subMenu: 2,
      });
    }

    if (!state.subMenu.topMenu4) {
      actions.setSubMenu({
        ...state.subMenu,
        topMenu4: true,
      });
    }

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
  }, []);

  return (
    <div
      className="mdk-drawer-layout js-mdk-drawer-layout"
      data-push
      data-responsive-width="992px"
    >
      <div className="mdk-drawer-layout__content page-content">
        <GlobalBar />
        <PageTitle
          pageTitle="전문가 상세"
          pagePathList={pagePathList}
          onlyTitle={true}
        />

        <div className="container-fluid page__container">
          <div className="page-section">
            {expertInfo && (
              <UserDetailInfo userInfo={expertInfo} type="EXPERT" />
            )}
            <div className="page-section">
              <h2>전문가 활동</h2>

              <div className="page-separator">
                <div className="page-separator__text">
                  온라인 상담 목록(<span className="number-count">12</span>)
                </div>
              </div>
              <div className="card mb-lg-32pt">
                <div className="card-header">
                  <SearchPeriodWithExpertBar />
                </div>
                {onlineCounselingSession && <OnlineConsultationList />}
                <Paging />
              </div>

              <div className="page-separator">
                <div className="page-separator__text">
                  전화 상담 목록(<span className="number-count">12</span>)
                </div>
              </div>
              <div className="card mb-lg-32pt">
                <div className="card-header">
                  <SearchPeriodWithExpertBar />
                </div>
                {phoneCounselingSession && <PhoneCounselingList />}
                <Paging />
              </div>

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
                  <ActivityList list={participatedActivities.list} />
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
                  <ActivityList list={consumedActivities.list} />
                )}
                <Paging
                  pageNumber={pageNumber.consActPageNumber}
                  totalNum={consumedActivities.totalRows}
                  getPageNumber={getConsActPageNumber}
                  count={10}
                />
              </div>

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
                {onlineCounselingList.list && expertInfo && (
                  <OnlineConsultationList
                    list={onlineCounselingList.list}
                    userName={expertInfo.name}
                    pageNumber={1}
                    count={10}
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
                {phoneCounselingList.list && expertInfo && (
                  <PhoneCounselingList
                    list={phoneCounselingList.list}
                    userName={expertInfo.name}
                    pageNumber={1}
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
};
export default ExpertDetailView;
