import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import GlobalBar from "../common-components/GlobalBar";
import PageTitle from "../common-components/PageTitle";
import SideMenuBar from "../common-components/SideMenuBar";
import Editor from "../common-components/editor-components/Editor";
import BottomSaveBtn from "../common-components/BottomSaveBtn";

import NoticeDetailInfo from "./notice-components/NoticeDatailInfo";
import MenuContext from "../../context/menu";
import axios from "axios";

const pagePathList = [
  {
    pageUrl: "/dashboard",
    pageName: "홈",
  },
  {
    pageUrl: "/community/notice",
    pageName: "공지사항",
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

const AddNoticeView = () => {
  const history = useHistory();

  const { state, actions } = useContext(MenuContext);

  const [noticeInfo, setNoticeInfo] = useState({
    title: "",
    contactName: "",
    alarmOption: 0,
  });

  const [moreInformation, setMoreInformation] = useState("");

  const [communityState, setCommunityState] = useState("TEMP_SAVE");

  const onChangeNoticeInfo = (name, data) => {
    setNoticeInfo({
      ...noticeInfo,
      [name]: data,
    });
  };

  const onChangeMoreInformation = (data) => {
    setMoreInformation(data);
  };

  const onChangeCommunityState = (data) => {
    setCommunityState(data);
  };

  const onHandleSaveBtn = () => {
    let data = new Object();

    data.title = noticeInfo.title;
    data.contactName = noticeInfo.contactName;
    data.alarm = noticeInfo.alarmOption;
    data.moreInformation = moreInformation;
    data.state = communityState;
    data.userId = sessionStorage.getItem("userId");
    data.type = "NOTICE";

    addNotice(data);
  };

  const addNotice = async (data) => {
    const url = `${process.env.REACT_APP_UPLOAD_SERVICE_API}/api/upload/community/create`;

    try {
      const response = await axios.post(url, data);

      if (response.status === 201) {
        alert("공지사항이 저장되었습니다.");
        history.goBack();
      }
    } catch (e) {
      alert("공지시항 저장에 실패하였습니다.");
      console.log(e);
    }
  };

  const onClickSaveBtn = useConfirm(
    `공지사항을 ${
      {
        TEMP_SAVE: "'임시저장'",
        POST: "'게시'",
      }[communityState]
    } 상태로 저장하시겠습니까?`,
    onHandleSaveBtn
  );

  useEffect(() => {
    if (state.menu.topMenu !== 5 || state.menu.subMenu !== 0) {
      actions.setMenu({
        topMenu: 5,
        subMenu: 0,
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
  }, []);

  return (
    <div
      className="mdk-drawer-layout js-mdk-drawer-layout"
      data-push
      data-responsive-width="992px"
    >
      <div className="mdk-drawer-layout__content page-content">
        <GlobalBar />
        <PageTitle
          pageTitle="글쓰기"
          pagePathList={pagePathList}
          onlyTitle={true}
        />

        <div className="container-fluid page__container">
          <div className="page-section">
            <div className="page-separator">
              <div className="page-separator__text">공지사항</div>
            </div>

            <NoticeDetailInfo
              noticeInfo={noticeInfo}
              onChangeNoticeInfo={onChangeNoticeInfo}
            />
          </div>

          <div className="page-section">
            <div className="page-separator">
              <div className="page-separator__text">상세정보</div>
            </div>
            <Editor
              moreInformation={moreInformation}
              onChangeMoreInformation={onChangeMoreInformation}
            />
          </div>
          <BottomSaveBtn
            type="add"
            onClickSaveBtn={onClickSaveBtn}
            state={communityState}
            onChangeState={onChangeCommunityState}
          />
        </div>
      </div>
      <SideMenuBar />
    </div>
  );
};

export default AddNoticeView;
