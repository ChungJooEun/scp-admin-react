import React from "react";

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
