import React, { useEffect, useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

import GlobalBar from "../common-components/GlobalBar";
import PageTitle from "../common-components/PageTitle";
import SideMenuBar from "../common-components/SideMenuBar";
import AdminDetailInfo from "./detail-components/AdminDetailInfo";
import LoginContext from "../../context/login";
import checkLoginValidation from "../../util/login-validation";

const pagePathList = [
  {
    pageUrl: "/dashboard",
    pageName: "홈",
  },
];

const AddAdminView = () => {
  const { isLogin } = useContext(LoginContext).state;
  const history = useHistory();

  const [adminInfo, setAdminInfo] = useState({
    id: "",
    name: "",
    password1: "",
    password2: "",
    adminGroup: 0,
    phone: "",
    memo: "",
  });

  const onChangeAdminInfo = (name, data) => {
    setAdminInfo({
      ...adminInfo,
      [name]: data,
    });
  };

  const onClickAddAdmin = () => {
    if (adminInfo.password1 !== adminInfo.password2) {
      alert("비밀번호가 일치하지 않습니다.\n비밀번호를 확인해주세요.");
      return;
    }

    let data = new Object();

    data.id = adminInfo.id;
    data.name = adminInfo.name;
    data.password = adminInfo.password1;
    data.adminGroup = adminInfo.adminGroup;
    data.phone = adminInfo.phone;
    data.memo = adminInfo.memo;
    data.createdUid = window.sessionStorage.getItem("userId");

    requestAddAdmin(data);
  };

  const requestAddAdmin = async (data) => {
    const url = `${process.env.REACT_APP_SERVICE_API}/api/v1/admin`;

    try {
      const response = await axios.post(url, data);

      if (response.status === 201) {
        alert("새로운 관리자가 등록되었습니다.");
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
    checkLoginValidation(isLogin);

    if (isLogin) {
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
            pageTitle="관리자 관리"
            pagePathList={pagePathList}
            onlyTitle={true}
          />

          <div className="container-fluid page__container">
            <div className="container-fluid page__container">
              <div className="page-section">
                <div className="page-separator">
                  <div className="page-separator__text">관리자 등록하기</div>
                </div>
                <AdminDetailInfo
                  adminInfo={adminInfo}
                  onChangeAdminInfo={onChangeAdminInfo}
                />
                <button
                  className="btn btn btn-secondary ml-16pt"
                  onClick={() => history.goBack()}
                >
                  취소
                </button>
                <button
                  className="btn btn-success"
                  onClick={() => onClickAddAdmin()}
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
  else return null;
};

export default AddAdminView;
