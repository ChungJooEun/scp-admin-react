import React, { useContext, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import MenuContext from "../../context/menu";

const SideMenuBar = () => {
  const { actions, state } = useContext(MenuContext);

  const onSelectMenu = (topM, subM) => {
    actions.setMenu({
      topMenu: topM,
      subMenu: subM,
    });
  };

  const openSubMenu = (e) => {
    actions.setSubMenu({
      ...state.subMenu,
      [e.target.name]: true,
    });
  };

  const closeSubMenu = (e) => {
    actions.setSubMenu({
      ...state.subMenu,
      [e.target.name]: false,
    });
  };

  const handleResize = useCallback(() => {
    if (window.innerWidth < 993) {
      if (state.hideMenu === true) {
        actions.setHideMenu(false);
      }
    } else {
      if (state.hideMenu === false) {
        actions.setHideMenu(true);
      }
    }
  }, [state.hideMenu, actions]);

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    if (window.innerWidth > 992) {
      if (state.hideMenu === false) {
        actions.setHideMenu(true);
      }
    }

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [actions, handleResize, state.hideMenu]);

  return (
    <div
      className={
        state.hideMenu
          ? "mdk-drawer js-mdk-drawer side-menu-bar-active"
          : "mdk-drawer js-mdk-drawer side-menu-bar"
      }
      id="default-drawer"
    >
      <div className="side-menu-bar-div">
        <div
          className="sidebar sidebar-dark sidebar-left"
          data-perfect-scrollbar
        >
          <Link
            to="/dashboard"
            className="sidebar-brand"
            onClick={() => onSelectMenu(0, 0)}
          >
            <img
              className="sidebar-brand-icon"
              src="../assets/images/logo-w.png"
              alt="seocho-art"
            />
          </Link>

          <div className="sidebar-heading">Seocho Admin</div>
          <ul className="sidebar-menu">
            <li
              className={
                state.menu.topMenu === 0
                  ? "sidebar-menu-item active"
                  : "sidebar-menu-item"
              }
              onClick={() => onSelectMenu(0, 0)}
            >
              <Link className="sidebar-menu-button" to="/dashboard">
                <span className="material-icons sidebar-menu-icon sidebar-menu-icon--left">
                  insert_chart_outlined
                </span>
                <span className="sidebar-menu-text">대시보드</span>
              </Link>
            </li>
            <li
              className={
                state.subMenu.topMenu1
                  ? state.menu.topMenu === 1
                    ? "sidebar-menu-item active open"
                    : "sidebar-menu-item open"
                  : state.menu.topMenu === 1
                  ? "sidebar-menu-item active"
                  : "sidebar-menu-item"
              }
            >
              <a
                className="sidebar-menu-button collapsed"
                name="topMenu1"
                onClick={(e) =>
                  state.subMenu.topMenu1 ? closeSubMenu(e) : openSubMenu(e)
                }
              >
                <span className="material-icons sidebar-menu-icon sidebar-menu-icon--left">
                  photo_size_select_large
                </span>
                메뉴 관리{" "}
                <span className="ml-auto sidebar-menu-toggle-icon"></span>
              </a>
              <ul className="sidebar-submenu collapse sm-indent" id="menu01">
                <li
                  className={
                    state.menu.topMenu === 1 && state.menu.subMenu === 0
                      ? "sidebar-menu-item active"
                      : "sidebar-menu-item"
                  }
                  onClick={() => onSelectMenu(1, 0)}
                >
                  <Link
                    className="sidebar-menu-button"
                    to="/main-menu/category"
                  >
                    <span className="sidebar-menu-text">카테고리 관리</span>
                  </Link>
                </li>
                <li
                  className={
                    state.menu.topMenu === 1 && state.menu.subMenu === 1
                      ? "sidebar-menu-item active"
                      : "sidebar-menu-item"
                  }
                  onClick={() => onSelectMenu(1, 1)}
                >
                  <Link
                    className="sidebar-menu-button"
                    to="/main-menu/popup-banner"
                  >
                    <span className="sidebar-menu-text">팝업 배너 관리</span>
                  </Link>
                </li>
              </ul>
            </li>
            <li
              className={
                state.subMenu.topMenu2
                  ? state.menu.topMenu === 2
                    ? "sidebar-menu-item active open"
                    : "sidebar-menu-item open"
                  : state.menu.topMenu === 2
                  ? "sidebar-menu-item active"
                  : "sidebar-menu-item"
              }
            >
              <a
                className="sidebar-menu-button collapsed"
                name="topMenu2"
                onClick={(e) =>
                  state.subMenu.topMenu2 ? closeSubMenu(e) : openSubMenu(e)
                }
              >
                <span className="material-icons sidebar-menu-icon sidebar-menu-icon--left">
                  event_note
                </span>
                활동 목록
                <span className="ml-auto sidebar-menu-toggle-icon"></span>
              </a>
              <ul className="sidebar-submenu collapse sm-indent" id="menu02">
                <li
                  className={
                    state.menu.topMenu === 2 && state.menu.subMenu === 0
                      ? "sidebar-menu-item active"
                      : "sidebar-menu-item"
                  }
                  onClick={() => onSelectMenu(2, 0)}
                >
                  <Link className="sidebar-menu-button" to="/activities/all">
                    <span className="sidebar-menu-text">전체보기</span>
                  </Link>
                </li>
                <li
                  className={
                    state.menu.topMenu === 2 && state.menu.subMenu === 1
                      ? "sidebar-menu-item active"
                      : "sidebar-menu-item"
                  }
                  onClick={() => onSelectMenu(2, 1)}
                >
                  <Link
                    className="sidebar-menu-button"
                    to="/activities/requests"
                  >
                    <span className="sidebar-menu-text">
                      수요자 모집 활동 목록
                    </span>
                  </Link>
                </li>
                <li
                  className={
                    state.menu.topMenu === 2 && state.menu.subMenu === 2
                      ? "sidebar-menu-item active"
                      : "sidebar-menu-item"
                  }
                  onClick={() => onSelectMenu(2, 2)}
                >
                  <Link
                    className="sidebar-menu-button"
                    to="/activities/volunteer"
                  >
                    <span className="sidebar-menu-text">
                      활동자 모집 활동 목록
                    </span>
                  </Link>
                </li>
                <li
                  className={
                    state.menu.topMenu === 2 && state.menu.subMenu === 3
                      ? "sidebar-menu-item active"
                      : "sidebar-menu-item"
                  }
                  onClick={() => onSelectMenu(2, 3)}
                >
                  <Link
                    className="sidebar-menu-button"
                    to="/activities/by-categroy"
                  >
                    <span className="sidebar-menu-text">
                      카테고리별 목록보기
                    </span>
                  </Link>
                </li>
              </ul>
            </li>
            <li
              className={
                state.subMenu.topMenu3
                  ? state.menu.topMenu === 3
                    ? "sidebar-menu-item active open"
                    : "sidebar-menu-item open"
                  : state.menu.topMenu === 3
                  ? "sidebar-menu-item active"
                  : "sidebar-menu-item"
              }
            >
              <a
                className="sidebar-menu-button collapsed"
                name="topMenu3"
                onClick={(e) =>
                  state.subMenu.topMenu3 ? closeSubMenu(e) : openSubMenu(e)
                }
              >
                <span className="material-icons sidebar-menu-icon sidebar-menu-icon--left">
                  place
                </span>
                기관/단체
                <span className="ml-auto sidebar-menu-toggle-icon"></span>
              </a>
              <ul
                className="sidebar-submenu collapse show sm-indent"
                id="menu03"
              >
                <li
                  className={
                    state.menu.topMenu === 3 && state.menu.subMenu === 0
                      ? "sidebar-menu-item active"
                      : "sidebar-menu-item"
                  }
                  onClick={() => onSelectMenu(3, 0)}
                >
                  <Link
                    className="sidebar-menu-button"
                    to="/agency/agency-list"
                  >
                    <span className="sidebar-menu-text">기관/단체 목록</span>
                  </Link>
                </li>
                <li
                  className={
                    state.menu.topMenu === 3 && state.menu.subMenu === 1
                      ? "sidebar-menu-item active"
                      : "sidebar-menu-item"
                  }
                  onClick={() => onSelectMenu(3, 1)}
                >
                  <Link
                    className="sidebar-menu-button"
                    to="/agency/registration-request"
                  >
                    <span className="sidebar-menu-text">
                      기관/단체 등록 요청 목록
                    </span>
                  </Link>
                </li>
              </ul>
            </li>
            <li
              className={
                state.subMenu.topMenu4
                  ? state.menu.topMenu === 4
                    ? "sidebar-menu-item active open"
                    : "sidebar-menu-item open"
                  : state.menu.topMenu === 4
                  ? "sidebar-menu-item active"
                  : "sidebar-menu-item"
              }
            >
              <a
                className="sidebar-menu-button collapsed"
                name="topMenu4"
                onClick={(e) =>
                  state.subMenu.topMenu4 ? closeSubMenu(e) : openSubMenu(e)
                }
              >
                <span className="material-icons sidebar-menu-icon sidebar-menu-icon--left">
                  comment
                </span>
                서초OK생활자문단
                <span className="ml-auto sidebar-menu-toggle-icon"></span>
              </a>
              <ul
                className="sidebar-submenu collapse show sm-indent"
                id="menu04"
              >
                <li
                  className={
                    state.menu.topMenu === 4 && state.menu.subMenu === 0
                      ? "sidebar-menu-item active"
                      : "sidebar-menu-item"
                  }
                  onClick={() => onSelectMenu(4, 0)}
                >
                  <Link
                    className="sidebar-menu-button"
                    to="/sc-ok/online-consultation"
                  >
                    <span className="sidebar-menu-text">온라인 상담</span>
                  </Link>
                </li>
                <li
                  className={
                    state.menu.topMenu === 4 && state.menu.subMenu === 1
                      ? "sidebar-menu-item active"
                      : "sidebar-menu-item"
                  }
                  onClick={() => onSelectMenu(4, 1)}
                >
                  <Link
                    className="sidebar-menu-button"
                    to="/sc-ok/phone-consultation"
                  >
                    <span className="sidebar-menu-text">전화 상담</span>
                  </Link>
                </li>
                <li
                  className={
                    state.menu.topMenu === 4 && state.menu.subMenu === 2
                      ? "sidebar-menu-item active"
                      : "sidebar-menu-item"
                  }
                  onClick={() => onSelectMenu(4, 2)}
                >
                  <Link
                    className="sidebar-menu-button"
                    to="/sc-ok/pro-management"
                  >
                    <span className="sidebar-menu-text">전문가 관리</span>
                  </Link>
                </li>
              </ul>
            </li>
            <li
              className={
                state.subMenu.topMenu5
                  ? state.menu.topMenu === 5
                    ? "sidebar-menu-item active open"
                    : "sidebar-menu-item open"
                  : state.menu.topMenu === 5
                  ? "sidebar-menu-item active"
                  : "sidebar-menu-item"
              }
            >
              <a
                className="sidebar-menu-button collapsed"
                name="topMenu5"
                onClick={(e) =>
                  state.subMenu.topMenu5 ? closeSubMenu(e) : openSubMenu(e)
                }
              >
                <span className="material-icons sidebar-menu-icon sidebar-menu-icon--left">
                  comment
                </span>
                게시판 관리
                <span className="ml-auto sidebar-menu-toggle-icon"></span>
              </a>
              <ul
                className="sidebar-submenu collapse show sm-indent"
                id="menu07"
              >
                <li
                  className={
                    state.menu.topMenu === 5 && state.menu.subMenu === 0
                      ? "sidebar-menu-item active"
                      : "sidebar-menu-item"
                  }
                  onClick={() => onSelectMenu(5, 0)}
                >
                  <Link className="sidebar-menu-button" to="/community/notice">
                    <span className="sidebar-menu-text">공지사항</span>
                  </Link>
                </li>
                <li
                  className={
                    state.menu.topMenu === 5 && state.menu.subMenu === 1
                      ? "sidebar-menu-item active"
                      : "sidebar-menu-item"
                  }
                  onClick={() => onSelectMenu(5, 1)}
                >
                  <Link className="sidebar-menu-button" to="/community/qna">
                    <span className="sidebar-menu-text">문의/답변</span>
                  </Link>
                </li>
                <li
                  className={
                    state.menu.topMenu === 5 && state.menu.subMenu === 2
                      ? "sidebar-menu-item active"
                      : "sidebar-menu-item"
                  }
                  onClick={() => onSelectMenu(5, 2)}
                >
                  <Link className="sidebar-menu-button" to="/community/faq">
                    <span className="sidebar-menu-text">
                      자주 묻는 질문(FAQ)
                    </span>
                  </Link>
                </li>
                <li
                  className={
                    state.menu.topMenu === 5 && state.menu.subMenu === 3
                      ? "sidebar-menu-item active"
                      : "sidebar-menu-item"
                  }
                  onClick={() => onSelectMenu(5, 3)}
                >
                  <Link
                    className="sidebar-menu-button"
                    to="/community/user-guide"
                  >
                    <span className="sidebar-menu-text">사용자 가이드</span>
                  </Link>
                </li>
                <li
                  className={
                    state.menu.topMenu === 5 && state.menu.subMenu === 4
                      ? "sidebar-menu-item active"
                      : "sidebar-menu-item"
                  }
                  onClick={() => onSelectMenu(5, 4)}
                >
                  <Link
                    className="sidebar-menu-button"
                    to="/community/terms-of-use"
                  >
                    <span className="sidebar-menu-text">이용약관</span>
                  </Link>
                </li>
                <li
                  className={
                    state.menu.topMenu === 5 && state.menu.subMenu === 5
                      ? "sidebar-menu-item active"
                      : "sidebar-menu-item"
                  }
                  onClick={() => onSelectMenu(5, 5)}
                >
                  <Link
                    className="sidebar-menu-button"
                    to="/community/privacy-policy"
                  >
                    <span className="sidebar-menu-text">개인정보처리방침</span>
                  </Link>
                </li>
              </ul>
            </li>
            <li
              className={
                state.subMenu.topMenu6
                  ? state.menu.topMenu === 6
                    ? "sidebar-menu-item active open"
                    : "sidebar-menu-item open"
                  : state.menu.topMenu === 6
                  ? "sidebar-menu-item active"
                  : "sidebar-menu-item"
              }
            >
              <a
                className="sidebar-menu-button collapsed"
                name="topMenu6"
                onClick={(e) =>
                  state.subMenu.topMenu6 ? closeSubMenu(e) : openSubMenu(e)
                }
              >
                <span className="material-icons sidebar-menu-icon sidebar-menu-icon--left">
                  people
                </span>
                사용자<span className="ml-auto sidebar-menu-toggle-icon"></span>
              </a>
              <ul
                className="sidebar-submenu collapse show sm-indent"
                id="menu05"
              >
                <li
                  className={
                    state.menu.topMenu === 6 && state.menu.subMenu === 0
                      ? "sidebar-menu-item active"
                      : "sidebar-menu-item"
                  }
                  onClick={() => onSelectMenu(6, 0)}
                >
                  <Link className="sidebar-menu-button" to="/user/all">
                    <span className="sidebar-menu-text">전체</span>
                  </Link>
                </li>
                <li
                  className={
                    state.menu.topMenu === 6 && state.menu.subMenu === 1
                      ? "sidebar-menu-item active"
                      : "sidebar-menu-item"
                  }
                  onClick={() => onSelectMenu(6, 1)}
                >
                  <Link className="sidebar-menu-button" to="/user/reported">
                    <span className="sidebar-menu-text">신고된 사용자</span>
                  </Link>
                </li>
                <li
                  className={
                    state.menu.topMenu === 6 && state.menu.subMenu === 2
                      ? "sidebar-menu-item active"
                      : "sidebar-menu-item"
                  }
                  onClick={() => onSelectMenu(6, 2)}
                >
                  <Link className="sidebar-menu-button" to="/user/blocked">
                    <span className="sidebar-menu-text">정지된 사용자</span>
                  </Link>
                </li>
              </ul>
            </li>
            <li
              className={
                state.subMenu.topMenu7
                  ? state.menu.topMenu === 7
                    ? "sidebar-menu-item active open"
                    : "sidebar-menu-item open"
                  : state.menu.topMenu === 7
                  ? "sidebar-menu-item active"
                  : "sidebar-menu-item"
              }
            >
              <a
                className="sidebar-menu-button collapsed"
                name="topMenu7"
                onClick={(e) =>
                  state.subMenu.topMenu7 ? closeSubMenu(e) : openSubMenu(e)
                }
              >
                <span className="material-icons sidebar-menu-icon sidebar-menu-icon--left">
                  people
                </span>
                관리자<span className="ml-auto sidebar-menu-toggle-icon"></span>
              </a>
              <ul
                className="sidebar-submenu collapse show sm-indent"
                id="menu06"
              >
                <li
                  className={
                    state.menu.topMenu === 7 && state.menu.subMenu === 0
                      ? "sidebar-menu-item active"
                      : "sidebar-menu-item"
                  }
                  onClick={() => onSelectMenu(7, 0)}
                >
                  <Link className="sidebar-menu-button" to="/admin/super-admin">
                    <span className="sidebar-menu-text">슈퍼 관리자</span>
                  </Link>
                </li>
                <li
                  className={
                    state.menu.topMenu === 7 && state.menu.subMenu === 1
                      ? "sidebar-menu-item active"
                      : "sidebar-menu-item"
                  }
                  onClick={() => onSelectMenu(7, 1)}
                >
                  <Link
                    className="sidebar-menu-button"
                    to="/admin/general-admin"
                  >
                    <span className="sidebar-menu-text">일반 관리자</span>
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SideMenuBar;
