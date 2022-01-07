import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

import PopupBannerImage from "./popup-banner-management-components/PopupBannerImage";
import PopupBannerForm from "./popup-banner-management-components/PopupBannerForm";

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

const AddPopupBannerView = () => {
  const history = useHistory();

  const [bannerInfo, setBannerInfo] = useState({
    link: "",
    state: "PRIVATE",
    img: `${process.env.PUBLIC_URL}/assets/images/stories/256_rsz_thomas-russell-751613-unsplash.jpg`,
  });

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

  // 팝업 배너 저장 axios 요청
  const requestSaveBanner = async (data) => {
    const url = `http://${process.env.REACT_APP_SERVICE_IP}:${process.env.REACT_APP_UPLOAD_SERVICE_PORT}/api/upload/banner`;

    try {
      const response = await axios.post(url, data, {
        headers: {
          "content-type": "multipart/form-data",
        },
      });

      if (response.status === 201) {
        alert("저장 되었습니다.");
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

    if (typeof bannerInfo.img === "object") {
      formData.append("categoryFile", bannerInfo.img[0]); // 이미지
    }

    formData.append("category", bannerInfo.link); // 링크

    // formData.append("state", bannerInfo.state); // 상태 (게시 / 게시안함)

    formData.append("userid", window.sessionStorage.getItem("userId"));

    for (let v of formData.values()) {
      console.log(v);
    }

    requestSaveBanner(formData);
  };

  // 팝업 배너 저장
  const onClickSaveBtn = useConfirm("저장하시겠습니까?", onHandleSaveBanner);

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
              <h2 className="mb-0 text-align-center">팝업 배너 추가</h2>
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
                        type="add"
                        bannerInfo={bannerInfo}
                        getBannerInfo={getBannerInfo}
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

export default AddPopupBannerView;
