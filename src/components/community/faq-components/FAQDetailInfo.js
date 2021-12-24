import React from "react";

const FAQDetailInfo = () => {
  return (
    <div className="list-group">
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
              *질문
            </label>
            <div className="col-md-10">
              <input
                id="title"
                type="text"
                placeholder="질문을 입력하세요 ..."
                className="form-control"
              />
            </div>
          </div>
        </div>
      </div>
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
              담당자
            </label>
            <div className="col-md-10">
              <input
                id="title"
                type="text"
                placeholder=""
                className="form-control"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQDetailInfo;
