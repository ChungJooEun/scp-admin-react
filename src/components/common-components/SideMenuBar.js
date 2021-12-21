import React from "react";
import { Link } from "react-router-dom";

const SideMenuBar = () => {
  return (
    <div className="mdk-drawer js-mdk-drawer" id="default-drawer">
      <div className="mdk-drawer__content">
        <div
          className="sidebar sidebar-dark sidebar-left"
          data-perfect-scrollbar
        >
          <Link to="/dashboard" className="sidebar-brand ">
            <img
              className="sidebar-brand-icon"
              src="../assets/images/logo-w.png"
              alt="seocho-art"
            />
          </Link>

          <div className="sidebar-heading">Seocho Admin</div>
          <ul className="sidebar-menu">
            <li className="sidebar-menu-item">
              <Link className="sidebar-menu-button" to="/dashboard">
                <span className="material-icons sidebar-menu-icon sidebar-menu-icon--left">
                  insert_chart_outlined
                </span>
                <span className="sidebar-menu-text">대시보드</span>
              </Link>
            </li>
            <li className="sidebar-menu-item">
              <a
                className="sidebar-menu-button"
                data-toggle="collapse"
                href="#menu01"
              >
                <span className="material-icons sidebar-menu-icon sidebar-menu-icon--left">
                  photo_size_select_large
                </span>
                메뉴 관리{" "}
                <span className="ml-auto sidebar-menu-toggle-icon"></span>
              </a>
              <ul className="sidebar-submenu collapse sm-indent" id="menu01">
                <li className="sidebar-menu-item">
                  <Link
                    className="sidebar-menu-button"
                    to="/main-menu/category"
                  >
                    <span className="sidebar-menu-text">카테고리 관리</span>
                  </Link>
                </li>
                <li className="sidebar-menu-item">
                  <a
                    className="sidebar-menu-button"
                    href="../main-menu/popup-banner.html"
                  >
                    <span className="sidebar-menu-text">팝업 배너 관리</span>
                  </a>
                </li>
              </ul>
            </li>
            <li className="sidebar-menu-item">
              <a
                className="sidebar-menu-button js-sidebar-collapse"
                data-toggle="collapse"
                href="#menu02"
              >
                <span className="material-icons sidebar-menu-icon sidebar-menu-icon--left">
                  event_note
                </span>
                활동 목록
                <span className="ml-auto sidebar-menu-toggle-icon"></span>
              </a>
              <ul className="sidebar-submenu collapse sm-indent" id="menu02">
                <li className="sidebar-menu-item">
                  <a
                    className="sidebar-menu-button"
                    href="../activities/all.html"
                  >
                    <span className="sidebar-menu-text">전체보기</span>
                  </a>
                </li>
                <li className="sidebar-menu-item">
                  <a
                    className="sidebar-menu-button"
                    href="../activities/requests.html"
                  >
                    <span className="sidebar-menu-text">
                      수요자 모집 활동 목록
                    </span>
                  </a>
                </li>
                <li className="sidebar-menu-item">
                  <a
                    className="sidebar-menu-button"
                    href="../activities/volunteer.html"
                  >
                    <span className="sidebar-menu-text">
                      활동자 모집 활동 목록
                    </span>
                  </a>
                </li>
                <li className="sidebar-menu-item">
                  <a
                    className="sidebar-menu-button"
                    href="../activities/by-categroy.html"
                  >
                    <span className="sidebar-menu-text">
                      카테고리별 목록보기
                    </span>
                  </a>
                </li>
              </ul>
            </li>
            <li className="sidebar-menu-item">
              <a
                className="sidebar-menu-button"
                data-toggle="collapse"
                href="#menu03"
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
                <li className="sidebar-menu-item">
                  <a
                    className="sidebar-menu-button"
                    href="../agency/agency-list.html"
                  >
                    <span className="sidebar-menu-text">기관/단체 목록</span>
                  </a>
                </li>
                <li className="sidebar-menu-item">
                  <a
                    className="sidebar-menu-button"
                    href="../agency/registration-request.html"
                  >
                    <span className="sidebar-menu-text">
                      기관/단체 등록 요청 목록
                    </span>
                  </a>
                </li>
              </ul>
            </li>
            <li className="sidebar-menu-item">
              <a
                className="sidebar-menu-button"
                data-toggle="collapse"
                href="#menu04"
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
                <li className="sidebar-menu-item">
                  <a
                    className="sidebar-menu-button"
                    href="../sc-ok/online-consultation.html"
                  >
                    <span className="sidebar-menu-text">온라인 상담</span>
                  </a>
                </li>
                <li className="sidebar-menu-item">
                  <a
                    className="sidebar-menu-button"
                    href="../sc-ok/phone-consultation.html"
                  >
                    <span className="sidebar-menu-text">전화 상담</span>
                  </a>
                </li>
                <li className="sidebar-menu-item">
                  <a
                    className="sidebar-menu-button"
                    href="../sc-ok/pro-management.html"
                  >
                    <span className="sidebar-menu-text">전문가 관리</span>
                  </a>
                </li>
              </ul>
            </li>
            <li className="sidebar-menu-item">
              <a
                className="sidebar-menu-button"
                data-toggle="collapse"
                href="#menu07"
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
                <li className="sidebar-menu-item">
                  <a
                    className="sidebar-menu-button"
                    href="../community/notice.html"
                  >
                    <span className="sidebar-menu-text">공지사항</span>
                  </a>
                </li>
                <li className="sidebar-menu-item">
                  <a
                    className="sidebar-menu-button"
                    href="../community/qna.html"
                  >
                    <span className="sidebar-menu-text">문의/답변</span>
                  </a>
                </li>
                <li className="sidebar-menu-item">
                  <a
                    className="sidebar-menu-button"
                    href="../community/faq.html"
                  >
                    <span className="sidebar-menu-text">
                      자주 묻는 질문(FAQ)
                    </span>
                  </a>
                </li>
                <li className="sidebar-menu-item">
                  <a
                    className="sidebar-menu-button"
                    href="../community/user-guide.html"
                  >
                    <span className="sidebar-menu-text">사용자 가이드</span>
                  </a>
                </li>
                <li className="sidebar-menu-item">
                  <a
                    className="sidebar-menu-button"
                    href="../community/terms-of-use.html"
                  >
                    <span className="sidebar-menu-text">이용약관</span>
                  </a>
                </li>
                <li className="sidebar-menu-item">
                  <a
                    className="sidebar-menu-button"
                    href="../community/privacy-policy.html"
                  >
                    <span className="sidebar-menu-text">개인정보처리방침</span>
                  </a>
                </li>
              </ul>
            </li>
            <li className="sidebar-menu-item">
              <a
                className="sidebar-menu-button"
                data-toggle="collapse"
                href="#menu05"
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
                <li className="sidebar-menu-item">
                  <a className="sidebar-menu-button" href="../user/all.html">
                    <span className="sidebar-menu-text">전체</span>
                  </a>
                </li>
                <li className="sidebar-menu-item">
                  <a
                    className="sidebar-menu-button"
                    href="../user/reported.html"
                  >
                    <span className="sidebar-menu-text">신고된 사용자</span>
                  </a>
                </li>
                <li className="sidebar-menu-item">
                  <a
                    className="sidebar-menu-button"
                    href="../user/blocked.html"
                  >
                    <span className="sidebar-menu-text">정지된 사용자</span>
                  </a>
                </li>
              </ul>
            </li>
            <li className="sidebar-menu-item">
              <a
                className="sidebar-menu-button"
                data-toggle="collapse"
                href="#menu06"
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
                <li className="sidebar-menu-item">
                  <a
                    className="sidebar-menu-button"
                    href="../admin/super-admin.html"
                  >
                    <span className="sidebar-menu-text">슈퍼 관리자</span>
                  </a>
                </li>
                <li className="sidebar-menu-item">
                  <a
                    className="sidebar-menu-button"
                    href="../admin/general-admin.html"
                  >
                    <span className="sidebar-menu-text">일반 관리자</span>
                  </a>
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
