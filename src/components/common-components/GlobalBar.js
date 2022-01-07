import React, { useContext } from "react";
import { Link } from "react-router-dom";
import MenuContext from "../../context/menu";

const GlobalBar = () => {
  const { actions, state } = useContext(MenuContext);

  const onToggleMenuBar = () => {
    actions.setHideMenu(!state.hideMenu);
  };

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
            href="#"
            className="nav-link d-flex align-items-center dropdown-toggle"
            data-toggle="dropdown"
          >
            <span className="flex d-flex flex-column mr-8pt">
              <span className="navbar-text-100">
                <b className="material-icons sidebar-menu-icon sidebar-menu-icon--left">
                  person_pin
                </b>
                {window.sessionStorage.getItem("userId")}
              </span>
            </span>
          </a>
          <div className="dropdown-menu dropdown-menu-right">
            <div className="dropdown-header">
              <strong>계정</strong>
            </div>
            <Link className="dropdown-item" to="/common/login">
              로그아웃
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlobalBar;
