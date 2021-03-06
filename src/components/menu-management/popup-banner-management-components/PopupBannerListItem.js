import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const PopupBannerListItem = ({ bannerInfo }) => {
  const onChangeIsPost = async (status) => {
    let formData = new FormData();

    formData.append("idx", bannerInfo.id); //id

    formData.append("category", bannerInfo.link); // 링크

    formData.append("userid", window.sessionStorage.getItem("userId"));

    formData.append("isPost", status); // 상태 (게시 / 게시안함)

    requestSaveBanner(formData);
  };

  // 팝업 배너 수정 axios 요청
  const requestSaveBanner = async (data) => {
    const url = `${process.env.REACT_APP_UPLOAD_SERVICE_API}/api/upload/banner`;

    try {
      const response = await axios.post(url, data, {
        headers: {
          "content-type": "multipart/form-data",
        },
      });

      if (response.status === 201) {
        alert("수정 되었습니다.");
      }
    } catch (e) {
      alert("저장에 실패하였습니다.");
      console.log(e);
    }
  };

  return (
    <div className="col-sm-6 col-md-4 card-group-row__col">
      <div className="card card-sm card-group-row__card">
        <div className="position-relative">
          <div className="card-img-top">
            <img
              src={bannerInfo.img}
              className="card-img-top card-img-cover"
              alt=""
            />
          </div>
        </div>
        <div className="card-body d-flex">
          <div className="flex">
            <h5 className="card-title float-left m-0 text-height-32 link-100">
              링크 : {bannerInfo.link}
            </h5>
          </div>
        </div>
        <div className="card-body d-flex">
          <div className="flex">
            <div className="float-left m-0 text-height-32">
              <select
                id="custom-select"
                className="form-control custom-select"
                defaultValue={bannerInfo.state}
                key={bannerInfo.state}
                onChange={(e) => onChangeIsPost(e.target.value)}
              >
                <option value={0}>게시 안함</option>
                <option value={1}>게시</option>
              </select>
            </div>
            <Link
              to={`/main-menu/popup-banner-edit/${bannerInfo.id}`}
              type="button"
              className="btn btn-light float-right"
            >
              수정
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopupBannerListItem;
