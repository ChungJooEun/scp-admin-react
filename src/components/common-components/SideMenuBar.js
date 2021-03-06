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
      if (!state.hideMenu) {
        actions.setHideMenu(true);
      }
    } else {
      if (state.hideMenu) {
        actions.setHideMenu(false);
      }
    }
  }, [state.hideMenu, actions]);

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    if (window.innerWidth > 992) {
      if (state.hideMenu) {
        actions.setHideMenu(false);
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
          ? "mdk-drawer js-mdk-drawer side-menu-bar"
          : "mdk-drawer js-mdk-drawer side-menu-bar-active"
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
              src={`${process.env.PUBLIC_URL}/assets/images/logo-w.png`}
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
                <span className="sidebar-menu-text">????????????</span>
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
                ?????? ??????{" "}
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
                    <span className="sidebar-menu-text">???????????? ??????</span>
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
                    <span className="sidebar-menu-text">?????? ?????? ??????</span>
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
                ?????? ??????
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
                    <span className="sidebar-menu-text">????????????</span>
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
                      ????????? ?????? ?????? ??????
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
                      ????????? ?????? ?????? ??????
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
                      ??????????????? ????????????
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
                ??????/??????
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
                    <span className="sidebar-menu-text">??????/?????? ??????</span>
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
                      ??????/?????? ?????? ?????? ??????
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
                ??????OK???????????????
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
                    <span className="sidebar-menu-text">????????? ??????</span>
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
                    <span className="sidebar-menu-text">?????? ??????</span>
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
                    <span className="sidebar-menu-text">????????? ??????</span>
                  </Link>
                </li>
                <li
                  className={
                    state.menu.topMenu === 4 && state.menu.subMenu === 3
                      ? "sidebar-menu-item active"
                      : "sidebar-menu-item"
                  }
                  onClick={() => onSelectMenu(4, 3)}
                >
                  <Link
                    className="sidebar-menu-button"
                    to="/sc-ok/onsite-consultation"
                  >
                    <span className="sidebar-menu-text">?????? ??????</span>
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
                ????????? ??????
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
                    <span className="sidebar-menu-text">????????????</span>
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
                    <span className="sidebar-menu-text">??????/??????</span>
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
                      ?????? ?????? ??????(FAQ)
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
                    <span className="sidebar-menu-text">????????? ?????????</span>
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
                    <span className="sidebar-menu-text">????????????</span>
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
                    <span className="sidebar-menu-text">
                      ???????????? ?????? ??????
                    </span>
                  </Link>
                </li>

                <li
                  className={
                    state.menu.topMenu === 5 && state.menu.subMenu === 6
                      ? "sidebar-menu-item active"
                      : "sidebar-menu-item"
                  }
                  onClick={() => onSelectMenu(5, 6)}
                >
                  <Link
                    className="sidebar-menu-button"
                    to="/community/collect-use-personal-info"
                  >
                    <span className="sidebar-menu-text">
                      ???????????? ?????? ??? ?????? ??????
                    </span>
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
                ?????????<span className="ml-auto sidebar-menu-toggle-icon"></span>
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
                    <span className="sidebar-menu-text">??????</span>
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
                    <span className="sidebar-menu-text">????????? ?????????</span>
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
                    <span className="sidebar-menu-text">????????? ?????????</span>
                  </Link>
                </li>
              </ul>
            </li>
            {window.sessionStorage.getItem("adminGroup") === "1" && (
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
                  ?????????
                  <span className="ml-auto sidebar-menu-toggle-icon"></span>
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
                    <Link
                      className="sidebar-menu-button"
                      to="/admin/super-admin"
                    >
                      <span className="sidebar-menu-text">?????? ?????????</span>
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
                      <span className="sidebar-menu-text">?????? ?????????</span>
                    </Link>
                  </li>
                </ul>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SideMenuBar;
