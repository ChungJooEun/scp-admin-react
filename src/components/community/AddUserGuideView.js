import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import MenuContext from "../../context/menu";
import { useHistory } from "react-router-dom";

import GlobalBar from "../common-components/GlobalBar";
import PageTitle from "../common-components/PageTitle";
import SideMenuBar from "../common-components/SideMenuBar";
import FileComponent from "./user-guide-components/FileComponent";
import GuideName from "./user-guide-components/GuideName";
import UploadFileComponent from "./user-guide-components/UploadFileComponent";

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

const AddUserGuideView = () => {
  const history = useHistory();
  const { state, actions } = useContext(MenuContext);

  const [title, setTitle] = useState("");
  const [fileList, setFileList] = useState(null);
  const [fileId, setFileId] = useState(0);

  const onChangeTitle = (data) => {
    setTitle(data);
  };

  const onChangeFiles = (files) => {
    let ary = [];

    let id = fileId;

    for (let i = 0; i < files.length; i++) {
      ary.push({
        id: i + id++,
        file: files[i],
        type: "add",
      });
    }

    setFileId(id);
    setFileList(!fileList ? ary : ary.concat(fileList));
  };

  const deleteFile = (deleteId) => {
    let ary = fileList;

    ary = ary.filter((fileInfo) => fileInfo.id !== deleteId);

    setFileList(ary);
  };

  const saveUserGuide = async (data) => {
    const url = `${process.env.REACT_APP_UPLOAD_SERVICE_API}/api/upload/community/userguide/create`;

    try {
      const response = await axios.post(url, data, {
        headers: {
          "content-type": "multipart/form-data",
        },
      });

      if (response.status === 201) {
        alert("저장되었습니다.");
        history.goBack();
      }
    } catch (e) {
      alert("사용자 가이드 업로드 중, 오류가 발생하였습니다.");
      console.log(e);
    }
  };

  const onHandleSaveBtn = () => {
    let formData = new FormData();

    formData.append("title", title);
    formData.append("userId", window.sessionStorage.getItem("userId"));

    if (fileList !== null) {
      for (let i = 0; i < fileList.length; i++) {
        formData.append("guideFile", fileList[i].file);
      }
    }

    for (let v of formData.values()) {
      console.log(v);
    }

    saveUserGuide(formData);
  };

  const onClickSaveBtn = useConfirm(
    "사용자 가이드를 저장하시겠습니까?",
    onHandleSaveBtn
  );

  useEffect(() => {
    if (state.menu.topMenu !== 5 || state.menu.subMenu !== 3) {
      actions.setMenu({
        topMenu: 5,
        subMenu: 3,
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
          pageTitle="사용자 가이드"
          pagePathList={pagePathList}
          onlyTitle={true}
        />

        <div className="container-fluid page__container">
          <div className="page-section">
            <div className="list-group">
              <GuideName title={title} onChangeTitle={onChangeTitle} />
            </div>

            <UploadFileComponent
              onChangeFiles={onChangeFiles}
              onClickSaveBtn={onClickSaveBtn}
            />

            {fileList &&
              fileList.map((fileInfo) => (
                <FileComponent
                  id={fileInfo.id}
                  fileInfo={fileInfo.file}
                  deleteFile={deleteFile}
                  type={fileInfo.type}
                  key={fileInfo.id}
                />
              ))}
          </div>
        </div>
      </div>
      <SideMenuBar />
    </div>
  );
};

export default AddUserGuideView;
