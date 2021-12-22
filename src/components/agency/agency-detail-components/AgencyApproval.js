import React from "react";

const AgencyApproval = () => {
  return (
    <div className="list-group">
      <div className="list-group-item">
        <div
          className="form-group m-0"
          role="group"
          aria-labelledby="label-topic"
        >
          <div className="form-row align-items-center">
            <label
              id="label-topic"
              htmlFor="topic"
              className="col-md-3 col-form-label form-label"
            >
              상태
            </label>
            <div className="col-md-9">
              <select id="topic" className="form-control custom-select">
                <option value="JavaScript">대기 중</option>
                <option value="JavaScript">승인</option>
                <option value="JavaScript">기각</option>
              </select>
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
          <div className="form-row">
            <label
              id="label-question"
              htmlFor="question"
              className="col-md-3 col-form-label form-label"
            >
              기각 사유
            </label>
            <div className="col-md-9">
              <textarea
                id="question"
                placeholder="상세..."
                rows="4"
                className="form-control"
              ></textarea>
            </div>
          </div>
        </div>
      </div>
      <div className="list-group-item">
        <button type="button" className="btn btn-secondary">
          취소
        </button>
        <button type="button" className="btn btn-accent">
          확인
        </button>
      </div>
    </div>
  );
};

export default AgencyApproval;
