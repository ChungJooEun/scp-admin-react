import React from "react";
import ActivityList from "../activities/activities-components/ActivityList";
import UserList from "../activities/activities-detail-components/UserList";
import GlobalBar from "../common-components/GlobalBar";
import PageTitle from "../common-components/PageTitle";
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

const AgencyDetailView = () => {
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
          <PageTitle
            pageTitle="기관/단체 상세"
            pagePathList={pagePathList}
            onlyTitle={true}
          />

          <div className="container-fluid page__container">
            <div className="page-section">
              <AgencyDetailInfo />

              <UserList tableTitle="소속 활동자 목록" />
              <ActivityList tableTitle="등록된 활동 목록" />
            </div>
          </div>
        </div>
        <SideMenuBar />
      </div>
    </>
  );
};

export default AgencyDetailView;
