import React, { useContext, useEffect, useState } from "react";
import MenuContext from "../../context/menu";
import axios from "axios";
import { useHistory } from "react-router-dom";

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

const useConfirm = (message = null, onConfirm) => {
  if (!onConfirm || typeof onConfirm !== "function") {
    return;
  }

  const confirmAction = () => {
    if (window.confirm(message)) {
      onConfirm();
    }
  };
  return confirmAction;
};

const QnABoardDetailView = ({ match }) => {
  const history = useHistory();
  const { state, actions } = useContext(MenuContext);

  const [qnaInfo, setQnaInfo] = useState(null);
  const [answerInfo, setAnswerInfo] = useState(null);

  const onChangeContactName = (data) => {
    setAnswerInfo({
      ...answerInfo,
      contactName: data,
    });
  };

  const onChangeMoreInformation = (data) => {
    setAnswerInfo({
      ...answerInfo,
      content: data,
    });
  };

  const saveAnswer = async (data) => {
    const url = `${process.env.REACT_APP_UPLOAD_SERVICE_API}/api/upload/community/qna`;

    try {
      const response = await axios.post(url, data);

      if (response.status === 201) {
        alert("답변이 저장되었습니다.");
        history.goBack();
      }
    } catch (e) {
      alert("답변을 저장 중, 오류가 발생하였습니다.");
      console.log(e);
    }
  };

  const onHandleAddAnswer = () => {
    let data = new Object();

    data.idx = qnaInfo.idx;
    data.chargeName = answerInfo.contactName;
    data.answer = answerInfo.content;
    data.userIdx = window.sessionStorage.getItem("userIdx");

    saveAnswer(data);
  };

  const onClickSaveBtn = useConfirm(
    "문의 사항에 대한 답변을 등록하시겠습니까?",
    onHandleAddAnswer
  );

  useEffect(() => {
    const { qnaIdx } = match.params;

    const getQnaInfo = async () => {
      const url = `${process.env.REACT_APP_SERVICE_API}/api/v1/community/qna/${qnaIdx}`;

      try {
        const response = await axios.get(url);

        if (response.status === 200) {
          setQnaInfo({
            title: response.data.title,
            nickName: response.data.nickname,
            idx: qnaIdx,
            viewCount: 0, // 조회수
            createDate: "2022.01.14", // 등록일
            openStatus: response.data.openStatus,
            content: response.data.content,
          });

          setAnswerInfo({
            contactName: Object.keys(response.data).includes("chargeName")
              ? response.data.chargeName
              : "",
            content: Object.keys(response.data).includes("answer")
              ? response.data.answer
              : "",
          });
        }
      } catch (e) {
        alert("문의/답변 상세조회 중, 오류가 발생하였습니다.");
        console.log(e);
      }
    };

    getQnaInfo();

    if (state.menu.topMenu !== 5 || state.menu.subMenu !== 1) {
      actions.setMenu({
        topMenu: 5,
        subMenu: 1,
      });
    }

    if (!state.subMenu.topMenu5) {
      actions.setSubMenu({
        ...state.subMenu,
        topMenu5: true,
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
  }, [match.params]);

  return (
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
          {qnaInfo && <QnADetailInfo qnaInfo={qnaInfo} />}

          {answerInfo && (
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
                      htmlFor="question"
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
                        value={answerInfo.contactName}
                        onChange={(e) => onChangeContactName(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <Editor
                moreInformation={answerInfo.content}
                onChangeMoreInformation={onChangeMoreInformation}
              />
            </div>
          )}

          <div className="detail_under_menu mb-24pt">
            <div className="list-group-item">
              <div
                role="group"
                aria-labelledby="label-question"
                className="m-0 form-group"
              >
                <div className="form-row align-items-center">
                  <div className="col-auto d-flex flex-column">
                    <button type="button" className="btn btn-outline-secondary">
                      삭제
                    </button>
                  </div>
                  <div className="col-auto d-flex flex-column">
                    <button type="button" className="btn btn-secondary">
                      취소
                    </button>
                  </div>
                  <div className="col-auto d-flex flex-column">
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={() => onClickSaveBtn()}
                    >
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
  );
};

export default QnABoardDetailView;
