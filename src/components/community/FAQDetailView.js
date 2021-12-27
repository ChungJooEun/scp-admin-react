import React, { useContext, useEffect } from "react";
import MenuContext from "../../context/menu";
import BottomSaveBtn from "../common-components/BottomSaveBtn";
import Editor from "../common-components/editor-components/Editor";
import GlobalBar from "../common-components/GlobalBar";
import PageTitle from "../common-components/PageTitle";
import SideMenuBar from "../common-components/SideMenuBar";
import FAQDetailInfo from "./faq-components/FAQDetailInfo";

const pagePathList = [
  {
    pageUrl: "/dashboard",
    pageName: "홈",
  },
];

const FAQDetailView = () => {
  const { state, actions } = useContext(MenuContext);

  useEffect(() => {
    if (state.menu.topMenu !== 5 || state.menu.subMenu !== 2) {
      actions.setMenu({
        topMenu: 5,
        subMenu: 2,
      });
    }

    if (!state.subMenu.topMenu5) {
      actions.setSubMenu({
        ...state.subMenu,
        topMenu5: true,
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
            pageTitle="자주 묻는 질문(FAQ)"
            pagePathList={pagePathList}
            onlyTitle={true}
          />

          <div className="container-fluid page__container">
            <div className="page-section">
              <FAQDetailInfo />

              <div className="page-separator">
                <div className="page-separator__text">답변</div>
              </div>
              <Editor />
            </div>

            <BottomSaveBtn type="detail" />
          </div>
        </div>
        <SideMenuBar />
      </div>
    </>
  );
};

export default FAQDetailView;
