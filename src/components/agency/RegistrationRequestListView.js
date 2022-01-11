import React, { useContext, useEffect, useState, useCallback } from "react";
import axios from "axios";
import MenuContext from "../../context/menu";

import GlobalBar from "../common-components/GlobalBar";
import PageTitle from "../common-components/PageTitle";
import Paging from "../common-components/Paging";
import SearchPeriodBar from "../common-components/search-components/SearchPeriodBar";
import SideMenuBar from "../common-components/SideMenuBar";
import AgencyRequestList from "./agency-list-components/AgencyRequestList";

const pagePathList = [
  {
    pageUrl: "/dashboard",
    pageName: "홈",
  },
  {
    pageUrl: "/agency/registration-request",
    pageName: "기관/단체 목록",
  },
];

const RegistrationRequestListView = () => {
  const { state, actions } = useContext(MenuContext);

  const [orgList, setOrgList] = useState(null);
  const [totalRows, setTotalRows] = useState(null);

  const [pageNumber, setPageNumber] = useState(1);
  const getPageNumber = (curNumber) => {
    setPageNumber(curNumber);
  };

  const getOrgList = useCallback(async () => {
    const url = `http://${process.env.REACT_APP_SERVICE_IP}:${process.env.REACT_APP_SERVICE_PORT}/api/v1/org/request`;

    try {
      const response = await axios.get(url, {
        params: {
          page: pageNumber,
          count: 10,
        },
      });

      if (response.status === 200) {
        const { totalRows, data } = response.data;

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

    if (state.menu.topMenu !== 3 || state.menu.subMenu !== 1) {
      actions.setMenu({
        topMenu: 3,
        subMenu: 1,
      });
    }

    if (!state.subMenu.topMenu3) {
      actions.setSubMenu({
        ...state.subMenu,
        topMenu3: true,
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
        <PageTitle
          pagePathList={pagePathList}
          pageTitle="기관/단체 등록 요청 목록"
        />

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
              {orgList && (
                <AgencyRequestList list={orgList} pageNumber={1} count={10} />
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

export default RegistrationRequestListView;
