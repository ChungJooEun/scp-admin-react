import React, { useContext, useEffect } from "react";
import MenuContext from "../../context/menu";

import GlobalBar from "../common-components/GlobalBar";
import PageTitle from "../common-components/PageTitle";
import SideMenuBar from "../common-components/SideMenuBar";
import CounselingAnswer from "./online-consultation-components/CounselingAnswer";
import PhoneCounselingInfo from "./phone-counseling-components/PhoneCounselingInfo";

const pagePathList = [
  {
    pageUrl: "/dashboard",
    pageName: "홈",
  },
  {
    pageUrl: "/sc-ok/phone-consultation",
    pageName: "서초 OK 생활 자문단 - 전화 상담",
  },
];

const PhoneCounselingDetailView = () => {
  const { state, actions } = useContext(MenuContext);

  useEffect(() => {
    if (state.menu.topMenu !== 4 || state.menu.subMenu !== 1) {
      actions.setMenu({
        topMenu: 4,
        subMenu: 1,
      });
    }

    if (!state.subMenu.topMenu4) {
      actions.setSubMenu({
        ...state.subMenu,
        topMenu4: true,
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
      {/* <div class="preloader">
        <div class="sk-chase">
            <div class="sk-chase-dot">
            </div>
            <div class="sk-chase-dot">
            </div>
            <div class="sk-chase-dot">
            </div>
            <div class="sk-chase-dot">
            </div>
            <div class="sk-chase-dot">
            </div>
            <div class="sk-chase-dot">
            </div>
        </div>
    </div> */}
      <div
        class="mdk-drawer-layout js-mdk-drawer-layout"
        data-push
        data-responsive-width="992px"
      >
        <div class="mdk-drawer-layout__content page-content">
          <GlobalBar />
          <PageTitle
            pageTitle="전화 상담 활동상세"
            pagePathList={pagePathList}
            onlyTitle={true}
          />

          <div class="container-fluid page__container">
            <div class="page-section">
              <div class="page-separator">
                <div class="page-separator__text">상담 내용</div>
              </div>

              <PhoneCounselingInfo />
              <br />
              <br />
              <br />

              <div className="page-separator">
                <div className="page-separator__text">답변 내용</div>
              </div>
              <CounselingAnswer />
            </div>
          </div>
        </div>
        <SideMenuBar />
      </div>
    </>
  );
};

export default PhoneCounselingDetailView;
