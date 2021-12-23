import React from "react";

import GlobalBar from "../common-components/GlobalBar";
import PageTitle from "../common-components/PageTitle";
import Paging from "../common-components/Paging";
import SearchPeriodWithExpertBar from "../common-components/search-components/SearchPeriodWithExpertBar";
import SideMenuBar from "../common-components/SideMenuBar";
import ImageForm from "./online-consultation-components/ImageForm";

import ReservationCallender from "./phone-counseling-components/callender-components/ReservationCallender";
import PhoneCounselingList from "./phone-counseling-components/list-components/PhoneCounselingList";

const pagePathList = [
  {
    pageUrl: "/dashboard",
    pageName: "홈",
  },
];

const PhoneCounselingView = () => {
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
            pageTitle="서초 OK 생활 자문단 - 전화 상담"
          />

          <div className="container-fluid page__container">
            <div className="page-section">
              <ImageForm />
              <br />
              <br />
              <br />
              <button
                className="btn btn-primary width-100"
                onclick="location.href='../sc-ok/add-consultation.html'"
              >
                일정 추가 +
              </button>
              <br />
              <br />
              <ReservationCallender />

              <div className="page-separator">
                <div className="page-separator__text">
                  전화 상담 목록(<span className="number-count">12</span>)
                </div>
              </div>
              <div className="card mb-lg-32pt">
                <div className="card-header">
                  <SearchPeriodWithExpertBar />
                </div>
                <PhoneCounselingList />
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

export default PhoneCounselingView;
