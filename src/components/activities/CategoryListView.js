import React from "react";

import GlobalBar from "../common-components/GlobalBar";
import PageTitle from "../common-components/PageTitle";
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

              <ActivityList tableTitle="카테고리별 목록" />
            </div>
          </div>
        </div>
        <SideMenuBar />
      </div>
    </>
  );
};

export default CategoryListView;
