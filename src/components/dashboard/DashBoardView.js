import React from "react";

import GlobalBar from "../common-components/GlobalBar";
import PageTitle from "../common-components/PageTitle";

import ActivityCount from "./dashboard-components/stat-components/ActivityCount";
import ActivistStat from "./dashboard-components/stat-components/ActivistStat";
import InstitutionStat from "./dashboard-components/stat-components/InstitutionStat";
import SeochoOkConsulting from "./dashboard-components/stat-components/SechoOkConsulting";
import AgencyList from "../agency/agency-list-components/AgencyList";
import SearchPeriodBar from "../common-components/SearchPeriodBar";
import SideMenuBar from "../common-components/SideMenuBar";

const DashBoardView = () => {
  return (
    <>
      <div className="preloader">
        <div className="sk-chase">
          <div className="sk-chase-dot"></div>
          <div className="sk-chase-dot"></div>
          <div className="sk-chase-dot"></div>
          <div className="sk-chase-dot"></div>
          <div className="sk-chase-dot"></div>
          <div className="sk-chase-dot"></div>
        </div>
      </div>
      <div
        className="mdk-drawer-layout js-mdk-drawer-layout"
        data-push
        data-responsive-width="992px"
      >
        <div className="mdk-drawer-layout__content page-content">
          <GlobalBar />

          <PageTitle />
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

                  <div className="card-footer p-8pt">
                    <ul className="pagination justify-content-start pagination-xsm m-0">
                      <li className="page-item disabled">
                        <a className="page-link" href="#" aria-label="Previous">
                          <span aria-hidden="true" className="material-icons">
                            chevron_left
                          </span>
                          <span>이전</span>
                        </a>
                      </li>
                      <li className="page-item dropdown">
                        <a
                          className="page-link dropdown-toggle"
                          data-toggle="dropdown"
                          href="#"
                          aria-label="Page"
                        >
                          <span>1</span>
                        </a>
                        <div className="dropdown-menu">
                          <a href="" className="dropdown-item active">
                            1
                          </a>
                          <a href="" className="dropdown-item">
                            2
                          </a>
                          <a href="" className="dropdown-item">
                            3
                          </a>
                          <a href="" className="dropdown-item">
                            4
                          </a>
                          <a href="" className="dropdown-item">
                            5
                          </a>
                        </div>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#" aria-label="Next">
                          <span>다음</span>
                          <span aria-hidden="true" className="material-icons">
                            chevron_right
                          </span>
                        </a>
                      </li>
                    </ul>
                  </div>
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
