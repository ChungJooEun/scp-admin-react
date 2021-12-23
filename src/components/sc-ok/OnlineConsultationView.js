import React from "react";

import GlobalBar from "../common-components/GlobalBar";
import PageTitle from "../common-components/PageTitle";
import Paging from "../common-components/Paging";
import SearchPeriodWithExpertBar from "../common-components/search-components/SearchPeriodWithExpertBar";
import SideMenuBar from "../common-components/SideMenuBar";
import AnsweredList from "./online-consultation-components/AnsweredList";
import ImageForm from "./online-consultation-components/ImageForm";
import OnlineConsultationList from "./online-consultation-components/OnlineConsultationList";

const pagePathList = [
  {
    pageUrl: "/dashboard",
    pageName: "홈",
  },
];

const OnlineConsultationView = () => {
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
            pageTitle="서초 OK 생활 자문단 - 온라인 상담"
          />

          <div className="container-fluid page__container">
            <div className="page-section">
              <ImageForm />
              <br />
              <br />
              <br />

              <div className="page-separator">
                <div className="page-separator__text">
                  답변자 지정(<span className="number-count">12</span>)
                </div>
              </div>
              <AnsweredList />

              <div className="page-separator">
                <div className="page-separator__text">
                  온라인 상담 목록(<span className="number-count">12</span>)
                </div>
              </div>
              <div className="card mb-lg-32pt">
                <div className="card-header">
                  <SearchPeriodWithExpertBar />
                </div>
                <OnlineConsultationList />
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

export default OnlineConsultationView;
