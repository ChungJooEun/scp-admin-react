import React from "react";
import GlobalBar from "../common-components/GlobalBar";
import PageTitle from "../common-components/PageTitle";
import SideMenuBar from "../common-components/SideMenuBar";
import AgencyList from "./agency-list-components/AgencyList";

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

const AgencyListView = () => {
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
          <PageTitle pagePathList={pagePathList} pageTitle="기관/단체 목록" />

          <div className="container-fluid page__container">
            <div className="page-section">
              <AgencyList />
            </div>
          </div>
        </div>
        <SideMenuBar />
      </div>
    </>
  );
};

export default AgencyListView;
