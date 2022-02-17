import React, { useContext, useEffect, useState, useCallback } from "react";
import axios from "axios";
import MenuContext from "../../context/menu";

import GlobalBar from "../common-components/GlobalBar";
import PageTitle from "../common-components/PageTitle";
import Paging from "../common-components/Paging";
import SearchPeriodBar from "../common-components/search-components/SearchPeriodBar";
import SideMenuBar from "../common-components/SideMenuBar";
import AllUserList from "./user-components/AllUserList";
import LoginContext from "../../context/login";
import checkLoginValidation from "../../util/login-validation";

const pagePathList = [
  {
    pageUrl: "/dashboard",
    pageName: "홈",
  },
];

const AllUserListView = () => {
  const { state, actions } = useContext(MenuContext);
  const { isLogin } = useContext(LoginContext).state;

  const [totalRows, setTotalRows] = useState(null);
  const [userList, setUserList] = useState(null);

  const [pageNumber, setPageNumber] = useState(1);
  const getPageNumber = (curNumber) => {
    setPageNumber(curNumber);
  };

  const getUserList = useCallback(async () => {
    const url = `${process.env.REACT_APP_SERVICE_API}/api/v1/user`;

    try {
      const response = await axios.get(url, {
        params: {
          page: pageNumber,
          count: 10,
        },
      });

      if (response.status === 200) {
        const { totalRows, data } = response.data;

        setTotalRows(totalRows);

        let ary = [];

        for (let i = 0; i < data.length; i++) {
          ary.push({
            idx: data[i].idx,
            nickName: data[i].nickname, // 닉네임
            email: data[i].email, // 이메일
            createDate: data[i].createdAt, // 활동일 -> 계정 생성일
            recentActivityDate: "2022.01.01",
            state: data[i].orgStatus, // 소속 -> 기관 (O) / 일반 (U) / 대기중 (W) / 기각 (N)
          });
        }

        setUserList(ary);
      }
    } catch (e) {
      alert("사용자 목록 조회시에 오류가 발생하였습니다.");
      console.log(e);
    }
  }, [pageNumber]);

  useEffect(() => {
    checkLoginValidation(isLogin);

    if (isLogin) {
      getUserList();

      if (state.menu.topMenu !== 6 || state.menu.subMenu !== 0) {
        actions.setMenu({
          topMenu: 6,
          subMenu: 0,
        });
      }

      if (!state.subMenu.topMenu6) {
        actions.setSubMenu({
          ...state.subMenu,
          topMenu6: true,
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
  }, [getUserList, isLogin]);

  if (isLogin) {
    return (
      <div
        className="mdk-drawer-layout js-mdk-drawer-layout"
        data-push
        data-responsive-width="992px"
      >
        <div className="mdk-drawer-layout__content page-content">
          <GlobalBar />
          <PageTitle pageTitle="사용자" pagePathList={pagePathList} />

          <div className="container-fluid page__container">
            <div className="page-section">
              <div className="page-separator">
                <div className="page-separator__text">
                  목록(<span className="number-count">{totalRows}</span>)
                </div>
              </div>

              <div className="card mb-lg-32pt">
                <div className="card-header">
                  <SearchPeriodBar />
                </div>
                {userList && (
                  <AllUserList
                    list={userList}
                    pageNumber={pageNumber}
                    count={10}
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
  } else return null;
};

export default AllUserListView;
