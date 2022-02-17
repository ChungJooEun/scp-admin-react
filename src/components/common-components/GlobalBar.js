import React, { useContext, useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import MenuContext from "../../context/menu";
import LoginContext from "../../context/login";

const GlobalBar = () => {
  const history = useHistory();
  const { actions, state } = useContext(MenuContext);
  const { setIsLogin } = useContext(LoginContext).actions;

  const [userId, setUserId] = useState(null);

  const onToggleMenuBar = () => {
    actions.setHideMenu(!state.hideMenu);
  };

  const logout = () => {
    alert("로그아웃 되었습니다.");

    window.sessionStorage.removeItem("userId");
    window.sessionStorage.removeItem("token");
    window.sessionStorage.removeItem("adminGroup");

    setIsLogin(false);
    history.push("/common/login");
  };

  useEffect(() => {
    setUserId(window.sessionStorage.getItem("userId"));

    const srcList = [
      `${process.env.PUBLIC_URL}/assets/vendor/jquery.min.js`,
      `${process.env.PUBLIC_URL}/assets/vendor/popper.min.js`,
      `${process.env.PUBLIC_URL}/assets/vendor/bootstrap.min.js`,
      `${process.env.PUBLIC_URL}/assets/vendor/perfect-scrollbar.min.js`,
      `${process.env.PUBLIC_URL}/assets/vendor/dom-factory.js`,
      `${process.env.PUBLIC_URL}/assets/vendor/material-design-kit.js`,
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
      className="navbar navbar-expand navbar-shadow px-0 pl-lg-16pt navbar-light bg-body"
      id="default-navbar"
      data-primary
    >
      <button
        className="navbar-toggler d-block d-lg-none rounded-0"
        type="button"
        onClick={onToggleMenuBar}
      >
        <span className="material-icons">menu</span>
      </button>

      <Link to="/dashboard" className="navbar-brand mr-16pt d-lg-none">
        <img
          className="navbar-brand-icon mr-0 mr-lg-8pt"
          src={`${process.env.PUBLIC_URL}/assets/images/logo/accent-teal-100@2x.png`}
          width="32"
          alt="seocho-art"
        />
        <span className="d-none d-lg-block">
          서초 사회공헌 플랫폼
        </span>
      </Link>
      <div className="flex"></div>
      <div className="nav navbar-nav flex-nowrap d-flex ml-0 mr-16pt">
        <div className="nav-item dropdown d-none d-sm-flex">
          <a
            className="nav-link d-flex align-items-center dropdown-toggle"
            data-toggle="dropdown"
          >
            <span className="flex d-flex flex-column mr-8pt">
              <span className="navbar-text-100">
                <b className="material-icons sidebar-menu-icon sidebar-menu-icon--left">
                  person_pin
                </b>
                {userId}
              </span>
            </span>
          </a>

          {userId ? (
            <div className="dropdown-menu dropdown-menu-right">
              <div className="dropdown-header">
                <strong>계정</strong>
              </div>
              <a className="dropdown-item" onClick={() => logout()}>
                로그아웃
              </a>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default GlobalBar;
