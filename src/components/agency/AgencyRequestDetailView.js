import React, { useEffect, useState, useContext, useCallback } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

import GlobalBar from "../common-components/GlobalBar";
import PageTitle from "../common-components/PageTitle";
import SideMenuBar from "../common-components/SideMenuBar";
import AgencyApproval from "./agency-detail-components/AgencyApproval";
import AgencyDetailInfo from "./agency-detail-components/AgencyDetailInfo";
import LoginContext from "../../context/login";
import checkLoginValidation from "../../util/login-validation";

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
  const { isLogin } = useContext(LoginContext).state;
  const { orgId } = match.params;

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

  const editCoinStatus = (selected) => {
    setOrgInfo({
      ...orgInfo,
      coinStatus: selected,
    });

    if (selected === "N") {
      if (
        window.confirm(
          `${
            orgInfo && orgInfo.name
          }의 코인 적립 여부를 '해당 없음'으로 변경하시겠습니까?`
        )
      ) {
        changeCoinStatus_unable_accum();
      }
    }
  };

  const onClickApproveAccumCoin = () => {
    if (
      window.confirm(
        `${
          orgInfo && orgInfo.name
        }의 코인 적립 여부를 '적립'으로 변경 및 선택하신 서초코인 센터로 지정하시겠습니까?`
      )
    ) {
      changeCoinStatus_accum();
    }
  };

  const changeCoinStatus_accum = async () => {
    if (orgInfo.scCoinCenterId === "default") {
      alert("서초 코인 센터를 선택해주세요.");
      return false;
    }

    const url = `${process.env.REACT_APP_SERVICE_API}/api/v1/org/coin/accum/${orgId}`;

    const data = new Object();
    data.id = orgId;
    data.scCoinCenterId = orgInfo.scCoinCenterId;
    data.scCoinAdminId = orgInfo.scCoinAdminId;
    data.updatedUid = orgId;

    try {
      const response = await axios.put(url, data);

      if (response.status === 200) {
        alert("변경되었습니다.");
        getOrgDetailInfo();
      }
    } catch (e) {
      console.log(e);
      alert("코인 적립 상태(적립) 변경 중, 오류가 발생하였습니다.");
    }
  };

  const changeCoinStatus_unable_accum = async () => {
    const url = `${process.env.REACT_APP_SERVICE_API}/api/v1/org/coin/unable-accum/${orgId}`;

    const data = new Object();
    data.id = orgId;
    data.updatedUid = orgId;

    try {
      const response = await axios.put(url, data);

      if (response.status === 200) {
        alert("변경되었습니다.");
        getOrgDetailInfo();
      }
    } catch (e) {
      console.log(e);
      alert("코인 적립 상태(해당 없음) 변경 중, 오류가 발생하였습니다.");
    }
  };

  const editScCoinCenterInfo = (selectedCenterId) => {
    for (let i = 0; i < centerList.length; i++) {
      if (centerList[i].centerId === selectedCenterId) {
        setOrgInfo({
          ...orgInfo,
          scCoinCenterId: selectedCenterId,
          scCoinAdminId: centerList[i].adminId,
        });

        break;
      }
    }
  };

  const getOrgDetailInfo = useCallback(async () => {
    const url = `${process.env.REACT_APP_SERVICE_API}/api/v1/org/request/${orgId}`;

    try {
      const response = await axios.get(url);

      if (response.status === 200) {
        setOrgInfo({
          id: response.data.id,
          img: Object.keys(response.data).includes("img")
            ? response.data.img
            : `${process.env.PUBLIC_URL}/assets/images/people/110/guy-1.jpg`,
          name: response.data.orgTitle,
          address: response.data.address1 + " " + response.data.address2,
          contactInfo: response.data.contact,
          email: response.data.email,
          type: response.data.type,
          coinStatus: response.data.coinStatus,
          category: response.data.category,
          introduction: response.data.bio,
          fileUrl: Object.keys(response.data).includes("fileUrl")
            ? response.data.fileUrl
            : "",
          fileName: Object.keys(response.data).includes("fileName")
            ? response.data.fileName
            : "",
          fileSize: Object.keys(response.data).includes("fileSize")
            ? response.data.fileSize
            : 0,
          scCoinCenterId: Object.keys(response.data).includes("scCoinCenterId")
            ? response.data.scCoinCenterId
            : "default",
          scCoinAdminId: Object.keys(response.data).includes("scCoinAdminId")
            ? response.data.scCoinAdminId
            : "default",
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
  }, [orgId]);

  const [centerList, setCenterList] = useState(null);

  useEffect(() => {
    checkLoginValidation(isLogin);

    if (isLogin) {
      getOrgDetailInfo();

      const getScCoinCenterInfo = async () => {
        const url = `${process.env.REACT_APP_SERVICE_API}/api/v1/sc-coin/centers`;

        try {
          const response = await axios.get(url);

          if (response.status === 200) {
            setCenterList(
              typeof response.data === "object" ? response.data : []
            );
          }
        } catch (e) {
          console.log(e);
          alert("서초코인 등록 센터 조회 중, 오류가");
        }
      };
      getScCoinCenterInfo();

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
  }, [isLogin, getOrgDetailInfo, orgId]);

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
            pageTitle="기관/단체 등록 요청 상세"
            pagePathList={pagePathList}
            onlyTitle={true}
          />

          <div className="container-fluid page__container">
            <div className="page-section">
              {orgInfo && (
                <AgencyDetailInfo
                  orgInfo={orgInfo}
                  editCoinStatus={editCoinStatus}
                  centerList={centerList}
                  editScCoinCenterInfo={editScCoinCenterInfo}
                  onClickApproveAccumCoin={onClickApproveAccumCoin}
                />
              )}
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
  else return null;
};

export default AgencyRequestDetailView;
