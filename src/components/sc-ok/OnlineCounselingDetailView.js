import React, { useEffect, useContext, useState } from "react";
import LoginContext from "../../context/login";

import GlobalBar from "../common-components/GlobalBar";
import PageTitle from "../common-components/PageTitle";
import SideMenuBar from "../common-components/SideMenuBar";

import OnlineCounselingInfo from "./online-consultation-components/OnlineCounselingInfo";
import CounselingAnswer from "./online-consultation-components/CounselingAnswer";
import MenuContext from "../../context/menu";
import axios from "axios";
import convertValidString, {
  convertValidAddressString,
} from "../../util/string-convert-finction";
import checkLoginValidation from "../../util/login-validation";

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

const OnlineCounselingDetailView = ({ match }) => {
  const { state, actions } = useContext(MenuContext);
  const { isLogin } = useContext(LoginContext).state;

  const { consultaionId } = match.params;

  const [conselingInfo, setCounselingInfo] = useState(null);
  const [answerInfo, setAnswerInfo] = useState(null);

  useEffect(() => {
    checkLoginValidation(isLogin);
    if (isLogin) {
      const getOnlineCounselingInfo = async () => {
        const url = `${process.env.REACT_APP_SERVICE_API}/api/v1/ok/online/view/${consultaionId}`;

        try {
          const response = await axios.get(url);

          if (response.status === 200) {
            setCounselingInfo({
              idx: consultaionId,
              title: response.data.title,
              name: convertValidString(response.data.name),
              address: convertValidAddressString(
                response.data.address1,
                response.data.address2
              ),
              createDate: response.data.createdAt,
              contact: convertValidString(response.data.phoneNum),
              consultationStatus: response.data.consultationStatus,
              state: response.data.openStatus,
              area: response.data.area,
              content: response.data.content,
            });

            setAnswerInfo({
              expertName: convertValidString(response.data.expertName),
              answeredDate: convertValidString(response.data.answerAt),
              answer: convertValidString(response.data.answer),
            });
          }
        } catch (e) {
          alert("온라인 상담 상세조회 중, 오류가 발생하였습니다.");
          console.log(e);
        }
      };

      getOnlineCounselingInfo();

      if (state.menu.topMenu !== 4 || state.menu.subMenu !== 0) {
        actions.setMenu({
          topMenu: 4,
          subMenu: 0,
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
  }, [consultaionId, isLogin]);

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
            pageTitle="온라인 상담 활동상세"
            pagePathList={pagePathList}
            onlyTitle={true}
          />

          <div className="container-fluid page__container">
            <div className="page-section">
              <div className="page-separator">
                <div className="page-separator__text">상담 내용</div>
              </div>

              {conselingInfo && (
                <OnlineCounselingInfo conselingInfo={conselingInfo} />
              )}
              <br />
              <br />
              <br />

              <div className="page-separator">
                <div className="page-separator__text">답변 내용</div>
              </div>

              <div className="row">
                <div className="col-lg-12">
                  {answerInfo && <CounselingAnswer answerInfo={answerInfo} />}

                  <a
                    href={`${
                      process.env.REACT_APP_SERVICE_API
                    }/api/v1/pdf/ok-online-detail/${window.sessionStorage.getItem(
                      "userIdx"
                    )}/${consultaionId}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <input
                      className="btn btn-primary ml-16pt"
                      type="button"
                      value="상담 기록부 PDF 다운로드"
                    />
                  </a>
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

export default OnlineCounselingDetailView;
