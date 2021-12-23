import React from "react";
import BottomSaveBtn from "../common-components/BottomSaveBtn";
import Editor from "../common-components/editor-components/Editor";
import GlobalBar from "../common-components/GlobalBar";
import PageTitle from "../common-components/PageTitle";
import SideMenuBar from "../common-components/SideMenuBar";
import NoticeDetailInfo from "./notice-components/NoticeDatailInfo";

const pagePathList = [
  {
    pageUrl: "/dashboard",
    pageName: "홈",
  },
  {
    pageUrl: "/community/notice",
    pageName: "공지사항",
  },
];

const NoticeDetailView = () => {
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
            pageTitle="상세조회"
            pagePathList={pagePathList}
            onlyTitle={true}
          />

          <div className="container-fluid page__container">
            <div className="page-section">
              <div className="page-separator">
                <div className="page-separator__text">공지사항</div>
              </div>

              <NoticeDetailInfo />
            </div>

            <div className="page-section">
              <div className="page-separator">
                <div className="page-separator__text">상세정보</div>
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

export default NoticeDetailView;
