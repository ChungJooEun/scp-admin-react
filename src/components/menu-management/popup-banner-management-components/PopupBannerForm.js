import React from "react";

const PopupBannerForm = ({ type }) => {
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
        />
      </div>
      <div className="float-left m-0 text-height-32">
        <select id="custom-select" className="form-control custom-select">
          <option selected="">게시 안함</option>
          <option value="1">게시</option>
        </select>
      </div>
      <button
        className="btn btn btn-secondary ml-16pt"
        onclick="location.href='../main-menu/category.html'"
      >
        취소
      </button>
      {type === "edit" && (
        <button
          className="btn btn-warning"
          data-toggle="swal"
          data-swal-title="정말 삭제 하시겠습니까??"
          data-swal-text="이 동작은 다시 되돌릴 수 없습니다."
          data-swal-type="warning"
          data-swal-show-cancel-button="true"
          data-swal-confirm-button-text="확인"
          data-swal-confirm-cb="#swal-confirm-delete"
          data-swal-close-on-confirm="false"
        >
          삭제
        </button>
      )}
      <div
        id="swal-confirm-delete"
        className="d-none"
        data-swal-type="success"
        data-swal-title="삭제완료"
        data-swal-text="삭제 완료되었습니다."
      ></div>
      <button
        className="btn btn-success"
        data-toggle="swal"
        data-swal-title="완료!"
        data-swal-text="새로운 관리자가 등록되었습니다!"
        data-swal-type="success"
      >
        저장
      </button>
    </div>
  );
};
export default PopupBannerForm;
