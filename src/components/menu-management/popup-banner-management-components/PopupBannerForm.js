import React from "react";
import { useHistory } from "react-router-dom";

const PopupBannerForm = ({
  type,
  bannerInfo,
  getBannerInfo,
  onClickDeleteBtn,
  onClickSaveBtn,
}) => {
  const history = useHistory();

  return (
    <div className="list-group-item p-16pt">
      <div className="form-group">
        <label className="form-label" htmlFor="site">
          링크:
        </label>
        <input
          id="site"
          type="site"
          className="form-control"
          placeholder="www ..."
          name="link"
          value={bannerInfo.link}
          onChange={(e) => getBannerInfo(e.target.name, e.target.value)}
        />
      </div>
      <div className="float-left m-0 text-height-32">
        <select
          id="custom-select"
          className="form-control custom-select"
          defaultValue={bannerInfo.state}
          name="state"
          onChange={(e) => getBannerInfo(e.target.name, e.target.value)}
        >
          <option value={0}>게시 안함</option>
          <option value={1}>게시</option>
        </select>
      </div>
      <button
        className="btn btn btn-secondary ml-16pt"
        onClick={() => history.push("/main-menu/popup-banner")}
      >
        취소
      </button>
      {type === "edit" && (
        <button className="btn btn-warning" onClick={() => onClickDeleteBtn()}>
          삭제
        </button>
      )}
      <button className="btn btn-success" onClick={() => onClickSaveBtn()}>
        저장
      </button>
    </div>
  );
};
export default PopupBannerForm;
