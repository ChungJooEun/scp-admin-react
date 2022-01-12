import React from "react";

const GuideName = ({ title, onChangeTitle }) => {
  return (
    <div className="list-group-item">
      <div
        role="group"
        aria-labelledby="label-question"
        className="m-0 form-group"
      >
        <div className="form-row align-items-center">
          <label
            id="label-question"
            for="question"
            className="col-md-2 col-form-label form-label"
          >
            *사용자 가이드 제목
          </label>
          <div className="col-md-10">
            <input
              id="title"
              type="text"
              placeholder="제목을 입력하세요 ..."
              className="form-control"
              value={title}
              onChange={(e) => onChangeTitle(e.target.value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuideName;
