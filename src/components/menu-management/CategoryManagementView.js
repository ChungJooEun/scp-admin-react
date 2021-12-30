import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import MenuContext from "../../context/menu";
import axios from "axios";

import Category from "../../example/category";

import GlobalBar from "../common-components/GlobalBar";
import PageTitle from "../common-components/PageTitle";
import SideMenuBar from "../common-components/SideMenuBar";
import CategoryList from "./category-management-components/CategoryList";

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

const CategoryManagementView = () => {
  const history = useHistory();
  const { state, actions } = useContext(MenuContext);

  const [categoryList, setCategoryList] = useState(null);

  useEffect(() => {
    const getCategoryList = async () => {
      const url = "http://118.67.153.236:8080/api/v1/menu/category";

      try {
        const response = await axios.get(url);

        if (response.status === 200) {
          // set state
        }
      } catch (e) {
        alert("카테고리 목록을 불러오는데 오류가 발생하였습니다.");
        console.log(e);
      }
    };

    let ary = [];
    for (let i = 0; i < Category.length; i++) {
      ary.push({
        id: Category[i].id,
        name: Category[i].name,
        img: Category[i].img,
      });
    }

    setCategoryList(ary);

    if (state.menu.topMenu !== 1 || state.menu.subMenu !== 0) {
      actions.setMenu({
        topMenu: 1,
        subMenu: 0,
      });
    }

    if (!state.subMenu.topMenu1) {
      actions.setSubMenu({
        ...state.subMenu,
        topMenu1: true,
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
  }, []);

  if (!categoryList) {
    return <div></div>;
  }

  return (
    <>
      <div
        className="mdk-drawer-layout js-mdk-drawer-layout"
        data-push
        data-responsive-width="992px"
      >
        <div className="mdk-drawer-layout__content page-content">
          <GlobalBar />

          <PageTitle pageTitle="카테고리 관리" pagePathList={pagePathList} />

          <div className="container-fluid page__container">
            <div className="page-section">
              <div className="page-separator">
                <div className="page-separator__text">
                  카테고리(
                  <span className="number-count">{categoryList.length}</span>)
                </div>
              </div>

              <button
                className="btn btn-primary margin-tb-1rem width-100"
                onClick={() => history.push("/main-menu/category-add")}
              >
                카테고리 추가 +
              </button>
              <CategoryList list={categoryList} />
            </div>
          </div>
        </div>
        <SideMenuBar />
      </div>
    </>
  );
};

export default CategoryManagementView;
