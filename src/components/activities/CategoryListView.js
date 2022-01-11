import React, { useContext, useEffect, useState, useCallback } from "react";
import axios from "axios";
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

  const [categoryList, setCategoryList] = useState(null);
  const [activeCategoryId, setActiveCategoryId] = useState(null);

  const [activityList, setActivityList] = useState(null);
  const [totalRows, setTotalRows] = useState(null);

  const [pageNumber, setPageNumber] = useState(1);
  const getPageNumber = (curNumber) => {
    setPageNumber(curNumber);
  };

  const selectCategory = (seletedId) => {
    setActiveCategoryId(seletedId);
  };

  const getActivityList = useCallback(async () => {
    const url = `${process.env.REACT_APP_SERVICE_API}/api/v1/activity`;

    try {
      const response = await axios.get(url, {
        params: {
          page: pageNumber,
          count: 10,
          category: activeCategoryId,
        },
      });

      if (response.status === 200) {
        const { totalRows, data } = response.data;
        let ary = [];

        for (let i = 0; i < data.length; i++) {
          ary.push({
            id: data[i].idx, // idx
            name: data[i].title, // 활동명
            organization: data[i].orgTitle, // 기관/단체 명
            categoryName: data[i].category, // 카테고리
            partType: data[i].partType, // 활동자 모집 // X -> 없음, A -> 전체, U -> 일반 , O -> 기관
            beneType: data[i].beneType, // 수요자 모집 // X -> 없음, A -> 전체, U -> 일반 , O -> 기관
            location: data[i].address1, // 활동 장소
            numberOfPeople: data[i].recruitNum, // 필요 인원
            activityTime: data[i].totalTime, // 총 활동 시간
            state: "O", // 상태(공개/비공개) -> 누락
          });
        }

        setTotalRows(totalRows);
        setActivityList(ary);
      }
    } catch (e) {
      alert("활동 목록을 불러오는데 실패하였습니다.");
      console.log(e);
    }
  }, [activeCategoryId, pageNumber]);

  useEffect(() => {
    const getCategoryList = async () => {
      const url = `${process.env.REACT_APP_SERVICE_API}/api/v1/menu/category`;

      try {
        const response = await axios.get(url);

        if (response.status === 200) {
          const { data } = response.data;

          let ary = [];
          for (let i = 0; i < data.length; i++) {
            ary.push({
              id: data[i].idx,
              name: data[i].category,
              img: Object.keys(data[i]).includes("images")
                ? `${process.env.REACT_APP_SERVICE_API}/main/${data[i].folder}/${data[i].images}`
                : `${process.env.PUBLIC_URL}/assets/images/stories/256_rsz_thomas-russell-751613-unsplash.jpg`,
            });
          }

          setCategoryList(ary);
        }
      } catch (e) {
        alert("카테고리 목록을 불러오는데 오류가 발생하였습니다.");
        console.log(e);
      }
    };

    getCategoryList();
    getActivityList();

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

    const srcList = [
      `${process.env.PUBLIC_URL}/assets/vendor/jquery.min.js`,
      `${process.env.PUBLIC_URL}/assets/vendor/popper.min.js`,
      `${process.env.PUBLIC_URL}/assets/vendor/bootstrap.min.js`,
      `${process.env.PUBLIC_URL}/assets/vendor/perfect-scrollbar.min.js`,
      `${process.env.PUBLIC_URL}/assets/vendor/dom-factory.js`,
      `${process.env.PUBLIC_URL}/assets/js/app.js`,
      `${process.env.PUBLIC_URL}/assets/js/hljs.js`,
      `${process.env.PUBLIC_URL}/assets/js/settings.js`,
      `${process.env.PUBLIC_URL}/assets/js/app-settings.js`,
    ];
    let scriptList = [];

    for (let i = 0; i < srcList.length; i++) {
      const script = document.createElement("script");
      script.src = process.env.PUBLIC_URL + srcList[i];
      script.async = true;
      scriptList.push(script);
      document.body.appendChild(script);
    }

    return () => {
      for (let i = 0; i < scriptList.length; i++) {
        document.body.removeChild(scriptList[i]);
      }
    };
  }, [getActivityList]);

  return (
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
              {categoryList &&
                categoryList.map((categoryInfo) => (
                  <CategoryListItem
                    categoryInfo={categoryInfo}
                    isActive={categoryInfo.id === activeCategoryId}
                    selectCategory={selectCategory}
                  />
                ))}
            </div>

            <div className="page-separator">
              <div className="page-separator__text">
                카테고리별 목록(
                <span className="number-count">{totalRows}</span>)
              </div>
            </div>
            <div className="card mb-lg-32pt">
              <div className="card-header">
                <SearchPeriodBar />
              </div>
              {activityList && (
                <ActivityList list={activityList} pageNumber={1} count={10} />
              )}

              <Paging
                pageNumber={pageNumber}
                getPageNumber={getPageNumber}
                totalNum={totalRows}
                count={10}
              />
            </div>
          </div>
        </div>
      </div>
      <SideMenuBar />
    </div>
  );
};

export default CategoryListView;
