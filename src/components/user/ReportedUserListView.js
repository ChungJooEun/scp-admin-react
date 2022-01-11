import React, { useContext, useEffect, useState, useCallback } from "react";
import axios from "axios";

import MenuContext from "../../context/menu";

import GlobalBar from "../common-components/GlobalBar";
import PageTitle from "../common-components/PageTitle";
import Paging from "../common-components/Paging";
import SearchPeriodBar from "../common-components/search-components/SearchPeriodBar";
import SideMenuBar from "../common-components/SideMenuBar";
import ReportedUserList from "./user-components/ReportedUserList";

const pagePathList = [
  {
    pageUrl: "/dashboard",
    pageName: "홈",
  },
];

const ReportedUserListView = () => {
  const { state, actions } = useContext(MenuContext);

  const [totalRows, setTotalRows] = useState(null);
  const [userList, setUserList] = useState(null);

  const [pageNumber, setPageNumber] = useState(1);
  const getPageNumber = (curNumber) => {
    setPageNumber(curNumber);
  };

  const getUserList = useCallback(async () => {
    const url = `${process.env.REACT_APP_SERVICE_API}/api/v1/user/reported`;

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
            recentActivityDate: "2022.01.01", // 최근 활동일
            state: data[i].orgStatus, // 소속 -> 기관 (O) / 일반 (U) / 대기중 (W) / 기각 (N)
            reportedReason: "신고 사유입니다.",
            userState: data[i].isDeleted,
          });
        }

        setUserList(ary);
      }
    } catch (e) {
      alert("사용자 목록 조회시에 오류가 발생하였습니다.");
      console.log(e);
    }
  }, [pageNumber]);

  const onChangeUserState = (userState, userIdx) => {
    switch (userState) {
      case "N":
        chageUserState("normal", userIdx);
        break;
      case "R":
        chageUserState("reported", userIdx);
        break;
      case "S":
        chageUserState("blocked", userIdx);
        break;
      default:
        break;
    }
  };

  const chageUserState = async (userState, userIdx) => {
    const url = `${process.env.REACT_APP_SERVICE_API}/api/v1/user/${userIdx}/${userState}`;

    try {
      const response = await axios.put(url);

      if (response.status === 201) {
        alert("변경되었습니다.");

        getUserList();
      }
    } catch (e) {
      alert("사용자의 상태 변경 중, 오류가 발생하였습니다.");
      console.loge(e);
    }
  };

  useEffect(() => {
    getUserList();

    if (state.menu.topMenu !== 6 || state.menu.subMenu !== 1) {
      actions.setMenu({
        topMenu: 6,
        subMenu: 1,
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
  }, [getUserList]);

  return (
    <div
      className="mdk-drawer-layout js-mdk-drawer-layout"
      data-push
      data-responsive-width="992px"
    >
      <div className="mdk-drawer-layout__content page-content">
        <GlobalBar />
        <PageTitle pageTitle="신고된 사용자" pagePathList={pagePathList} />

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
                <ReportedUserList
                  list={userList}
                  pageNumber={1}
                  count={10}
                  onChangeUserState={onChangeUserState}
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

export default ReportedUserListView;
