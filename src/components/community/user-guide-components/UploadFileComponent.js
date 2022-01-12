import React from "react";

const UploadFileComponent = ({ onChangeFiles, onClickSaveBtn }) => {
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
              multiple
              name="FileName"
              onChange={(e) => onChangeFiles(e.target.files)}
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
