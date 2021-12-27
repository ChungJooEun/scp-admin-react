import React, { useContext, useEffect } from "react";
import MenuContext from "../../context/menu";

import GlobalBar from "../common-components/GlobalBar";
import PageTitle from "../common-components/PageTitle";
import Paging from "../common-components/Paging";
import SearchPeriodBar from "../common-components/search-components/SearchPeriodBar";
import SideMenuBar from "../common-components/SideMenuBar";

import ActivityList from "./activities-components/ActivityList";
import CategoryListItem from "./category-components/CategoryListItem";

const pagePathList = [
  {
    pageUrl: "/dashboard",
    pageName: "홈",
  },
  {
    pageUrl: "/activities/by-category",
    pageName: "활동 목록",
  },
];

const CategoryListView = () => {
  const { state, actions } = useContext(MenuContext);

  useEffect(() => {
    if (state.menu.topMenu !== 2 || state.menu.subMenu !== 3) {
      actions.setMenu({
        topMenu: 2,
        subMenu: 3,
      });
    }

    if (!state.subMenu.topMenu2) {
      actions.setSubMenu({
        ...state.subMenu,
        topMenu2: true,
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
            pageTitle="카테고리별 목록보기"
          />

          <div className="container-fluid page__container">
            <div className="page-section">
              <div className="row card-group-row" data-toggle="dragula">
                <CategoryListItem />
                <CategoryListItem />
                <CategoryListItem />
                <CategoryListItem />
                <CategoryListItem />
              </div>

              <div className="page-separator">
                <div className="page-separator__text">
                  카테고리별 목록(<span className="number-count">12</span>)
                </div>
              </div>
              <div className="card mb-lg-32pt">
                <div className="card-header">
                  <SearchPeriodBar />
                </div>
                <ActivityList />
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

export default CategoryListView;
