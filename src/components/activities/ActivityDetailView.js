import React from "react";
import GlobalBar from "../common-components/GlobalBar";
import PageTitle from "../common-components/PageTitle";

import SideMenuBar from "../common-components/SideMenuBar";

import ActivityDetailInfo from "./activities-detail-components/ActivityDetailInfo";
import UserList from "./activities-detail-components/UserList";
import AgencyList from "./activities-detail-components/AgencyList";

const pagePathList = [
  {
    pageUrl: "/dashboard",
    pageName: "홈",
  },
];

const ActivityDetailView = () => {
  return (
    <>
      {/* <div className="preloader">
        <div className="sk-chase">
            <div className="sk-chase-dot">
            </div>
            <div className="sk-chase-dot">
            </div>
            <div className="sk-chase-dot">
            </div>
            <div className="sk-chase-dot">
            </div>
            <div className="sk-chase-dot">
            </div>
            <div className="sk-chase-dot">
            </div>
        </div>
    </div> */}
      <div
        className="mdk-drawer-layout js-mdk-drawer-layout"
        data-push
        data-responsive-width="992px"
      >
        <div className="mdk-drawer-layout__content page-content">
          <GlobalBar />
          <PageTitle pageTitle="활동 상세" pagePathList={pagePathList} />

          <div className="container-fluid page__container">
            <div className="page-section">
              <ActivityDetailInfo />

              <h2>참여 목록</h2>
              <UserList tableTitle="참여중인 사용자 목록" />
              <AgencyList tableTitle="참여중인 기관/단체 목록" />

              <UserList tableTitle="참여 신청한 사용자 목록" />
              <AgencyList tableTitle="참여 신청한 기관/단체 목록" />

              <h2>수요 목록</h2>
              <UserList tableTitle="수요 신청자 목록" />
              <AgencyList tableTitle="수요 신청 기관/단체 목록" />

              <UserList tableTitle="수요 신청한 수요자 목록" />
              <AgencyList tableTitle="수요 신청한 수요 기관/단체 목록" />
            </div>
          </div>
        </div>
        <SideMenuBar />
      </div>
    </>
  );
};
export default ActivityDetailView;
