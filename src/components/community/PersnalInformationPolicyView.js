import React, { useContext, useEffect, useState } from "react";
import MenuContext from "../../context/menu";
import LoginContext from "../../context/login";
import axios from "axios";

import BottomSaveBtn from "../common-components/BottomSaveBtn";
import Editor from "../common-components/editor-components/Editor";
import GlobalBar from "../common-components/GlobalBar";
import PageTitle from "../common-components/PageTitle";
import SideMenuBar from "../common-components/SideMenuBar";
import checkLoginValidation from "../../util/login-validation";

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

const PersnalInformationPolicyView = () => {
  const { state, actions } = useContext(MenuContext);
  const { isLogin } = useContext(LoginContext).state;

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
    data.type = "PRIVACY";

    isFirst ? addPrivacyPolicy(data) : editPrivacyPolicy(data);
  };

  const addPrivacyPolicy = async (data) => {
    const url = `${process.env.REACT_APP_UPLOAD_SERVICE_API}/api/upload/community/create`;

    try {
      const response = await axios.post(url, data);

      if (response.status === 201) {
        alert("개인정보 처리방침이 저장되었습니다.");
      }
    } catch (e) {
      alert("개인정보 처리방침 저장에 실패하였습니다.");
      console.log(e);
    }
  };

  const editPrivacyPolicy = async (data) => {
    const url = `${process.env.REACT_APP_UPLOAD_SERVICE_API}/api/upload/community/update`;

    try {
      const response = await axios.post(url, data);

      if (response.status === 201) {
        alert("개인정보 처리방침이 수정되었습니다.");
      }
    } catch (e) {
      alert("개인정보 처리방침 수정에 실패하였습니다.");
      console.log(e);
    }
  };

  const onClickSaveBtn = useConfirm(
    `개인정보 처리방침을 ${
      {
        TEMP_SAVE: "'임시저장'",
        POST: "'게시'",
      }[communityState]
    } 상태로 저장하시겠습니까?`,
    onHandleSaveBtn
  );

  useEffect(() => {
    checkLoginValidation(isLogin);

    if (isLogin) {
      const getPrivacyPolicyInfo = async () => {
        const url = `${process.env.REACT_APP_SERVICE_API}/api/v1/community/privacy`;

        try {
          const response = await axios.get(url);

          if (response.status === 200) {
            setIsFirst(
              Object.keys(response.data).includes("id") ? false : true
            );

            setMoreInformation(
              Object.keys(response.data).includes("moreInformation")
                ? response.data.moreInformation
                : ""
            );

            setCommunityState(response.data.state);
          }
        } catch (e) {
          alert("개인정보 처리방침 상세조회 중, 오류가 발생하였습니다.");
          console.log(e);
        }
      };

      getPrivacyPolicyInfo();

      if (state.menu.topMenu !== 5 || state.menu.subMenu !== 5) {
        actions.setMenu({
          topMenu: 5,
          subMenu: 5,
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
    }
  }, [isLogin]);

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
            pageTitle="개인정보 처리방침"
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
  else return null;
};

export default PersnalInformationPolicyView;
