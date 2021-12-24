import React, { useEffect, useContext } from "react";

import GlobalBar from "../common-components/GlobalBar";
import PageTitle from "../common-components/PageTitle";

import ActivityCount from "./dashboard-components/stat-components/ActivityCount";
import ActivistStat from "./dashboard-components/stat-components/ActivistStat";
import InstitutionStat from "./dashboard-components/stat-components/InstitutionStat";
import SeochoOkConsulting from "./dashboard-components/stat-components/SechoOkConsulting";
import AgencyRequestList from "../agency/agency-list-components/AgencyRequestList";
import SearchPeriodBar from "../common-components/search-components/SearchPeriodBar";
import SideMenuBar from "../common-components/SideMenuBar";
import Paging from "../common-components/Paging";
import MenuContext from "../../context/menu";

const pagePathList = [
  {
    pageUrl: "/dashboard",
    pageName: "홈",
  },
];

const DashBoardView = () => {
  const { state, actions } = useContext(MenuContext);

  useEffect(() => {
    if (state.menu.topMenu !== 0 || state.menu.subMenu !== 0) {
      actions.setMenu({
        topMenu: 0,
        subMenu: 0,
      });
    }
  }, []);

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

                  <AgencyRequestList />

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
