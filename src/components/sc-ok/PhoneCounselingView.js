import React from "react";

import GlobalBar from "../common-components/GlobalBar";
import PageTitle from "../common-components/PageTitle";
import SideMenuBar from "../common-components/SideMenuBar";

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
              {/* <div className="row">
                        <div className="col-lg-4">
                            <div className="card mb-lg-0">
                                <div className="list-group list-group-flush">
                                    <div className="list-group-item p-16pt">
                                        <a href="" className="d-block mb-16pt"><img
                                                src="../assets/images/stories/256_rsz_jared-rice-388260-unsplash.jpg"
                                                alt="" className="card-img card-img-cover"/></a>
                                        <div className="form-row align-items-center">
                                            <label id="label-question" for="question"
                                                className="col-md-2 col-form-label form-label"></label>
                                            <div className="col-md-10">
                                                <input type="file" className="" id="customFileUploadMultiple" multiple=""/>
                                                <label className="" for="customFileUploadMultiple"></label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br/><br/><br/> */}
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
              <PhoneCounselingList />
            </div>
          </div>
        </div>
        <SideMenuBar />
      </div>
    </>
  );
};

export default PhoneCounselingView;
