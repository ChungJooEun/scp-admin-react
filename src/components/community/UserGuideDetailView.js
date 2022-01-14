import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import MenuContext from "../../context/menu";

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

const UserGuideDetailView = ({ match }) => {
  const { state, actions } = useContext(MenuContext);

  const [fileId, setFileId] = useState(null);
  const [fileList, setFileList] = useState(null);

  const [isClickable, setIsClickable] = useState(true);

  const [guideId, setGuideId] = useState(null);
  const [title, setTitle] = useState(null);

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
    setIsClickable(false);
  };

  const deleteFile = (deleteId) => {
    let ary = fileList;

    ary = ary.filter((fileInfo) => fileInfo.id !== deleteId);

    setFileList(ary);
    setIsClickable(true);
  };

  const editUserGuide = async (data) => {
    const url = `${process.env.REACT_APP_UPLOAD_SERVICE_API}/api/upload/community/userguide/update`;

    try {
      const response = await axios.post(url, data, {
        headers: {
          "content-type": "multipart/form-data",
        },
      });

      if (response.status === 201) {
        alert("수정되었습니다.");
      }
    } catch (e) {
      alert("사용자 가이드 수정 중, 오류가 발생하였습니다.");
      console.log(e);
    }
  };

  const onHandleSaveBtn = () => {
    let formData = new FormData();

    formData.append("idx", guideId);
    formData.append("title", title);
    formData.append("userId", window.sessionStorage.getItem("userId"));

    if (fileList !== null) {
      for (let i = 0; i < fileList.length; i++) {
        fileList[i].type === "add" &&
          formData.append("guideFile", fileList[i].file);
      }
    }

    for (let v of formData.values()) {
      console.log(v);
    }

    editUserGuide(formData);
  };

  const onClickSaveBtn = useConfirm(
    "사용자 가이드를 수정하시겠습니까?",
    onHandleSaveBtn
  );

  const requestDeleteFile = async (deleteIdx, id) => {
    const url = `${process.env.REACT_APP_SERVICE_API}/api/v1/community/userguide`;

    try {
      const response = await axios.delete(url, {
        params: {
          idxs: deleteIdx,
        },
      });

      if (response.status === 200) {
        alert("삭제되었습니다.");
        deleteFile(id);
      }
    } catch (e) {
      alert("첨부파일 삭제 중, 오류가 발생하였습니다.");
      console.log(e);
    }
  };

  useEffect(() => {
    const { guideId } = match.params;

    const getGuideInfo = async () => {
      const url = `${process.env.REACT_APP_SERVICE_API}/api/v1/community/userguide/${guideId}`;

      try {
        const response = await axios.get(url);

        if (response.status === 200) {
          setGuideId(response.data.idx);
          setTitle(response.data.title);

          let id = 0;
          let ary = [];
          for (let i = 0; i < response.data.filesCount; i++) {
            ary.push({
              id: id++,
              file: {
                idx: response.data.files[i].idx,
                name: response.data.files[i].orgname,
                size: response.data.files[i].filesize,
                folder: response.data.files[i].folder,
                fileName: response.data.files[i].filename,
              },
              type: "download",
            });
          }

          setFileId(id);
          setFileList(ary);
        }
      } catch (e) {
        alert("사용자 가이드 상세조회 중, 오류가 발생하였습니다.");
        console.log(e);
      }
    };

    getGuideInfo();

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
              {title && (
                <GuideName title={title} onChangeTitle={onChangeTitle} />
              )}
            </div>

            <UploadFileComponent
              onChangeFiles={onChangeFiles}
              onClickSaveBtn={onClickSaveBtn}
              isClickable={isClickable}
            />

            {fileList &&
              fileList.map((fileInfo) => (
                <FileComponent
                  id={fileInfo.id}
                  fileInfo={fileInfo.file}
                  deleteFile={deleteFile}
                  type={fileInfo.type}
                  requestDeleteFile={requestDeleteFile}
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

export default UserGuideDetailView;
