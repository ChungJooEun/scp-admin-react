import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import MenuContext from "../../context/menu";

import GlobalBar from "../common-components/GlobalBar";
import PageTitle from "../common-components/PageTitle";
import SideMenuBar from "../common-components/SideMenuBar";
import PopupBannerList from "./popup-banner-management-components/PopupBannerList";

const pagePathList = [
  {
    pageUrl: "/dashboard",
    pageName: "홈",
  },
  {
    pageUrl: "/main-menu/category",
    pageName: "메뉴 관리",
  },
];

const PopupBannerManagementView = () => {
  const history = useHistory();
  const { state, actions } = useContext(MenuContext);

  useEffect(() => {
    if (state.menu.topMenu !== 1 || state.menu.subMenu !== 1) {
      actions.setMenu({
        topMenu: 1,
        subMenu: 1,
      });
    }

    if (!state.subMenu.topMenu1) {
      actions.setSubMenu({
        ...state.subMenu,
        topMenu1: true,
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
          <PageTitle pagePathList={pagePathList} pageTitle="팝업 배너 관리" />

          <div className="container-fluid page__container">
            <div className="page-section">
              <div className="page-separator">
                <div className="page-separator__text">
                  배너 추가(<span className="number-count">12</span>)
                </div>
              </div>

              <button
                className="btn btn-primary margin-tb-1rem width-100"
                onClick={() => history.push("/main-menu/popup-banner-add")}
              >
                배너 추가 +
              </button>
              <PopupBannerList />
            </div>
          </div>
        </div>
        <SideMenuBar />
      </div>
    </>
  );
};

export default PopupBannerManagementView;
