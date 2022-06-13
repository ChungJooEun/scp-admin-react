import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import MenuContext from "../../context/menu";
import axios from "axios";
import LoginContext from "../../context/login";

import GlobalBar from "../common-components/GlobalBar";
import PageTitle from "../common-components/PageTitle";
import SideMenuBar from "../common-components/SideMenuBar";
import CounselingAnswer from "./online-consultation-components/CounselingAnswer";
import PhoneCounselingInfo from "./phone-counseling-components/PhoneCounselingInfo";
import convertDashToDot from "../../util/date-convert-function";
import convertValidString from "../../util/string-convert-finction";
import checkLoginValidation from "../../util/login-validation";
import useConfirm from "../../util/useConfirm";

const pagePathList = [
  {
    pageUrl: "/dashboard",
    pageName: "홈",
  },
  {
    pageUrl: "/sc-ok/onsite-consultation",
    pageName: "서초 OK 생활 자문단 - 현장 상담",
  },
];

const OnsiteCounselingDetailView = ({ match }) => {
  const { consultationId } = match.params;
  const { state, actions } = useContext(MenuContext);
  const { isLogin } = useContext(LoginContext).state;
  const history = useHistory();

  const [conselingInfo, setCounselingInfo] = useState(null);
  const [answerInfo, setAnswerInfo] = useState(null);

  const onHandleDelete = async () => {
    const url = `${process.env.REACT_APP_SERVICE_API}/api/v1/on-site-consultation/${consultationId}`;

    try {
      const response = await axios.delete(url);

      if (response.status === 200) {
        alert("삭제되었습니다.");
        history.push("/sc-ok/onsite-consultation");
      }
    } catch (e) {
      alert("현장 상담 내역 삭제 중, 오류가 발생하였습니다.");
      console.log(e);
    }
  };

  const onClickDelBtn = useConfirm("삭제하시겠습니까?", onHandleDelete);

  useEffect(() => {
    checkLoginValidation(isLogin);
    if (isLogin) {
      const getOnSiteCounselingInfo = async () => {
        const url = `${process.env.REACT_APP_SERVICE_API}/api/v1/on-site-consultation/${consultationId}`;

        try {
          const response = await axios.get(url);

          if (response.status === 200) {
            setCounselingInfo({
              idx: consultationId,
              title: response.data.title, // 제목
              name: convertValidString(response.data.userName), // 신청인 성명
              address: response.data.userAddr,
              createDate: `${convertDashToDot(response.data.registeredDate)} ${
                response.data.registeredTime
              }`, // 접수 일자
              contact: convertValidString(response.data.userContact), // 연락처
              area: response.data.area, // 상담 분야
              content: response.data.consultationContent, //  상담 내용
            });

            setAnswerInfo({
              expertName: response.data.expertName,
              answer: response.data.answer,
            });
          }
        } catch (e) {
          alert("전화 상담 상세조회 중, 오류가 발생하였습니다.");
          console.log(e);
        }
      };

      getOnSiteCounselingInfo();

      if (state.menu.topMenu !== 4 || state.menu.subMenu !== 3) {
        actions.setMenu({
          topMenu: 4,
          subMenu: 3,
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
    }
  }, [consultationId, isLogin]);

  if (isLogin)
    return (
      <div
        className="mdk-drawer-layout js-mdk-drawer-layout"
        data-push
        data-responsive-width="992px"
      >
        <div className="mdk-drawer-layout__content page-content">
          <GlobalBar />
          <PageTitle
            pageTitle="현장 상담 상세"
            pagePathList={pagePathList}
            onlyTitle={true}
          />

          <div className="container-fluid page__container">
            <div className="page-section">
              <div className="page-separator">
                <div className="page-separator__text">상담 내용</div>
              </div>

              {conselingInfo && (
                <PhoneCounselingInfo
                  conselingInfo={conselingInfo}
                  hideStatus={true}
                />
              )}
              <br />
              <br />
              <br />

              <div className="page-separator">
                <div className="page-separator__text">답변 내용</div>
              </div>

              <div className="row">
                <div className="col-lg-12">
                  {answerInfo && (
                    <CounselingAnswer type="onSite" answerInfo={answerInfo} />
                  )}

                  <a
                    href={`${
                      process.env.REACT_APP_SERVICE_API
                    }/api/v1/pdf/ok-phone-detail/${window.sessionStorage.getItem(
                      "userIdx"
                    )}/${consultationId}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <input
                      className="btn btn-primary ml-16pt"
                      type="button"
                      value="상담 기록부 PDF 다운로드"
                    />
                  </a>
                  <input
                    className="btn btn-primary ml-16pt"
                    type="button"
                    value="수정하기"
                  />
                  <input
                    className="btn btn-warning ml-16pt"
                    type="button"
                    onClick={onClickDelBtn}
                    value="삭제"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <SideMenuBar />
      </div>
    );
  else return null;
};

export default OnsiteCounselingDetailView;
