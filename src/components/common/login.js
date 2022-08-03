import React, { useState, useContext } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

import LoginContext from "../../context/login";

const Login = () => {
  const { actions } = useContext(LoginContext);
  const history = useHistory();

  const [loginInfo, setLoginInfo] = useState({
    id: "",
    password: "",
  });

  const onChangeLoginInfo = (name, data) => {
    setLoginInfo({
      ...loginInfo,
      [name]: data,
    });
  };

  const login = async () => {
    let data = new Object();

    data.id = loginInfo.id;
    data.password = loginInfo.password;

    const url = `${process.env.REACT_APP_SERVICE_API}/login`;

    try {
      const response = await axios.post(url, data);

      if (response.status === 200) {
        window.sessionStorage.setItem("token", response.headers.token);
        window.sessionStorage.setItem("userId", response.headers.userid);
        window.sessionStorage.setItem(
          "adminGroup",
          response.headers.admingroup
        );
        window.sessionStorage.setItem("userIdx", response.headers.useridx);
        actions.setIsLogin(true);

        if (response.headers.admingroup === "2") {
          history.push("/sc-ok/online-consultation");
        } else {
          history.push("/dashboard");
        }
      }
    } catch (e) {
      alert("로그인 실패\n아이디와 비밀번호를 확인해주세요. ");
      console.log(e);
    }
  };

  return (
    <div
      className="mdk-drawer-layout js-mdk-drawer-layout"
      data-push
      data-responsive-width="992px"
    >
      <div className="mdk-drawer-layout__content page-content">
        <div className="container-fluid page__container">
          <div className="page-section"></div>
          <div className="page-section">
            <div className="col-md-5 p-0 mx-auto">
              <h2 className="mb-0">
                <img
                  src={`${process.env.PUBLIC_URL}/assets/images/logo/scplatform_logo.png`}
                  alt="logo_img"
                />
              </h2>
              <br />
              <br />
              <div className="form-group">
                <label className="form-label" htmlFor="email">
                  아이디:
                </label>
                <input
                  id="email"
                  type="text"
                  name="id"
                  className="form-control"
                  placeholder="아이디 ..."
                  onChange={(e) =>
                    onChangeLoginInfo(e.target.name, e.target.value)
                  }
                />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="password">
                  비밀번호:
                </label>
                <input
                  id="password"
                  type="password"
                  className="form-control"
                  placeholder="비밀번호 ..."
                  name="password"
                  onChange={(e) =>
                    onChangeLoginInfo(e.target.name, e.target.value)
                  }
                />
              </div>
              <div className="text-center">
                <button className="btn btn-accent" onClick={() => login()}>
                  로그인
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
