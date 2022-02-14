import React, { useEffect, useContext, useState, useCallback } from "react";
import axios from "axios";
import GlobalBar from "../common-components/GlobalBar";
import PageTitle from "../common-components/PageTitle";

import ActivityCount from "./dashboard-components/stat-components/ActivityCount";
import ActivistStat from "./dashboard-components/stat-components/ActivistStat";
import InstitutionStat from "./dashboard-components/stat-components/InstitutionStat";
import SeochoOkConsulting from "./dashboard-components/stat-components/SechoOkConsulting";
import AgencyRequestList from "../agency/agency-list-components/AgencyRequestList";
import SearchPeriodBar from "../common-components/search-components/SearchPeriodBar";
import SideMenuBar from "../common-components/SideMenuBar";
import Paging from "../common-components/Paging";
import MenuContext from "../../context/menu";

const pagePathList = [
  {
    pageUrl: "/dashboard",
    pageName: "홈",
  },
];

const DashBoardView = () => {
  const { state, actions } = useContext(MenuContext);

  const [totalRows, setTotalRows] = useState(null);
  const [orgList, setOrgList] = useState(null);

  const [pageNumber, setPageNumber] = useState(1);
  const getPageNumber = (curNumber) => {
    setPageNumber(curNumber);
  };

  const getOrgList = useCallback(async () => {
    const url = `${process.env.REACT_APP_SERVICE_API}/api/v1/org/request`;

    try {
      const response = await axios.get(url, {
        params: {
          page: pageNumber,
          count: 10,
        },
      });

      if (response.status === 200) {
        const { data, totalRows } = response.data;

        let ary = [];

        for (let i = 0; i < data.length; i++) {
          ary.push({
            id: data[i].idx,
            name: data[i].orgTitle, // 기관명
            address: data[i].address1 + " " + data[i].address2, // 주소
            contactInfo: data[i].contact, // 연락처
            createDate: data[i].createdAt, // 등록일
            state: data[i].orgStatus, // 상태
          });
        }

        setTotalRows(totalRows);
        setOrgList(ary);
      }
    } catch (e) {
      alert("기관/단체 목록을 조회하는데 실패하였습니다.");
      console.log(e);
    }
  }, [pageNumber]);

  useEffect(() => {
    getOrgList();

    if (state.menu.topMenu !== 0 || state.menu.subMenu !== 0) {
      actions.setMenu({
        topMenu: 0,
        subMenu: 0,
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
  }, [getOrgList]);

  return (
    <div
      className="mdk-drawer-layout js-mdk-drawer-layout"
      data-push
      data-responsive-width="992px"
    >
      <div className="mdk-drawer-layout__content page-content">
        <GlobalBar />

        <PageTitle pageTitle={"대시보드"} pagePathList={pagePathList} />
        <div
          className="mdk-drawer-layout js-mdk-drawer-layout"
          data-push
          data-responsive-width="992px"
        >
          <div className="container-fluid page__container">
            <div className="page-section">
              <ActivityCount />

              <ActivistStat type="activist" title="활동자" />
              <ActivistStat type="consumer" title="수요자" />

              <InstitutionStat />

              <SeochoOkConsulting />

              <div className="page-separator">
                <div className="page-separator__text">기관/단체 등록요청</div>
              </div>
              <div className="card mb-lg-32pt">
                <div className="card-header">
                  <SearchPeriodBar />
                </div>

                {orgList && (
                  <AgencyRequestList
                    list={orgList}
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
      </div>

      <SideMenuBar />
    </div>
  );
};

export default DashBoardView;
