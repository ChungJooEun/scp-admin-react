import React from "react";

import SideMenuBar from "../common-components/SideMenuBar";
import GlobalBar from "../common-components/GlobalBar";
import PageTitle from "../common-components/PageTitle";
import ActivityList from "./activities-components/ActivityList";

const pagePathList = [
  {
    pageUrl: "/dashboard",
    pageName: "홈",
  },
  {
    pageUrl: "/activities/requests",
    pageName: "활동 목록",
  },
];

const ConsumerRecruitmentActivitiesListView = () => {
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
            pagePathList={pagePathList}
            pageTitle="수요자 모집 활동 목록"
          />

          <div className="container-fluid page__container">
            <div className="page-section">
              <ActivityList tableTitle="목록" />
            </div>
          </div>
        </div>
        <SideMenuBar />
      </div>
    </>
  );
};

export default ConsumerRecruitmentActivitiesListView;
