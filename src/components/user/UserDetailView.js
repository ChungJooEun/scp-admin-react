import React from "react";
import ActivityList from "../activities/activities-components/ActivityList";

import GlobalBar from "../common-components/GlobalBar";
import PageTitle from "../common-components/PageTitle";
import Paging from "../common-components/Paging";
import SearchPeriodBar from "../common-components/search-components/SearchPeriodBar";
import SideMenuBar from "../common-components/SideMenuBar";
import OnlineConsultationList from "../sc-ok/online-consultation-components/OnlineConsultationList";
import PhoneCounselingList from "../sc-ok/phone-counseling-components/list-components/PhoneCounselingList";

import UserDetailInfo from "./detail-components/UserDetailInfo";

const pagePathList = [
  {
    pageUrl: "/dashboard",
    pageName: "홈",
  },
];

const UserDetailView = () => {
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
            pageTitle="사용자 상세"
            pagePathList={pagePathList}
            onlyTitle={true}
          />

          <div className="container-fluid page__container">
            <div className="page-section">
              <UserDetailInfo />

              <div className="page-section">
                <h2>활동</h2>

                <div className="page-separator">
                  <div className="page-separator__text">
                    참여한 활동 목록(<span className="number-count">12</span>)
                  </div>
                </div>
                <div className="card mb-lg-32pt">
                  <div className="card-header">
                    <SearchPeriodBar />
                  </div>
                  <ActivityList />
                  <Paging />
                </div>

                <div className="page-separator">
                  <div className="page-separator__text">
                    수요 활동 목록(<span className="number-count">12</span>)
                  </div>
                </div>
                <div className="card mb-lg-32pt">
                  <div className="card-header">
                    <SearchPeriodBar />
                  </div>
                  <ActivityList />
                  <Paging />
                </div>

                <h2>상담 목록</h2>
                <div className="page-separator">
                  <div className="page-separator__text">
                    온라인 상담 목록(<span className="number-count">12</span>)
                  </div>
                </div>
                <div className="card mb-lg-32pt">
                  <div className="card-header">
                    <SearchPeriodBar />
                  </div>
                  <OnlineConsultationList />
                  <Paging />
                </div>

                <div className="page-separator">
                  <div className="page-separator__text">
                    전화 상담 목록(<span className="number-count">12</span>)
                  </div>
                </div>

                <div className="card mb-lg-32pt">
                  <div className="card-header">
                    <SearchPeriodBar />
                  </div>
                  <PhoneCounselingList />
                  <Paging />
                </div>
              </div>
            </div>
          </div>
        </div>
        <SideMenuBar />
      </div>
    </>
  );
};

export default UserDetailView;