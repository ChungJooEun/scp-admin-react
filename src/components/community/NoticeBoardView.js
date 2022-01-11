import axios from "axios";
import React, { useEffect, useContext, useState, useCallback } from "react";
import { useHistory } from "react-router-dom";
import MenuContext from "../../context/menu";

import GlobalBar from "../common-components/GlobalBar";
import PageTitle from "../common-components/PageTitle";
import Paging from "../common-components/Paging";
import SideMenuBar from "../common-components/SideMenuBar";
import NoticeBoardList from "./notice-components/NoticeBoardList";

const pagePathList = [
  {
    pageUrl: "/dashboard",
    pageName: "홈",
  },
  {
    pageUrl: "/community/notice",
    pageName: "게시판 관리",
  },
];

const NoticeBoardView = () => {
  const { state, actions } = useContext(MenuContext);
  const history = useHistory();

  const [totalRows, setTotalRwos] = useState(null);
  const [noticeList, setNoticeList] = useState(null);

  const [pageNumber, setPageNumber] = useState(1);
  const getPageNumber = (curNumber) => {
    setPageNumber(curNumber);
  };

  const getNoticeList = useCallback(async () => {
    const url = `http://${process.env.REACT_APP_SERVICE_IP}:${process.env.REACT_APP_SERVICE_PORT}/api/v1/community`;

    try {
      const response = await axios.get(url, {
        params: {
          type: "NOTICE",
          page: pageNumber,
          count: 5,
        },
      });

      if (response.status === 200) {
        const { totalRows, data } = response.data;

        setTotalRwos(totalRows);

        let ary = [];

        for (let i = 0; i < data.length; i++) {
          ary.push({
            id: data[i].id, // 아이디
            idx: data[i].idx, // idx
            title: data[i].title, // 제목
            contactName: data[i].contactName, // 담당자
            viewCount: data[i].viewCount, // 조회수
            createDate: "2022.01.01", // 등록일
          });
        }

        setNoticeList(ary);
      }
    } catch (e) {
      alert("공지사항 목록 조회중, 오류가 발생하였습니다.");
      console.log(e);
    }
  }, [pageNumber]);

  useEffect(() => {
    getNoticeList();

    if (state.menu.topMenu !== 5 || state.menu.subMenu !== 0) {
      actions.setMenu({
        topMenu: 5,
        subMenu: 0,
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
  }, [getNoticeList]);

  return (
    <div
      className="mdk-drawer-layout js-mdk-drawer-layout"
      data-push
      data-responsive-width="992px"
    >
      <div className="mdk-drawer-layout__content page-content">
        <GlobalBar />
        <PageTitle
          pageTitle="공지사항"
          pagePathList={pagePathList}
          onlyTitle={true}
        />

        <div className="container-fluid page__container">
          <div className="page-section">
            <div className="page-separator">
              <div className="page-separator__text">공지({totalRows})</div>
            </div>
            <div
              className="navbar navbar-expand x-0 navbar-light bg-body"
              id="default-navbar"
              data-primary=""
            >
              <form className="d-none d-md-flex">
                <button
                  type="button"
                  className="btn btn-accent"
                  onClick={() => history.push("/community/add-notice")}
                >
                  글쓰기{" "}
                </button>
              </form>
              <div className="flex"></div>
              <button className="btn btn-warning ml-16pt">삭제</button>
            </div>
            <div className="card dashboard-area-tabs mb-32pt">
              {noticeList && (
                <NoticeBoardList
                  type="NOTICE"
                  list={noticeList}
                  pageNumber={1}
                  count={5}
                />
              )}
              {totalRows && (
                <Paging
                  pageNumber={pageNumber}
                  getPageNumber={getPageNumber}
                  totalNum={totalRows}
                  count={10}
                />
              )}
            </div>
          </div>
        </div>
      </div>
      <SideMenuBar />
    </div>
  );
};

export default NoticeBoardView;
