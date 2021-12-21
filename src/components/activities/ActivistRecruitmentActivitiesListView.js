import React from "react";
import GlobalBar from "../common-components/GlobalBar";
import PageTitle from "../common-components/PageTitle";
import SideMenuBar from "../common-components/SideMenuBar";
import ActivityList from "./activities-components/ActivityList";

const pagePathList = [
  {
    pageUrl: "/dashboard",
    pageName: "홈",
  },
  {
    pageUrl: "/activities/volunteer",
    pageName: "활동 목록",
  },
];

const ActivistRecruitmentActivitiesListView = () => {
  return (
    <>
      {/* <div class="preloader">
        <div class="sk-chase">
            <div class="sk-chase-dot">
            </div>
            <div class="sk-chase-dot">
            </div>
            <div class="sk-chase-dot">
            </div>
            <div class="sk-chase-dot">
            </div>
            <div class="sk-chase-dot">
            </div>
            <div class="sk-chase-dot">
            </div>
        </div>
    </div> */}
      <div
        class="mdk-drawer-layout js-mdk-drawer-layout"
        data-push
        data-responsive-width="992px"
      >
        <div class="mdk-drawer-layout__content page-content">
          <GlobalBar />
          <PageTitle
            pagePathList={pagePathList}
            pageTitle="활동자 모집 활동 목록"
          />

          <div class="container-fluid page__container">
            <div class="page-section">
              <ActivityList tableTitle="목록" />
            </div>
          </div>
        </div>
        <SideMenuBar />
      </div>
    </>
  );
};

export default ActivistRecruitmentActivitiesListView;
