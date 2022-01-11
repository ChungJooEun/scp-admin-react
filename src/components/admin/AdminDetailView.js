import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import GlobalBar from "../common-components/GlobalBar";
import PageTitle from "../common-components/PageTitle";
import SideMenuBar from "../common-components/SideMenuBar";
import AdminDetailInfo from "./detail-components/AdminDetailInfo";

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

const AdminDetailView = ({ match }) => {
  const history = useHistory();

  const [adminInfo, setAdminInfo] = useState(null);

  const onChangeAdminInfo = (name, data) => {
    setAdminInfo({
      ...adminInfo,
      [name]: data,
    });
  };

  const onHandleEditInfo = () => {
    if (adminInfo.password1 !== adminInfo.password2) {
      alert("비밀번호가 일치하지 않습니다.\n비밀번호를 확인해주세요.");
      return;
    }

    let data = new Object();

    data.id = adminInfo.id;
    data.name = adminInfo.name;

    if (adminInfo.password1 !== "") data.password = adminInfo.password1;

    data.adminGroup = adminInfo.adminGroup;
    data.phone = adminInfo.phone;
    data.memo = adminInfo.memo;

    requestEditAdminInfo(data);
  };

  const onClickSaveBtn = useConfirm(
    "수정하신 내용을 저장하시겠습니까?",
    onHandleEditInfo
  );

  const requestEditAdminInfo = async (data) => {
    const url = `${process.env.REACT_APP_SERVICE_API}/api/v1/admin/${adminInfo.idx}`;

    try {
      const response = await axios.put(url, data);

      if (response.status === 201) {
        alert("관리자 정보가 수정되었습니다.");
        history.goBack();
      }
    } catch (e) {
      if (e.response.status === 500) {
        alert("이미 등록되어있는 id 입니다.\n다른 아이디를 입력해주세요.");
      } else {
        alert("새로운 관리자 추가 중에 오류가 발생하였습니다.");
        console.log(e.response.status);
      }
    }
  };

  useEffect(() => {
    const { adminId } = match.params;

    const getAdminInfo = async () => {
      const url = `${process.env.REACT_APP_SERVICE_API}/api/v1/admin/${adminId}`;

      try {
        const response = await axios.get(url);

        if (response.status === 200) {
          setAdminInfo({
            idx: response.data.idx,
            id: response.data.id,
            name: response.data.name,
            adminGroup: response.data.adminGroup,
            phone: response.data.phone,
            memo: response.data.memo,
            password1: "",
            password2: "",
          });
        }
      } catch (e) {
        alert("");
        console.log(e);
      }
    };

    getAdminInfo();

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
          pageTitle="관리자 상세"
          pagePathList={pagePathList}
          onlyTitle={true}
        />

        <div className="container-fluid page__container">
          <div className="container-fluid page__container">
            <div className="page-section">
              <div className="page-separator">
                <div className="page-separator__text">관리자 상세조회</div>
              </div>
              {adminInfo && (
                <AdminDetailInfo
                  adminInfo={adminInfo}
                  onChangeAdminInfo={onChangeAdminInfo}
                  type="detail"
                />
              )}
              <button
                className="btn btn btn-secondary ml-16pt"
                onClick={() => history.goBack()}
              >
                취소
              </button>
              <button
                className="btn btn-success"
                onClick={() => onClickSaveBtn()}
              >
                저장
              </button>
            </div>
          </div>
        </div>
      </div>
      <SideMenuBar />
    </div>
  );
};

export default AdminDetailView;
