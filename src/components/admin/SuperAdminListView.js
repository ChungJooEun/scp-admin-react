import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import MenuContext from "../../context/menu";

import GlobalBar from "../common-components/GlobalBar";
import PageTitle from "../common-components/PageTitle";
import Paging from "../common-components/Paging";
import SideMenuBar from "../common-components/SideMenuBar";
import AdminList from "./list-components/AdminList";

const pagePathList = [
  {
    pageUrl: "/dashboard",
    pageName: "홈",
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

const SuperAdminListView = () => {
  const { state, actions } = useContext(MenuContext);
  const history = useHistory();

  const [totalRows, setTotalRows] = useState(null);
  const [adminList, setAdminList] = useState(null);

  const getSuperAdminList = async () => {
    const url = `http://${process.env.REACT_APP_SERVICE_IP}:${process.env.REACT_APP_SERVICE_PORT}/api/v1/admin`;

    try {
      const response = await axios.get(url, {
        params: {
          page: 1,
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
            adminId: data[i].id,
            name: data[i].name,
            // 등록자,
            // 접속일,
            // 최종 접속일,
            phone: data[i].phone, // 연락처
            memo: data[i].memo, // 메모
          });
        }

        setAdminList(ary);
      }
    } catch (e) {
      alert("관리자 목록조회에 오류가 발생하였습니다.");
      console.log(e);
    }
  };

  const deleteAdmin = async (deleteIdx) => {
    const url = `http://${process.env.REACT_APP_SERVICE_IP}:${process.env.REACT_APP_SERVICE_PORT}/api/v1/admin/${deleteIdx}`;

    try {
      const response = await axios.delete(url);

      if (response.status === 200) {
        alert("삭제되었습니다.");

        getSuperAdminList();
      }
    } catch (e) {
      alert("관리자를 삭제하는데 오류가 발생하였습니다.");
      console.log(e);
    }
  };

  useEffect(() => {
    getSuperAdminList();

    if (state.menu.topMenu !== 7 || state.menu.subMenu !== 0) {
      actions.setMenu({
        topMenu: 7,
        subMenu: 0,
      });
    }

    if (!state.subMenu.topMenu7) {
      actions.setSubMenu({
        ...state.subMenu,
        topMenu7: true,
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
  }, []);

  return (
    <div
      className="mdk-drawer-layout js-mdk-drawer-layout"
      data-push
      data-responsive-width="992px"
    >
      <div className="mdk-drawer-layout__content page-content">
        <GlobalBar />
        <PageTitle pageTitle="슈퍼 관리자" pagePathList={pagePathList} />

        <div className="container-fluid page__container">
          <div className="page-section">
            <div className="container-fluid page__container">
              <div className="page-section">
                <button
                  className="btn btn-primary margin-tb-1rem width-100"
                  onClick={() => history.push("/admin/add-admin")}
                >
                  + 새로운 관리자 등록하기
                </button>

                <div className="page-separator">
                  <div className="page-separator__text">
                    목록(<span className="number-count">{totalRows}</span>)
                  </div>
                </div>

                <div className="card mb-lg-32pt">
                  {adminList && (
                    <AdminList
                      list={adminList}
                      pageNumber={1}
                      count={10}
                      deleteAdmin={deleteAdmin}
                    />
                  )}
                  <Paging />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SideMenuBar />
    </div>
  );
};

export default SuperAdminListView;
