import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import MenuContext from "../../context/menu";

import GlobalBar from "../common-components/GlobalBar";
import PageTitle from "../common-components/PageTitle";
import Paging from "../common-components/Paging";
import SideMenuBar from "../common-components/SideMenuBar";
import AdminList from "./list-components/AdminList";

const pagePathList = [
  {
    pageUrl: "/dashboard",
    pageName: "홈",
  },
];

const GeneralAdminListView = () => {
  const { state, actions } = useContext(MenuContext);
  const history = useHistory();

  useEffect(() => {
    if (state.menu.topMenu !== 7 || state.menu.subMenu !== 1) {
      actions.setMenu({
        topMenu: 7,
        subMenu: 1,
      });
    }

    if (!state.subMenu.topMenu7) {
      actions.setSubMenu({
        ...state.subMenu,
        topMenu7: true,
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
          <PageTitle pageTitle="일반 관리자" pagePathList={pagePathList} />

          <div className="container-fluid page__container">
            <div className="page-section">
              <div className="container-fluid page__container">
                <div className="page-section">
                  <button
                    className="btn btn-primary margin-tb-1rem width-100"
                    onClick={() => history.push("/admin/add-admin")}
                  >
                    + 새로운 관리자 등록하기
                  </button>

                  <div className="page-separator">
                    <div className="page-separator__text">
                      목록(<span className="number-count">12</span>)
                    </div>
                  </div>

                  <div className="card mb-lg-32pt">
                    <AdminList />
                    <Paging />
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

export default GeneralAdminListView;
