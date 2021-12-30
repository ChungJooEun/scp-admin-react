import React from "react";
import { useHistory, Link } from "react-router-dom";

const PopupBannerListItem = ({ bannerInfo }) => {
  const history = useHistory();

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
              >
                <option value="PRIVATE">게시 안함</option>
                <option value="POST">게시</option>
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
