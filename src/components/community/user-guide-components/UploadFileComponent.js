import React from "react";

const UploadFileComponent = ({
  onChangeFiles,
  onClickSaveBtn,
  isClickable,
}) => {
  return (
    <div className="list-group-item">
      <div
        role="group"
        aria-labelledby="label-question"
        className="m-0 form-group"
      >
        <div className="form-row align-items-center">
          <div className="col-md-12">
            <input
              className="btn margin-tb-1rem"
              type="file"
              accept="image/*"
              name="FileName"
              onChange={
                isClickable
                  ? (e) => onChangeFiles(e.target.files)
                  : () =>
                      alert(
                        "첨부 파일은 한번에 한가지씩만 추가 가능합니다.\n삭제 후에 다시 추가해주세요."
                      )
              }
            />
          </div>
          <button
            className="btn btn-primary margin-tb-1rem width-100"
            onClick={onClickSaveBtn}
          >
            저장
          </button>
        </div>
      </div>
    </div>
  );
};

export default UploadFileComponent;
