import React from "react";
import { useHistory } from "react-router-dom";

import GlobalBar from "../common-components/GlobalBar";
import PageTitle from "../common-components/PageTitle";
import SideMenuBar from "../common-components/SideMenuBar";
import AdminDetailInfo from "./detail-components/AdminDetailInfo";

const pagePathList = [
  {
    pageUrl: "/dashboard",
    pageName: "홈",
  },
];

const AdminDetailView = () => {
  const history = useHistory();

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
            pageTitle="관리자 상세"
            pagePathList={pagePathList}
            onlyTitle={true}
          />

          <div className="container-fluid page__container">
            <div className="container-fluid page__container">
              <div className="page-section">
                <div className="page-separator">
                  <div className="page-separator__text">관리자 상세조회</div>
                </div>
                <AdminDetailInfo />
                <button
                  className="btn btn btn-secondary ml-16pt"
                  onClick={() => history.goBack()}
                >
                  취소
                </button>
                <button
                  className="btn btn-success"
                  data-toggle="swal"
                  data-swal-title="완료!"
                  data-swal-text="새로운 관리자가 등록되었습니다!"
                  data-swal-type="success"
                >
                  저장
                </button>
              </div>
            </div>
          </div>
        </div>
        <SideMenuBar />
      </div>
    </>
  );
};

export default AdminDetailView;