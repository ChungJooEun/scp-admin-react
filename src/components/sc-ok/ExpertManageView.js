import React, { useContext, useEffect } from "react";
import MenuContext from "../../context/menu";
import GlobalBar from "../common-components/GlobalBar";
import PageTitle from "../common-components/PageTitle";
import Paging from "../common-components/Paging";
import SearchPeriodBar from "../common-components/search-components/SearchPeriodBar";
import SideMenuBar from "../common-components/SideMenuBar";
import ExpertList from "./expert-manage-components/ExpertList";

const pagePathList = [
  {
    pageUrl: "/dashboard",
    pageName: "홈",
  },
];

const ExpertManageView = () => {
  const { state, actions } = useContext(MenuContext);

  useEffect(() => {
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
  }, []);

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
            pageTitle="서초 OK 생활 자문단 - 전문가 관리"
          />

          <div className="container-fluid page__container">
            <div className="page-section">
              <h2>전문가</h2>
              <div className="">
                <a className="btn btn-accent btn-block-xs">전체</a>
                <a className="btn btn-secondary btn-block-xs">법률</a>
                <a className="btn btn-secondary btn-block-xs">세무</a>
                <a className="btn btn-secondary btn-block-xs">건축</a>
                <a className="btn btn-secondary btn-block-xs">법무</a>
                <a className="btn btn-secondary btn-block-xs">노무</a>
              </div>
              <br />

              <div className="page-separator">
                <div className="page-separator__text">
                  목록(<span className="number-count">12</span>)
                </div>
              </div>

              <br />
              <br />

              <div className="card mb-lg-32pt">
                <div className="card-header">
                  <SearchPeriodBar />
                </div>
                <ExpertList />
                <Paging />
              </div>
            </div>
          </div>
        </div>
        <SideMenuBar />
      </div>
    </>
  );
};

export default ExpertManageView;
