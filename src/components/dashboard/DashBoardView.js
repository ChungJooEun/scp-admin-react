import React from "react";

import GlobalBar from "../common-components/GlobalBar";
import PageTitle from "../common-components/PageTitle";

import ActivityCount from "./dashboard-components/stat-components/ActivityCount";
import ActivistStat from "./dashboard-components/stat-components/ActivistStat";
import InstitutionStat from "./dashboard-components/stat-components/InstitutionStat";
import SeochoOkConsulting from "./dashboard-components/stat-components/SechoOkConsulting";
import AgencyList from "../agency/agency-list-components/AgencyList";
import SearchPeriodBar from "../common-components/search-components/SearchPeriodBar";
import SideMenuBar from "../common-components/SideMenuBar";
import Paging from "../common-components/Paging";

const pagePathList = [
  {
    pageUrl: "/dashboard",
    pageName: "홈",
  },
];

const DashBoardView = () => {
  return (
    <>
      {/* <div className="preloader">
        <div className="sk-chase">
          <div className="sk-chase-dot"></div>
          <div className="sk-chase-dot"></div>
          <div className="sk-chase-dot"></div>
          <div className="sk-chase-dot"></div>
          <div className="sk-chase-dot"></div>
          <div className="sk-chase-dot"></div>
        </div>
      </div> */}
      <div
        className="mdk-drawer-layout js-mdk-drawer-layout"
        data-push
        data-responsive-width="992px"
      >
        <div className="mdk-drawer-layout__content page-content">
          <GlobalBar />

          <PageTitle pageTitle={"대시보드"} pagePathList={pagePathList} />
          <div
            className="mdk-drawer-layout js-mdk-drawer-layout"
            data-push
            data-responsive-width="992px"
          >
            <div className="container-fluid page__container">
              <div className="page-section">
                <ActivityCount />

                <ActivistStat type="activist" title="활동자" />
                <ActivistStat type="consumer" title="수요자" />

                <InstitutionStat />

                <SeochoOkConsulting />

                <div className="page-separator">
                  <div className="page-separator__text">기관/단체 등록요청</div>
                </div>
                <div className="card mb-lg-32pt">
                  <div className="card-header">
                    <SearchPeriodBar />
                  </div>

                  <AgencyList />

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

export default DashBoardView;
