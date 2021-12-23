import React from "react";

import GlobalBar from "../common-components/GlobalBar";
import PageTitle from "../common-components/PageTitle";
import SideMenuBar from "../common-components/SideMenuBar";

import OnlineCounselingInfo from "./online-consultation-components/OnlineCounselingInfo";
import CounselingAnswer from "./online-consultation-components/CounselingAnswer";

const pagePathList = [
  {
    pageUrl: "/dashboard",
    pageName: "홈",
  },
  {
    pageUrl: "/sc-ok/online-consultation",
    pageName: "서초 OK 생활 자문단 - 온라인 상담",
  },
];

const OnlineCounselingDetailView = () => {
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
            pageTitle="온라인 상담 활동상세"
            pagePathList={pagePathList}
            onlyTitle={true}
          />

          <div className="container-fluid page__container">
            <div className="page-section">
              <div className="page-separator">
                <div className="page-separator__text">상담 내용</div>
              </div>

              <OnlineCounselingInfo />
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

export default OnlineCounselingDetailView;
