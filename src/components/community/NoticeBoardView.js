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

const NoticeBoardView = () => {
  const { state, actions } = useContext(MenuContext);
  const history = useHistory();

  const [totalRows, setTotalRwos] = useState(null);
  const [noticeList, setNoticeList] = useState(null);

  const [pageNumber, setPageNumber] = useState(1);
  const getPageNumber = (curNumber) => {
    setPageNumber(curNumber);
  };

  const [checkedList, setCheckedList] = useState([]);
  const [allChecked, setAllChecked] = useState(false);

  const addCheckedList = (checkedIdx) => {
    setCheckedList(checkedList.concat(checkedIdx));
  };

  const removeNoneCheckedList = (removeIdx) => {
    let ary = checkedList;
    ary = ary.filter((idx) => idx !== removeIdx);

    setCheckedList(ary);
  };

  const toggleAllChecked = (state) => {
    if (state === true) {
      // 전부 체크 리스트 추가
      let ary = [];
      for (let i = 0; i < noticeList.length; i++) {
        ary.push(noticeList[i].idx);
      }

      setCheckedList(ary);
      setAllChecked(true);
    } else {
      // 체크리스트에서 전부 삭제
      setCheckedList([]);
      setAllChecked(false);
    }
  };

  const getNoticeList = useCallback(async () => {
    const url = `${process.env.REACT_APP_SERVICE_API}/api/v1/community`;

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
            createDate: data[i].createdDateStr, // 등록일
          });
        }

        setNoticeList(ary);
      }
    } catch (e) {
      alert("공지사항 목록 조회중, 오류가 발생하였습니다.");
      console.log(e);
    }
  }, [pageNumber]);

  const deleteNotice = async (idxs) => {
    const url = `${process.env.REACT_APP_SERVICE_API}/api/v1/community`;

    try {
      const response = await axios.delete(url, {
        params: {
          idxs: idxs,
        },
      });

      if (response.status === 200) {
        alert("삭제되었습니다.");
        getNoticeList();
      }
    } catch (e) {
      alert("삭제 중, 오류가 발생하였습니다.");
      console.log(e);
    }
  };

  const onHandleDeleteNotice = () => {
    if (checkedList.length === 0) return;

    let str = "";

    for (let i = 0; i < checkedList.length; i++) {
      if (i === checkedList.length - 1) {
        str += checkedList[i];
      } else {
        str += checkedList[i] + ",";
      }
    }

    deleteNotice(str);
    setCheckedList([]);
  };

  const onClickDeleteBtn = useConfirm(
    "선택하신 공지사항을 삭제하시겠습니까?",
    onHandleDeleteNotice
  );

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
              <button
                className="btn btn-warning ml-16pt"
                onClick={() => onClickDeleteBtn()}
              >
                삭제
              </button>
            </div>
            <div className="card dashboard-area-tabs mb-32pt">
              {noticeList && (
                <NoticeBoardList
                  type="NOTICE"
                  list={noticeList}
                  pageNumber={1}
                  count={5}
                  addCheckedList={addCheckedList}
                  removeNoneCheckedList={removeNoneCheckedList}
                  toggleAllChecked={toggleAllChecked}
                  allChecked={allChecked}
                />
              )}

              <Paging
                pageNumber={pageNumber}
                getPageNumber={getPageNumber}
                totalNum={totalRows}
                count={10}
              />
            </div>
          </div>
        </div>
      </div>
      <SideMenuBar />
    </div>
  );
};

export default NoticeBoardView;
