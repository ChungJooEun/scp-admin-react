import React, { useContext, useEffect, useState } from "react";
import MenuContext from "../../context/menu";
import axios from "axios";
import { useHistory } from "react-router-dom";

import BottomSaveBtn from "../common-components/BottomSaveBtn";
import Editor from "../common-components/editor-components/Editor";
import GlobalBar from "../common-components/GlobalBar";
import PageTitle from "../common-components/PageTitle";
import SideMenuBar from "../common-components/SideMenuBar";

const pagePathList = [
  {
    pageUrl: "/dashboard",
    pageName: "홈",
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

const AccessTermsView = () => {
  const { state, actions } = useContext(MenuContext);

  const [moreInformation, setMoreInformation] = useState("");
  const [communityState, setCommunityState] = useState(null);

  const [isFirst, setIsFirst] = useState(null);

  const onChangeMoreInformation = (data) => {
    setMoreInformation(data);
  };

  const onChangeCommunityState = (data) => {
    setCommunityState(data);
  };

  const onHandleSaveBtn = () => {
    let data = new Object();

    data.moreInformation = moreInformation;
    data.state = communityState;
    data.userId = sessionStorage.getItem("userId");
    data.type = "TERMS";

    isFirst ? addAccessTerms(data) : editAccessTerms(data);
  };

  const addAccessTerms = async (data) => {
    const url = `http://${process.env.REACT_APP_SERVICE_IP}:${process.env.REACT_APP_UPLOAD_SERVICE_PORT}/api/upload/community/create`;

    try {
      const response = await axios.post(url, data);

      if (response.status === 201) {
        alert("이용약관이 저장되었습니다.");
      }
    } catch (e) {
      alert("이용약관 저장에 실패하였습니다.");
      console.log(e);
    }
  };

  const editAccessTerms = async (data) => {
    const url = `http://${process.env.REACT_APP_SERVICE_IP}:${process.env.REACT_APP_UPLOAD_SERVICE_PORT}/api/upload/community/update`;

    try {
      const response = await axios.post(url, data);

      if (response.status === 201) {
        alert("이용약관이 수정되었습니다.");
      }
    } catch (e) {
      alert("이용약관 저장에 실패하였습니다.");
      console.log(e);
    }
  };

  const onClickSaveBtn = useConfirm(
    `이용약관을 ${
      {
        TEMP_SAVE: "'임시저장'",
        POST: "'게시'",
      }[communityState]
    } 상태로 저장하시겠습니까?`,
    onHandleSaveBtn
  );

  useEffect(() => {
    const getAccessTermsInfo = async () => {
      const url = `http://${process.env.REACT_APP_SERVICE_IP}:${process.env.REACT_APP_SERVICE_PORT}/api/v1/community/terms`;

      try {
        const response = await axios.get(url);

        if (response.status === 200) {
          setIsFirst(Object.keys(response.data).includes("id") ? false : true);

          setMoreInformation(
            Object.keys(response.data).includes("moreInformation")
              ? response.data.moreInformation
              : ""
          );

          setCommunityState(response.data.state);
        }
      } catch (e) {
        alert("이용약관 상세조회 중, 오류가 발생하였습니다.");
        console.log(e);
      }
    };

    getAccessTermsInfo();

    if (state.menu.topMenu !== 5 || state.menu.subMenu !== 4) {
      actions.setMenu({
        topMenu: 5,
        subMenu: 4,
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
          pageTitle="이용약관"
          pagePathList={pagePathList}
          onlyTitle={true}
        />

        <div className="container-fluid page__container">
          <div className="page-section">
            <div className="page-separator">
              <div className="page-separator__text">상세정보</div>
            </div>

            <Editor
              moreInformation={moreInformation}
              onChangeMoreInformation={onChangeMoreInformation}
            />
          </div>
          {communityState && (
            <BottomSaveBtn
              type="add"
              onClickSaveBtn={onClickSaveBtn}
              state={communityState}
              onChangeState={onChangeCommunityState}
            />
          )}
        </div>
      </div>
      <SideMenuBar />
    </div>
  );
};

export default AccessTermsView;
