import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
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

  const [popupBannerList, setPopupBannerList] = useState(null);
  const [totalRows, setTotalRows] = useState(null);

  useEffect(() => {
    const getPopupBannerList = async () => {
      const url = `http://${process.env.REACT_APP_SERVICE_IP}:${process.env.REACT_APP_SERVICE_PORT}/api/v1/menu/banner`;

      try {
        const response = await axios.get(url);

        if (response.status === 200) {
          const { totalRows, data } = response.data;

          let ary = [];

          for (let i = 0; i < data.length; i++) {
            ary.push({
              id: data[i].idx,
              link: data[i].category,
              state: data[i].isPost, // 나중에 수정되어야함
              img: Object.keys(data[i]).includes("images")
                ? `http://${process.env.REACT_APP_SERVICE_IP}:${process.env.REACT_APP_SERVICE_PORT}/main/${data[i].folder}/${data[i].images}`
                : `${process.env.PUBLIC_URL}/assets/images/stories/256_rsz_thomas-russell-751613-unsplash.jpg`,
            });
          }

          setTotalRows(totalRows);
          setPopupBannerList(ary);
        }
      } catch (e) {
        alert("팝업 배너 목록 조회에 오류가 발생하였습니다.");
        console.log(e);
      }
    };

    getPopupBannerList();

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

  return (
    <>
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
                  배너 추가(
                  <span className="number-count">{totalRows}</span>)
                </div>
              </div>

              <button
                className="btn btn-primary margin-tb-1rem width-100"
                onClick={() => history.push("/main-menu/popup-banner-add")}
              >
                배너 추가 +
              </button>
              {popupBannerList && <PopupBannerList list={popupBannerList} />}
            </div>
          </div>
        </div>
        <SideMenuBar />
      </div>
    </>
  );
};

export default PopupBannerManagementView;
