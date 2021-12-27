import React, { useContext, useEffect } from "react";
// import { useHistory } from "react-router-dom";
import MenuContext from "../../context/menu";

import GlobalBar from "../common-components/GlobalBar";
import PageTitle from "../common-components/PageTitle";
import Paging from "../common-components/Paging";
import SideMenuBar from "../common-components/SideMenuBar";
import QnABoardList from "./qna-components/QnABoardList";

const pagePathList = [
  {
    pageUrl: "/dashboard",
    pageName: "홈",
  },
  {
    pageUrl: "/community/qna",
    pageName: "게시판 관리",
  },
];

const QnABoardView = () => {
  const { state, actions } = useContext(MenuContext);
  // const  history = useHistory();

  useEffect(() => {
    if (state.menu.topMenu !== 5 || state.menu.subMenu !== 1) {
      actions.setMenu({
        topMenu: 5,
        subMenu: 1,
      });
    }

    if (!state.subMenu.topMenu5) {
      actions.setSubMenu({
        ...state.subMenu,
        topMenu5: true,
      });
    }
  }, []);

  return (
    <>
      {/* <div class="preloader">
        <div class="sk-chase">
            <div class="sk-chase-dot">
            </div>
            <div class="sk-chase-dot">
            </div>
            <div class="sk-chase-dot">
            </div>
            <div class="sk-chase-dot">
            </div>
            <div class="sk-chase-dot">
            </div>
            <div class="sk-chase-dot">
            </div>
        </div>
    </div> */}
      <div
        class="mdk-drawer-layout js-mdk-drawer-layout"
        data-push
        data-responsive-width="992px"
      >
        <div class="mdk-drawer-layout__content page-content">
          <GlobalBar />

          <PageTitle
            pageTitle="문의/답변"
            pagePathList={pagePathList}
            onlyTitle={true}
          />

          <div class="container-fluid page__container">
            <div class="page-section">
              <div class="page-separator">
                <div class="page-separator__text">문의/답변(20)</div>
              </div>
              <div
                class="navbar navbar-expand x-0 navbar-light bg-body"
                id="default-navbar"
                data-primary=""
              >
                <form class="d-none d-md-flex">
                  {/* <button
                    type="button"
                    class="btn btn-accent"
                    onclick="location.href='notice-detail.html';"
                  >
                    글쓰기{" "}
                  </button> */}
                </form>
                <div class="flex"></div>
                <button
                  class="btn btn-warning ml-16pt"
                  data-toggle="swal"
                  data-swal-title="정말 삭제 하시겠습니까??"
                  data-swal-text="이 동작은 다시 되돌릴 수 없습니다."
                  data-swal-type="warning"
                  data-swal-show-cancel-button="true"
                  data-swal-confirm-button-text="확인"
                  data-swal-confirm-cb="#swal-confirm-delete"
                  data-swal-close-on-confirm="false"
                >
                  삭제
                </button>
                <div
                  id="swal-confirm-delete"
                  class="d-none"
                  data-swal-type="success"
                  data-swal-title="삭제완료"
                  data-swal-text="삭제 완료되었습니다."
                ></div>
              </div>

              <div class="card dashboard-area-tabs mb-32pt">
                <QnABoardList />
                <Paging />
              </div>
            </div>
          </div>
        </div>
        <SideMenuBar />
      </div>
    </>
  );
};

export default QnABoardView;
