import React, { useContext, useEffect, useState } from "react";
import MenuContext from "../../context/menu";
import axios from "axios";
import { useHistory } from "react-router-dom";

import BottomSaveBtn from "../common-components/BottomSaveBtn";
import Editor from "../common-components/editor-components/Editor";
import GlobalBar from "../common-components/GlobalBar";
import PageTitle from "../common-components/PageTitle";
import SideMenuBar from "../common-components/SideMenuBar";
import FAQDetailInfo from "./faq-components/FAQDetailInfo";

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

const AddFAQView = () => {
  const history = useHistory();
  const { state, actions } = useContext(MenuContext);

  const [faqInfo, setFaqInfo] = useState({
    title: "",
    contactName: "",
  });

  const [moreInformation, setMoreInformation] = useState("");

  const [communityState, setCommunityState] = useState("TEMP_SAVE");

  const onChangeFAQInfo = (name, data) => {
    setFaqInfo({
      ...faqInfo,
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

    data.title = faqInfo.title;
    data.contactName = faqInfo.contactName;

    data.moreInformation = moreInformation;
    data.state = communityState;
    data.userId = sessionStorage.getItem("userId");
    data.type = "FAQ";

    addFAQ(data);
  };

  const addFAQ = async (data) => {
    const url = `http://${process.env.REACT_APP_SERVICE_IP}:${process.env.REACT_APP_UPLOAD_SERVICE_PORT}/api/upload/community/create`;

    try {
      const response = await axios.post(url, data);

      if (response.status === 201) {
        alert("FAQ가 저장되었습니다.");
        history.goBack();
      }
    } catch (e) {
      alert("FAQ 저장에 실패하였습니다.");
      console.log(e);
    }
  };

  const onClickSaveBtn = useConfirm(
    `FAQ를 ${
      {
        TEMP_SAVE: "'임시저장'",
        POST: "'게시'",
      }[communityState]
    } 상태로 저장하시겠습니까?`,
    onHandleSaveBtn
  );

  useEffect(() => {
    if (state.menu.topMenu !== 5 || state.menu.subMenu !== 2) {
      actions.setMenu({
        topMenu: 5,
        subMenu: 2,
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
          pageTitle="자주 묻는 질문(FAQ)"
          pagePathList={pagePathList}
          onlyTitle={true}
        />

        <div className="container-fluid page__container">
          <div className="page-section">
            <FAQDetailInfo
              faqInfo={faqInfo}
              onChangeFAQInfo={onChangeFAQInfo}
            />

            <div className="page-separator">
              <div className="page-separator__text">답변</div>
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

export default AddFAQView;
