import React, { useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

import GlobalBar from "../common-components/GlobalBar";
import PageTitle from "../common-components/PageTitle";
import SideMenuBar from "../common-components/SideMenuBar";
import AgencyApproval from "./agency-detail-components/AgencyApproval";
import AgencyDetailInfo from "./agency-detail-components/AgencyDetailInfo";

const pagePathList = [
  {
    pageUrl: "/dashboard",
    pageName: "홈",
  },
  {
    pageUrl: "/agency/registration-request",
    pageName: "기관/단체 등록 요청 목록",
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

const AgencyRequestDetailView = ({ match }) => {
  const history = useHistory();

  const [orgInfo, setOrgInfo] = useState(null);
  const [statusInfo, setStatusInfo] = useState(null);

  const onChangeStatus = (name, data) => {
    setStatusInfo({
      ...statusInfo,
      [name]: data,
    });
  };

  const saveOrgStatusInfo = async (data) => {
    const url = `${process.env.REACT_APP_SERVICE_API}/api/v1/org/request/${orgInfo.id}`;

    try {
      const response = await axios.put(url, data);

      if (response.status === 201) {
        alert("저장되었습니다.");
        history.goBack();
      }
    } catch (e) {
      alert("저장에 실패하였습니다.");
      console.log(e);
    }
  };

  const onHandleSaveStatus = () => {
    let data = new Object();

    data.orgStatus = statusInfo.orgState;
    data.orgIdx = window.sessionStorage.getItem("userIdx");

    if (statusInfo.orgState !== "O") {
      data.dismissal = statusInfo.rejectionType;
      data.reason = statusInfo.rejectionReason;
    }

    data.updatedUid = window.sessionStorage.getItem("userIdx");

    saveOrgStatusInfo(data);
  };

  const onClickSaveBtn = useConfirm(
    "작성하신 내용을 저장하시겠습니까?",
    onHandleSaveStatus
  );

  useEffect(() => {
    const { orgId } = match.params;

    const getOrgDetailInfo = async () => {
      const url = `${process.env.REACT_APP_SERVICE_API}/api/v1/org/request/${orgId}`;

      try {
        const response = await axios.get(url);

        if (response.status === 200) {
          setOrgInfo({
            id: response.data.id,
            // img : Object.keys(response.data).includes("images")
            // ? `${process.env.REACT_APP_SERVICE_API}/main/${response.data.folder}/${response.data.images}`
            // : `${process.env.PUBLIC_URL}/assets/images/people/110/guy-1.jpg`,
            img: `${process.env.PUBLIC_URL}/assets/images/people/110/guy-1.jpg`,
            name: response.data.orgTitle,
            address: response.data.address1 + " " + response.data.address2,
            contactInfo: response.data.contact,
            email: response.data.email,
            type: response.data.type,
            category: response.data.categoryIdx,
            introduction: response.data.bio,
          });

          setStatusInfo({
            orgState: response.data.orgStatus,
            rejectionType: response.data.dismissal,
            rejectionReason: response.data.reason,
          });
        }
      } catch (e) {
        alert("기관 상세조회에 오류가 발생하였습니다.");
        console.log(e);
      }
    };

    getOrgDetailInfo();

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
        <PageTitle
          pageTitle="기관/단체 등록 요청 목록 상세"
          pagePathList={pagePathList}
          onlyTitle={true}
        />

        <div className="container-fluid page__container">
          <div className="page-section">
            {orgInfo && <AgencyDetailInfo orgInfo={orgInfo} />}
            {statusInfo && (
              <AgencyApproval
                statusInfo={statusInfo}
                onChangeStatus={onChangeStatus}
                onClickSaveBtn={onClickSaveBtn}
              />
            )}
          </div>
        </div>
      </div>
      <SideMenuBar />
    </div>
  );
};

export default AgencyRequestDetailView;
