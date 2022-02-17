import React, { useContext, useEffect, useState } from "react";
import MenuContext from "../../context/menu";
import LoginContext from "../../context/login";
import axios from "axios";
import { useHistory } from "react-router-dom";
import checkLoginValidation from "../../util/login-validation";

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

const FAQDetailView = ({ match }) => {
  const history = useHistory();
  const { state, actions } = useContext(MenuContext);
  const { isLogin } = useContext(LoginContext).state;

  const [faqInfo, setFaqInfo] = useState(null);
  const [moreInformation, setMoreInformation] = useState(null);
  const [communityState, setCommunityState] = useState(null);

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

    data.id = faqInfo.id;
    data.title = faqInfo.title;
    data.contactName = faqInfo.contactName;

    data.moreInformation = moreInformation;
    data.state = communityState;
    data.userId = sessionStorage.getItem("userId");
    data.type = "FAQ";

    editFAQ(data);
  };

  const editFAQ = async (data) => {
    const url = `${process.env.REACT_APP_UPLOAD_SERVICE_API}/api/upload/community/update`;

    try {
      const response = await axios.post(url, data);

      if (response.status === 201) {
        alert("수정되었습니다.");
        history.goBack();
      }
    } catch (e) {
      alert("FAQ 수정에 실패하였습니다.");
      console.log(e);
    }
  };

  const onClickSaveBtn = useConfirm(`FAQ를 수정하시겠습니까?`, onHandleSaveBtn);

  const deleteNotice = async () => {
    const url = `${process.env.REACT_APP_SERVICE_API}/api/v1/community`;

    try {
      const response = await axios.delete(url, {
        params: {
          idxs: faqInfo.idx,
        },
      });

      if (response.status === 200) {
        alert("삭제되었습니다.");
        history.goBack();
      }
    } catch (e) {
      alert("삭제중, 오류가 발생하였습니다.");
      console.log(e);
    }
  };

  const onClickDelBtn = useConfirm(
    "faq를 삭제하시겠습니까?\n삭제된 내용은 복구할 수 없습니다.",
    deleteNotice
  );

  useEffect(() => {
    checkLoginValidation(isLogin);

    if (isLogin) {
      const { faqId } = match.params;

      const getFAQInfo = async () => {
        const url = `${process.env.REACT_APP_SERVICE_API}/api/v1/community/${faqId}`;

        try {
          const response = await axios.get(url);

          setFaqInfo({
            id: response.data.id,
            idx: response.data.idx,
            title: response.data.title,
            contactName: response.data.contactName,
          });

          setMoreInformation(response.data.moreInformation);

          setCommunityState(response.data.state);
        } catch (e) {
          alert("faq 상세조회중, 오류가 발생하였습니다.");
          console.log(e);
        }
      };

      getFAQInfo();

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
    }
  }, [isLogin, match.params]);

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
            pageTitle="자주 묻는 질문(FAQ)"
            pagePathList={pagePathList}
            onlyTitle={true}
          />

          <div className="container-fluid page__container">
            <div className="page-section">
              {faqInfo && (
                <FAQDetailInfo
                  faqInfo={faqInfo}
                  onChangeFAQInfo={onChangeFAQInfo}
                />
              )}

              <div className="page-separator">
                <div className="page-separator__text">답변</div>
              </div>
              {moreInformation && (
                <Editor
                  moreInformation={moreInformation}
                  onChangeMoreInformation={onChangeMoreInformation}
                />
              )}
            </div>

            {communityState && (
              <BottomSaveBtn
                type="detail"
                state={communityState}
                onChangeState={onChangeCommunityState}
                onClickSaveBtn={onClickSaveBtn}
                onClickDelBtn={onClickDelBtn}
              />
            )}
          </div>
        </div>
        <SideMenuBar />
      </div>
    );
  else return null;
};

export default FAQDetailView;
