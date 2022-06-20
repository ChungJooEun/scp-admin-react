import React, { useContext, useEffect, useState, useCallback } from "react";
import { useHistory } from "react-router-dom";
import Flatpickr from "react-flatpickr";

import GlobalBar from "../common-components/GlobalBar";
import PageTitle from "../common-components/PageTitle";
import SideMenuBar from "../common-components/SideMenuBar";
import Editor from "../common-components/editor-components/Editor";

import MenuContext from "../../context/menu";
import axios from "axios";
import LoginContext from "../../context/login";
import checkLoginValidation from "../../util/login-validation";
import { convertDateStr } from "../../util/date-convert-function";
import useConfirm from "../../util/useConfirm";

const pagePathList = [
  {
    pageUrl: "/dashboard",
    pageName: "홈",
  },
  {
    pageUrl: "/sc-ok/onsite-consultation",
    pageName: "현장 상담",
  },
];

const AddOnSiteConsultaionView = ({ isModify, match }) => {
  const { consultationId } = isModify && match.params;

  const history = useHistory();

  const { state, actions } = useContext(MenuContext);
  const { isLogin } = useContext(LoginContext).state;

  const [consultationInfo, setConsultationInfo] = useState({
    title: "",
    userName: "",
    userAddr: "",
    registeredDate: null,
    registeredTime: "",
    userContact: "",
    cateId: "default",
    expertIdx: "default",
  });

  const onChangeConsultationInfo = (name, data) => {
    setConsultationInfo({
      ...consultationInfo,
      [name]: data,
    });
  };

  const [content, setContent] = useState("");
  const onChangeContent = (data) => {
    setContent(data);
  };

  const [answer, setAnswer] = useState("");
  const onChangeAnswer = (data) => {
    setAnswer(data);
  };

  const checkValidation = () => {
    // title
    if (consultationInfo.title.trim() === "") {
      alert("상담 제목을 입력해주세요.");
      return false;
    }

    // userName
    if (consultationInfo.userName.trim() === "") {
      alert("신청인 성명을 입력해주세요.");
      return false;
    }

    // userAddr
    if (consultationInfo.userAddr.trim() === "") {
      alert("주소를 입력해주세요.");
      return false;
    }

    // registeredDate
    if (
      consultationInfo.registeredDate === null ||
      (typeof consultationInfo.registeredDate !== "object" &&
        consultationInfo.registeredDate.trim() === "")
    ) {
      alert("접수 일자(날짜)를 입력해주세요.");
      return false;
    }

    // registeredTime
    if (consultationInfo.registeredTime.trim() === "") {
      alert("접수 일자(시간)을 입력해주세요.");
      return false;
    }

    // userContact
    if (consultationInfo.userContact.trim() === "") {
      alert("연락처를 입력해주세요.");
      return false;
    }

    // cateId: "default",
    if (consultationInfo.cateId === "default") {
      alert("상담 분야를 선택해주세요.");
      return false;
    }

    // expertIdx: "default",
    if (consultationInfo.expertIdx === "default") {
      alert("자문가를 선택해주세요.");
      return false;
    }

    if (content.trim() === "") {
      alert("상담 내용을 입력해주세요.");
      return false;
    }

    if (answer.trim() === "") {
      alert("답변 내용을 입력해주세요.");
      return false;
    }

    return true;
  };

  const onHandleSaveBtn = () => {
    // 유효성 검사
    if (!checkValidation()) {
      return false;
    }

    let data = new Object();

    data.title = consultationInfo.title;
    data.registeredDate = convertDateStr(consultationInfo.registeredDate);
    data.registeredTime24 = consultationInfo.registeredTime;

    data.expertIdx = consultationInfo.expertIdx;
    data.consultationContent = content;
    data.answer = answer;

    data.cateId = consultationInfo.cateId;

    data.userName = consultationInfo.userName;
    data.userAddr = consultationInfo.userAddr;
    data.userContact = consultationInfo.userContact;

    data.createdUid = window.sessionStorage.getItem("userIdx");

    addConsultation(data);
  };

  const addConsultation = async (data) => {
    const url = `${process.env.REACT_APP_SERVICE_API}/api/v1/on-site-consultation`;

    try {
      const response = await axios.post(url, data);

      if (response.status === 201) {
        alert("저장되었습니다.");
        history.push("/sc-ok/onsite-consultation");
      }
    } catch (e) {
      alert("현장상담 내역 저장에 실패하였습니다.");
      console.log(e);
    }
  };

  const onClickSaveBtn = useConfirm(
    "현장 상담 내역을 추가하시겠습니까?",
    onHandleSaveBtn
  );

  const onHandleEditBtn = () => {
    let data = new Object();

    data.title = consultationInfo.title;
    data.registeredDate = convertDateStr(consultationInfo.registeredDate);
    data.registeredTime24 = consultationInfo.registeredTime;

    data.expertIdx = consultationInfo.expertIdx;
    data.consultationContent = content;
    data.answer = answer;

    data.cateId = consultationInfo.cateId;

    data.userName = consultationInfo.userName;
    data.userAddr = consultationInfo.userAddr;
    data.userContact = consultationInfo.userContact;

    data.updatedUid = window.sessionStorage.getItem("userIdx");

    editConsultation(data);
  };

  const editConsultation = async (data) => {
    const url = `${process.env.REACT_APP_SERVICE_API}/api/v1/on-site-consultation/${consultationId}`;

    try {
      const response = await axios.put(url, data);

      if (response.status === 200) {
        alert("수정되었습니다.");
        history.push("/sc-ok/onsite-consultation");
      }
    } catch (e) {
      console.log(e);
      alert("현장 상댐 내역 수정에 실패하였습니다.");
    }
  };

  const onClickEditBtn = useConfirm(
    "수정하신 내용을 저장하시겠습니까?",
    onHandleEditBtn
  );

  const [expertList, setExpertList] = useState(null);

  const getExpertList = useCallback(async () => {
    if (consultationInfo.cateId !== "default") {
      const url = `${process.env.REACT_APP_SERVICE_API}/api/v1/ok/phone-schedule/expert/list/${consultationInfo.cateId}`;

      try {
        const response = await axios.get(url);

        if (response.status === 200) {
          let ary = [];

          for (let i = 0; i < response.data.length; i++) {
            ary.push({
              expertId: response.data[i].id,
              expertName: response.data[i].name,
            });
          }

          setExpertList(ary);
        }
      } catch (e) {
        alert("전문가 목록 조회 중, 오류가 발생하였습니다.");
        console.log(e);
      }
    }
  }, [consultationInfo.cateId]);

  const setExpertOption = () => {
    let ary = [];

    ary.push(
      <option value="default" key="default" disabled="true">
        전문가
      </option>
    );

    for (let i = 0; i < expertList.length; i++) {
      ary.push(
        <option value={expertList[i].expertId} key={expertList[i].expertId}>
          {expertList[i].expertName}
        </option>
      );
    }

    return ary;
  };

  const getOnSiteCounselingInfo = useCallback(async () => {
    const url = `${process.env.REACT_APP_SERVICE_API}/api/v1/on-site-consultation/${consultationId}`;

    try {
      const response = await axios.get(url);

      if (response.status === 200) {
        setConsultationInfo({
          idx: consultationId,
          title: response.data.title,
          userName: response.data.userName,
          userAddr: response.data.userAddr,
          registeredDate: new Date(response.data.registeredDate),
          registeredTime: response.data.registeredTime24,
          userContact: response.data.userContact,
          cateId: response.data.cateId,
          expertIdx: response.data.expertIdx,
        });

        setContent(response.data.consultationContent);
        setAnswer(response.data.answer);
      }
    } catch (e) {
      alert("전화 상담 상세조회 중, 오류가 발생하였습니다.");
      console.log(e);
    }
  }, [consultationId]);

  useEffect(() => {
    checkLoginValidation(isLogin);
    if (isLogin) {
      // isModify -> true
      if (isModify) {
        getOnSiteCounselingInfo();
      }

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
  }, [isLogin, getOnSiteCounselingInfo]);

  useEffect(() => {
    // 자문가 정보
    getExpertList();
  }, [getExpertList]);

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
            pageTitle="현장상담 추가"
            pagePathList={pagePathList}
            onlyTitle={true}
          />

          <div className="container-fluid page__container">
            <div className="page-section">
              <div className="page-separator">
                <div className="page-separator__text">상담자 정보</div>
              </div>

              <div className="list-group">
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
                        상담 제목
                      </label>
                      <div className="col-md-10">
                        <input
                          id="title"
                          type="text"
                          placeholder="제목을 입력하세요 ..."
                          className="form-control"
                          value={consultationInfo.title}
                          name="title"
                          onChange={(e) =>
                            onChangeConsultationInfo(
                              e.target.name,
                              e.target.value
                            )
                          }
                        />
                      </div>
                    </div>
                  </div>
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
                        신청인 성명
                      </label>
                      <div className="col-md-10">
                        <input
                          id="userName"
                          type="text"
                          className="form-control"
                          value={consultationInfo.userName}
                          name="userName"
                          onChange={(e) =>
                            onChangeConsultationInfo(
                              e.target.name,
                              e.target.value
                            )
                          }
                        />
                      </div>
                    </div>
                  </div>
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
                        주소
                      </label>
                      <div className="col-md-10">
                        <input
                          id="userAddr"
                          type="text"
                          className="form-control"
                          value={consultationInfo.userAddr}
                          name="userAddr"
                          onChange={(e) =>
                            onChangeConsultationInfo(
                              e.target.name,
                              e.target.value
                            )
                          }
                        />
                      </div>
                    </div>
                  </div>
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
                        접수일자
                      </label>
                      <div className="col-md-5">
                        <Flatpickr
                          className="form-control ml-16"
                          placeholder="접수 일자"
                          data-toggle="flatpickr"
                          options={{ mode: "single" }}
                          onChange={(date) =>
                            onChangeConsultationInfo("registeredDate", date[0])
                          }
                          value={consultationInfo.registeredDate}
                        />
                      </div>
                      <div className="col-md-5">
                        <input
                          id="title"
                          type="time"
                          className="form-control"
                          value={consultationInfo.registeredTime}
                          name="registeredTime"
                          onChange={(e) =>
                            onChangeConsultationInfo(
                              e.target.name,
                              e.target.value
                            )
                          }
                        />
                      </div>
                    </div>
                  </div>
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
                        연락처
                      </label>
                      <div className="col-md-10">
                        <input
                          id="userContact"
                          type="text"
                          className="form-control"
                          value={consultationInfo.userContact}
                          name="userContact"
                          onChange={(e) =>
                            onChangeConsultationInfo(
                              e.target.name,
                              e.target.value
                            )
                          }
                        />
                      </div>
                    </div>
                  </div>
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
                        상담 분야
                      </label>
                      <div className="col-md-10">
                        <select
                          id="select01"
                          data-toggle="select"
                          className="form-control "
                          data-select2-id="select01"
                          tabIndex="-1"
                          aria-hidden="true"
                          name="cateId"
                          defaultValue={consultationInfo.cateId}
                          key={consultationInfo.cateId}
                          value={consultationInfo.cateId}
                          onChange={(e) =>
                            onChangeConsultationInfo(
                              e.target.name,
                              e.target.value
                            )
                          }
                        >
                          <option value="default" disabled>
                            분야
                          </option>
                          <option value="CC00000001">법률</option>
                          <option value="CC00000004">법무</option>
                          <option value="CC00000002">세무</option>
                          <option value="CC00000006">노무</option>
                          <option value="CC00000003">건축</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="page-section">
              <div className="page-separator">
                <div className="page-separator__text">상담 내용</div>
              </div>
              <Editor
                moreInformation={content}
                onChangeMoreInformation={onChangeContent}
                toolbarId="toolbar-container1"
              />
            </div>

            <div className="page-section">
              <div className="page-separator">
                <div className="page-separator__text">자문가 정보</div>
              </div>
              <div className="list-group">
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
                        자문가
                      </label>
                      <div className="col-md-10">
                        <select
                          id="select01"
                          data-toggle="select"
                          className="form-control "
                          data-select2-id="select01"
                          tabIndex="-1"
                          aria-hidden="true"
                          name="expertIdx"
                          defaultValue={consultationInfo.expertIdx}
                          key={consultationInfo.expertIdx}
                          value={consultationInfo.expertIdx}
                          onChange={(e) =>
                            onChangeConsultationInfo(
                              e.target.name,
                              e.target.value
                            )
                          }
                        >
                          {expertList ? (
                            setExpertOption()
                          ) : (
                            <option value="default" key="default">
                              전문가
                            </option>
                          )}
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="page-section">
              <div className="page-separator">
                <div className="page-separator__text">답변 내용</div>
              </div>
              <Editor
                moreInformation={answer}
                onChangeMoreInformation={onChangeAnswer}
                toolbarId="toolbar-container2"
              />
            </div>
            <div className="detail_under_menu ">
              <div className="card">
                <div className="list-group-item">
                  <div
                    role="group"
                    aria-labelledby="label-question"
                    className="m-0 form-group"
                  >
                    <div className="form-row align-items-center">
                      <div className="col-auto d-flex flex-column">
                        <button type="button" className="btn btn-secondary">
                          취소
                        </button>
                      </div>
                      <div className="col-auto d-flex flex-column">
                        <button
                          type="button"
                          className="btn btn-primary"
                          onClick={() =>
                            isModify ? onClickEditBtn() : onClickSaveBtn()
                          }
                        >
                          저장
                        </button>
                      </div>
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
  else return null;
};

export default AddOnSiteConsultaionView;
