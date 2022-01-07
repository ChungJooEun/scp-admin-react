import React, { useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

import PopupBanner from "../../example/popup-banner";

import PopupBannerForm from "./popup-banner-management-components/PopupBannerForm";
import PopupBannerImage from "./popup-banner-management-components/PopupBannerImage";

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

const EditPopupBannerView = ({ match }) => {
  const history = useHistory();

  const [bannerInfo, setBannerInfo] = useState(null);

  // 팝업 배너 정보 수정
  const getBannerInfo = (name, data) => {
    setBannerInfo({
      ...bannerInfo,
      [name]: data,
    });
  };

  // 팝업 배너 이미지 수정
  const getBannerImg = (imgFile) => {
    setBannerInfo({
      ...bannerInfo,
      img: imgFile,
    });
  };

  // 팝업 배너 삭제 axios 요청
  const requestDeleteBanner = async () => {
    const url = `http://${process.env.REACT_APP_SERVICE_IP}:${process.env.REACT_APP_SERVICE_PORT}/api/v1/menu/banner/${bannerInfo.id}`;

    try {
      const response = await axios.delete(url);

      if (response.status === 200) {
        alert("삭제되었습니다.");
        history.push("/main-menu/popup-banner");
      }
    } catch (e) {
      alert("카테고리 삭제에 실패하였습니다.");
      console.log(e);
    }
  };

  // 확인 버튼 클릭시, 수행
  const onHandleDeleteBanner = () => {
    requestDeleteBanner();
  };

  // 팝업 배너 삭제
  const onClickDeleteBtn = useConfirm(
    "팝업 배너를 삭제하시겠습니까?",
    onHandleDeleteBanner
  );

  // 팝업 배너 수정 axios 요청
  const requestSaveBanner = async (data) => {
    const url = `http://118.67.153.236:8080/api/v1/menu/banner/${bannerInfo.id}`;

    try {
      const response = await axios.put(url, data);

      if (response.status === 200) {
        alert("수정 되었습니다.");
        history.push("/main-menu/popup-banner");
      }
    } catch (e) {
      alert("저장에 실패하였습니다.");
      console.log(e);
    }
  };

  // 확인 버튼 클릭시, 수행
  const onHandleSaveBanner = () => {
    let formData = new FormData();

    formData.append("id", bannerInfo.id); //id

    if (typeof bannerInfo.img === "object") {
      formData.append("file", bannerInfo.img[0]); // 이미지
    }

    formData.append("name", bannerInfo.link); // 링크

    formData.append("state", bannerInfo.state); // 상태 (게시 / 게시안함)

    for (let v of formData.values()) {
      console.log(v);
    }

    // requestSaveBanner(formData);
  };

  // 팝업 배너 수정 내용 저장
  const onClickSaveBtn = useConfirm(
    "수정한 내용을 저장하시겠습니까?",
    onHandleSaveBanner
  );

  useEffect(() => {
    const { bannerId } = match.params;

    const getBannerInfo = async () => {
      const url = `http://${process.env.REACT_APP_SERVICE_IP}:${process.env.REACT_APP_SERVICE_PORT}/api/v1/menu/banner/${bannerId}`;

      try {
        const response = await axios.get(url);

        if (response.status === 200) {
          setBannerInfo({
            id: response.data.idx,
            link: response.data.category,
            state: "PRIVATE", // 수정 필요
            img: Object.keys(response.data).includes("images")
              ? `http://${process.env.REACT_APP_SERVICE_IP}:${process.env.REACT_APP_SERVICE_PORT}/main/${response.data.folder}/${response.data.images}`
              : `${process.env.PUBLIC_URL}/assets/images/stories/256_rsz_thomas-russell-751613-unsplash.jpg`,
          });
        }
      } catch (e) {
        alert("팝업 배너 상세조회에 실패하였습니다.");
        console.log(e);
      }
    };

    getBannerInfo();
  }, [match.params]);

  if (!bannerInfo) {
    return <div></div>;
  }

  return (
    <>
      <div
        className="mdk-drawer-layout js-mdk-drawer-layout"
        data-push
        data-responsive-width="992px"
      >
        <div className="mdk-drawer-layout__content page-content">
          <div className="container-fluid page__container">
            <div className="page-section">
              <h2 className="mb-0 text-align-center">팝업 배너 수정</h2>
              <br />
              <br />
              <div className="row">
                <div className="col-lg-4">
                  <div className="card mb-lg-0">
                    <div className="list-group list-group-flush">
                      <PopupBannerImage
                        imgSrc={bannerInfo.img}
                        getBannerImg={getBannerImg}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-lg-8">
                  <div className="card mb-lg-0">
                    <div className="list-group list-group-flush">
                      <PopupBannerForm
                        type="edit"
                        bannerInfo={bannerInfo}
                        getBannerInfo={getBannerInfo}
                        onClickDeleteBtn={onClickDeleteBtn}
                        onClickSaveBtn={onClickSaveBtn}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditPopupBannerView;
