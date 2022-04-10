import React, { useContext, useEffect, useState, useCallback } from "react";
import { useHistory } from "react-router-dom";
import MenuContext from "../../context/menu";
import axios from "axios";

import GlobalBar from "../common-components/GlobalBar";
import PageTitle from "../common-components/PageTitle";
import Paging from "../common-components/Paging";
import SideMenuBar from "../common-components/SideMenuBar";
import NoticeBoardList from "./notice-components/NoticeBoardList";
import LoginContext from "../../context/login";
import checkLoginValidation from "../../util/login-validation";

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

const pagePathList = [
  {
    pageUrl: "/dashboard",
    pageName: "홈",
  },
  {
    pageUrl: "/community/user-guide",
    pageName: "게시판 관리",
  },
];

const UserGuideBoardView = () => {
  const { state, actions } = useContext(MenuContext);
  const { isLogin } = useContext(LoginContext).state;
  const history = useHistory();

  const [pageNumber, setPageNumber] = useState(1);
  const getPageNumber = (curNumber) => {
    setPageNumber(curNumber);
  };

  const [totalRows, setTotalRows] = useState(null);
  const [userGuideList, setUserGuideList] = useState([]);

  const getUserGuideList = useCallback(async () => {
    const url = `${process.env.REACT_APP_SERVICE_API}/api/v1/community`;

    try {
      const response = await axios.get(url, {
        params: {
          type: "GUIDE",
          page: pageNumber,
          rows: 5,
          state: "ALL",
        },
      });

      if (response.status === 200) {
        const { totalRows, data } = response.data;

        setTotalRows(totalRows);

        let ary = [];

        for (let i = 0; i < data.length; i++) {
          ary.push({
            id: data[i].id, // 아이디
            idx: data[i].idx, // idx
            title: data[i].title, // 제목
            contactName: data[i].createdUid, // 담당자
            viewCount: data[i].viewCount, // 조회수
            createDate: data[i].createdDateStr, // 등록일
          });
        }

        setUserGuideList(ary);
      }
    } catch (e) {
      alert("사용자 가이드 목록 조회중, 오류가 발생하였습니다.");
      console.log(e);
    }
  }, [pageNumber]);

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
      for (let i = 0; i < userGuideList.length; i++) {
        ary.push(userGuideList[i].idx);
      }

      setCheckedList(ary);
      setAllChecked(true);
    } else {
      // 체크리스트에서 전부 삭제
      setCheckedList([]);
      setAllChecked(false);
    }
  };

  const deleteUserGuide = async (idxs) => {
    const url = `${process.env.REACT_APP_SERVICE_API}/api/v1/community`;

    try {
      const response = await axios.delete(url, {
        params: {
          idxs: idxs,
        },
      });

      if (response.status === 200) {
        alert("삭제되었습니다.");
        getUserGuideList();
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

    deleteUserGuide(str);
    setCheckedList([]);
  };

  const onClickDeleteBtn = useConfirm(
    "선택하신 사용자 가이드를 삭제하시겠습니까?",
    onHandleDeleteNotice
  );

  useEffect(() => {
    checkLoginValidation(isLogin);
    if (isLogin) {
      getUserGuideList();

      if (state.menu.topMenu !== 5 || state.menu.subMenu !== 3) {
        actions.setMenu({
          topMenu: 5,
          subMenu: 3,
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
    }
  }, [getUserGuideList, isLogin]);

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
            pageTitle="사용자 가이드"
            pagePathList={pagePathList}
            onlyTitle={true}
          />

          <div className="container-fluid page__container">
            <div className="page-section">
              <div className="page-separator">
                <div className="page-separator__text">
                  사용자 가이드 ({totalRows})
                </div>
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
                    onClick={() => history.push("/community/add-user-guide")}
                  >
                    글쓰기
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
                {userGuideList && (
                  <NoticeBoardList
                    type="GUIDE"
                    list={userGuideList}
                    pageNumber={pageNumber}
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
                  count={5}
                />
              </div>
            </div>
          </div>
        </div>
        <SideMenuBar />
      </div>
    );
  else return null;
};

export default UserGuideBoardView;
