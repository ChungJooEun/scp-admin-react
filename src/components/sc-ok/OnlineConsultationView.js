import axios from "axios";
import React, { useEffect, useContext, useState, useCallback } from "react";
import LoginContext from "../../context/login";
import MenuContext from "../../context/menu";
import checkLoginValidation from "../../util/login-validation";

import GlobalBar from "../common-components/GlobalBar";
import PageTitle from "../common-components/PageTitle";
import Paging from "../common-components/Paging";
import SearchPeriodWithExpertBar from "../common-components/search-components/SearchPeriodWithExpertBar";
import SideMenuBar from "../common-components/SideMenuBar";
import AnsweredList from "./online-consultation-components/AnsweredList";
import ImageForm from "./online-consultation-components/ImageForm";
import OnlineConsultationList from "./online-consultation-components/OnlineConsultationList";

const pagePathList = [
  {
    pageUrl: "/dashboard",
    pageName: "홈",
  },
];

const OnlineConsultationView = () => {
  const { state, actions } = useContext(MenuContext);
  const { isLogin } = useContext(LoginContext).state;

  const [pageNumber, setPageNumber] = useState(1);
  const getPageNumber = (curNumber) => {
    setPageNumber(curNumber);
  };

  const [totalRows, setTotalRows] = useState(null);
  const [onlineConsultationList, setOnlineConsultationList] = useState(null);
  const [searchInfo, setSearchInfo] = useState({
    expertIdx: "",
    searchStartDate: "",
    searchEndDate: "",
  });

  const getOnlineConsultationList = useCallback(async () => {
    const url = `${process.env.REACT_APP_SERVICE_API}/api/v1/ok/online/list`;

    try {
      const response = await axios.get(url, {
        params: {
          page: pageNumber,
          count: 10,
          expertIdx: searchInfo.expertIdx,
          searchStartDate: searchInfo.searchStartDate,
          searchEndDate: searchInfo.searchEndDate,
        },
      });

      if (response.status === 200) {
        const { totalRows, data } = response.data;

        setTotalRows(totalRows);

        let ary = [];

        for (let i = 0; i < data.length; i++) {
          ary.push({
            idx: data[i].idx,
            title: data[i].title,
            area: data[i].area,
            userName: data[i].name,
            createDate: data[i].createdAt,
            expertName: Object.keys(data[i]).includes("expertName")
              ? data[i].expertName
              : "-",
            consultationState: data[i].consultationStatus,
            state: data[i].openStatus,
          });
        }

        setOnlineConsultationList(ary);
      }
    } catch (e) {
      alert("온라인 상담 목록 조회 중, 오류가 발생하였습니다.");
      console.log(e);
    }
  }, [pageNumber, searchInfo]);

  const searchOnlineCounselginList = (seletedExpertIdx, seletedDate) => {
    setSearchInfo({
      expertIdx: seletedExpertIdx === "default" ? "" : seletedExpertIdx,
      searchStartDate: seletedDate.sDate,
      searchEndDate: seletedDate.eDate,
    });
  };

  useEffect(() => {
    checkLoginValidation(isLogin);

    if (isLogin) {
      getOnlineConsultationList();

      if (state.menu.topMenu !== 4 || state.menu.subMenu !== 0) {
        actions.setMenu({
          topMenu: 4,
          subMenu: 0,
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
  }, [getOnlineConsultationList, isLogin]);

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
            pageTitle="서초 OK 생활 자문단 - 온라인 상담"
          />

          <div className="container-fluid page__container">
            <div className="page-section">
              <ImageForm type="online" />
              <br />
              <br />
              <br />

              <div className="page-separator">
                <div className="page-separator__text">
                  답변자 지정<span className="number-count"></span>
                </div>
              </div>
              <AnsweredList />

              <div className="page-separator">
                <div className="page-separator__text">
                  온라인 상담 목록(
                  <span className="number-count">{totalRows}</span>)
                </div>
              </div>
              <div className="card mb-lg-32pt">
                <div className="card-header">
                  <SearchPeriodWithExpertBar
                    type="ok-online"
                    searchCounselginList={searchOnlineCounselginList}
                  />
                </div>
                {onlineConsultationList && (
                  <OnlineConsultationList
                    list={onlineConsultationList}
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
  else return null;
};

export default OnlineConsultationView;
