import React, { useContext, useEffect, useState, useCallback } from "react";
import MenuContext from "../../context/menu";
import LoginContext from "../../context/login";
import axios from "axios";
import checkLoginValidation from "../../util/login-validation";

import GlobalBar from "../common-components/GlobalBar";
import PageTitle from "../common-components/PageTitle";
import Paging from "../common-components/Paging";
import SearchPeriodWithExpertBar from "../common-components/search-components/SearchPeriodWithExpertBar";
import SideMenuBar from "../common-components/SideMenuBar";

import OnSiteCounselingList from "./onsite-consultation-components/list-components/OnSiteCounselingList";

const pagePathList = [
  {
    pageUrl: "/dashboard",
    pageName: "홈",
  },
];

const OnSiteCounselingView = () => {
  const { state, actions } = useContext(MenuContext);
  const { isLogin } = useContext(LoginContext).state;

  const [pageNumber, setPageNumber] = useState(1);
  const getPageNumber = (curNumber) => {
    setPageNumber(curNumber);
  };

  const [sortInfo, setSortInfo] = useState({
    sortBy: "createdAt",
    sortType: "desc",
  });

  const onChangeSortInfo = (selectedColumn) => {
    if (sortInfo.sortBy === selectedColumn) {
      setSortInfo({
        sortBy: sortInfo.sortBy,
        sortType: sortInfo.sortType === "desc" ? "asc" : "desc",
      });
    } else {
      setSortInfo({
        sortBy: selectedColumn,
        sortType: "desc",
      });
    }
  };

  const [totalRows, setTotalRows] = useState(null);
  const [counselingList, setCounselingList] = useState(null);
  const [searchInfo, setSearchInfo] = useState({
    expertIdx: "",
    searchStartDate: "",
    searchEndDate: "",
  });

  const getOnSiteCounselingList = useCallback(async () => {
    const url = `${process.env.REACT_APP_SERVICE_API}/api/v1/on-site-consultation`;

    try {
      const response = await axios.get(url, {
        params: {
          page: pageNumber,
          count: 10,
          expertIdx: searchInfo.expertIdx,
          searchStartDate: searchInfo.searchStartDate,
          searchEndDate: searchInfo.searchEndDate,
          sortBy: sortInfo.sortBy,
          sortType: sortInfo.sortType,
        },
      });

      if (response.status === 200) {
        const { totalRows, data } = response.data;

        setTotalRows(totalRows);

        let ary = [];

        for (let i = 0; i < data.length; i++) {
          ary.push({
            idx: data[i].idx,
            title: Object.keys(data[i]).includes("title") ? data[i].title : "-",
            area: data[i].area,
            userName: data[i].userName,
            expertName: data[i].expertName,
            expertIdx: data[i].expertIdx,
            registeredDate: data[i].registeredDate,
            registeredTime24: data[i].registeredTime24,
          });
        }

        setCounselingList(ary);
      }
    } catch (e) {
      alert("현장 상담 목록 조회 중, 오류가 발생하였습니다.");
      console.log(e);
    }
  }, [
    pageNumber,
    searchInfo.expertIdx,
    searchInfo.searchEndDate,
    searchInfo.searchStartDate,
    sortInfo.sortBy,
    sortInfo.sortType,
  ]);

  const searchOnSiteCounselginList = (seletedExpertIdx, seletedDate) => {
    setSearchInfo({
      expertIdx: seletedExpertIdx === "default" ? "" : seletedExpertIdx,
      searchStartDate: seletedDate.sDate,
      searchEndDate: seletedDate.eDate,
    });
  };

  useEffect(() => {
    checkLoginValidation(isLogin);

    if (isLogin) {
      getOnSiteCounselingList();

      if (state.menu.topMenu !== 4 || state.menu.subMenu !== 3) {
        actions.setMenu({
          topMenu: 4,
          subMenu: 3,
        });
      }

      if (!state.subMenu.topMenu4) {
        actions.setSubMenu({
          ...state.subMenu,
          topMenu4: true,
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
  }, [getOnSiteCounselingList, isLogin]);

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
            pagePathList={pagePathList}
            pageTitle="서초 OK 생활 자문단 - 현장 상담"
          />

          <div className="container-fluid page__container">
            <div className="page-section">
              <div className="page-separator">
                <div className="page-separator__text">
                  현장 상담 목록(
                  <span className="number-count">{totalRows}</span>)
                </div>
              </div>
              <div className="card mb-lg-32pt">
                <div className="card-header">
                  <SearchPeriodWithExpertBar
                    type="on-site"
                    searchCounselginList={searchOnSiteCounselginList}
                  />
                </div>
                {counselingList && (
                  <OnSiteCounselingList
                    list={counselingList}
                    pageNumber={pageNumber}
                    count={10}
                    onChangeSortInfo={onChangeSortInfo}
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
  else return null;
};

export default OnSiteCounselingView;
