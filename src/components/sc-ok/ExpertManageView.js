import React, { useContext, useEffect, useState, useCallback } from "react";
import axios from "axios";
import MenuContext from "../../context/menu";

import GlobalBar from "../common-components/GlobalBar";
import PageTitle from "../common-components/PageTitle";
import Paging from "../common-components/Paging";
import SearchPeriodBar from "../common-components/search-components/SearchPeriodBar";
import SideMenuBar from "../common-components/SideMenuBar";
import ExpertList from "./expert-manage-components/ExpertList";
import convertDashToDot, {
  convertDateFormat,
} from "../../util/date-convert-function";

const pagePathList = [
  {
    pageUrl: "/dashboard",
    pageName: "홈",
  },
];

const setCategoryName = (categoryId) => {
  switch (categoryId) {
    case "CC00000001":
      return "법률";
    case "CC00000002":
      return "세무";
    case "CC00000003":
      return "건축";
    case "CC00000004":
      return "법무";
    case "CC00000006":
      return "노무";
    default:
      return "";
  }
};

const ExpertManageView = () => {
  const { state, actions } = useContext(MenuContext);

  const [pageNumber, setPageNumber] = useState(1);
  const getPageNumber = (curNumber) => {
    setPageNumber(curNumber);
  };

  const [seletedCategory, setSeletedCategory] = useState("");
  const onChangeCategory = (newCategory) => {
    setSeletedCategory(newCategory);
  };

  const [expertList, setExpertList] = useState(null);
  const [totalRows, setTotalRows] = useState(null);

  const getExpertList = useCallback(async () => {
    const url = `${process.env.REACT_APP_SERVICE_API}/api/v1/ok/online/admin/list`;

    try {
      const response = await axios.get(url, {
        params: {
          category: seletedCategory,
          page: pageNumber,
          count: 10,
        },
      });

      if (response.status === 200) {
        const { totalRows, data } = response.data;

        let ary = [];

        for (let i = 0; i < data.length; i++) {
          ary.push({
            id: data[i].id, // id
            name: "전문가 이름/닉네임", // 닉네임 -> 이름?
            adminId: data[i].adminId, // 아이디
            area: setCategoryName(data[i].cateId), // 전문 분야
            createdAt: convertDateFormat(data[i].createdAt), // 등록일
            latestAt: convertDashToDot(data[i].latestAt), // 최근 활동일
          });
        }

        setTotalRows(totalRows);
        setExpertList(ary);
      }
    } catch (e) {
      alert("전문가 목록 조회 중, 오류가 발생허였습니다.");
      console.log(e);
    }
  }, [pageNumber, seletedCategory]);

  useEffect(() => {
    getExpertList();

    if (state.menu.topMenu !== 4 || state.menu.subMenu !== 2) {
      actions.setMenu({
        topMenu: 4,
        subMenu: 2,
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
  }, [getExpertList]);

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
          pageTitle="서초 OK 생활 자문단 - 전문가 관리"
        />

        <div className="container-fluid page__container">
          <div className="page-section">
            <h2>전문가</h2>
            <div className="">
              <span
                className={
                  seletedCategory === ""
                    ? "btn btn-accent btn-block-xs"
                    : "btn btn-secondary btn-block-xs"
                }
                onClick={() => onChangeCategory("")}
              >
                전체
              </span>
              <span
                className={
                  seletedCategory === "CC00000001"
                    ? "btn btn-accent btn-block-xs"
                    : "btn btn-secondary btn-block-xs"
                }
                onClick={() => onChangeCategory("CC00000001")}
              >
                법률
              </span>
              <span
                className={
                  seletedCategory === "CC00000002"
                    ? "btn btn-accent btn-block-xs"
                    : "btn btn-secondary btn-block-xs"
                }
                onClick={() => onChangeCategory("CC00000002")}
              >
                세무
              </span>
              <span
                className={
                  seletedCategory === "CC00000003"
                    ? "btn btn-accent btn-block-xs"
                    : "btn btn-secondary btn-block-xs"
                }
                onClick={() => onChangeCategory("CC00000003")}
              >
                건축
              </span>
              <span
                className={
                  seletedCategory === "CC00000004"
                    ? "btn btn-accent btn-block-xs"
                    : "btn btn-secondary btn-block-xs"
                }
                onClick={() => onChangeCategory("CC00000004")}
              >
                법무
              </span>
              <span
                className={
                  seletedCategory === "CC00000006"
                    ? "btn btn-accent btn-block-xs"
                    : "btn btn-secondary btn-block-xs"
                }
                onClick={() => onChangeCategory("CC00000006")}
              >
                노무
              </span>
            </div>
            <br />

            <div className="page-separator">
              <div className="page-separator__text">
                목록(<span className="number-count">{totalRows}</span>)
              </div>
            </div>

            <br />
            <br />

            <div className="card mb-lg-32pt">
              <div className="card-header">
                <SearchPeriodBar />
              </div>
              {expertList && (
                <ExpertList
                  expertList={expertList}
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
};

export default ExpertManageView;
