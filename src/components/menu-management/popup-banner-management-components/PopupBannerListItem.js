import React from "react";
import { useHistory } from "react-router-dom";

const PopupBannerListItem = () => {
  const history = useHistory();

  return (
    <div className="col-sm-6 col-md-4 card-group-row__col">
      <div className="card card-sm card-group-row__card">
        <div className="position-relative">
          <div className="card-img-top">
            <img
              src="../assets/images/stories/256_rsz_thomas-russell-751613-unsplash.jpg"
              className="card-img-top card-img-cover"
              alt=""
            />
          </div>
        </div>
        <div className="card-body d-flex">
          <div className="flex">
            <h5 className="card-title float-left m-0 text-height-32 link-100">
              링크 : www.site.com
            </h5>
          </div>
        </div>
        <div className="card-body d-flex">
          <div className="flex">
            <div className="float-left m-0 text-height-32">
              <select id="custom-select" className="form-control custom-select">
                <option selected="">게시 안함</option>
                <option selected value="1">
                  게시
                </option>
              </select>
            </div>
            <a
              onClick={() => history.push("/main-menu/popup-banner-edit")}
              type="button"
              className="btn btn-light float-right"
            >
              수정
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopupBannerListItem;
