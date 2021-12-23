import React from "react";
import Editor from "../common-components/editor-components/Editor";
import GlobalBar from "../common-components/GlobalBar";
import PageTitle from "../common-components/PageTitle";
import SideMenuBar from "../common-components/SideMenuBar";
import QnADetailInfo from "./qna-components/QnADetailInfo";

const pagePathList = [
  {
    pageUrl: "/dashboard",
    pageName: "홈",
  },
  {
    pageUrl: "/community/qna",
    pageName: "문의/답변",
  },
];

const QnABoardDetailView = () => {
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
            pageTitle="문의/답변 상세조회"
            pagePathList={pagePathList}
            onlyTitle={true}
          />

          <div className="container-fluid page__container">
            <QnADetailInfo />

            <div className="page-section">
              <div className="page-separator">
                <div className="page-separator__text">답변하기</div>
              </div>
              <div className="list-group-item">
                <div
                  role="group"
                  aria-labelledby="label-question"
                  className="m-0 form-group"
                >
                  <div className="form-row align-items-center">
                    <label
                      id="label-question"
                      for="question"
                      className="col-md-2 col-form-label form-label"
                    >
                      담당자
                    </label>
                    <div className="col-md-10">
                      <input
                        id="title"
                        type="text"
                        placeholder=""
                        className="form-control"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <Editor />
            </div>

            <div className="detail_under_menu mb-24pt">
              <div className="list-group-item">
                <div
                  role="group"
                  aria-labelledby="label-question"
                  className="m-0 form-group"
                >
                  <div className="form-row align-items-center">
                    <div className="col-auto d-flex flex-column">
                      <button
                        type="submit"
                        className="btn btn-outline-secondary"
                      >
                        삭제
                      </button>
                    </div>
                    <div className="col-auto d-flex flex-column">
                      <button type="submit" className="btn btn-secondary">
                        취소
                      </button>
                    </div>
                    <div className="col-auto d-flex flex-column">
                      <button type="submit" className="btn btn-primary">
                        확인
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <SideMenuBar />
      </div>
    </>
  );
};

export default QnABoardDetailView;
