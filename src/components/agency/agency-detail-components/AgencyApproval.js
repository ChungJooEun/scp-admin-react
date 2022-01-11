import React from "react";
import { useHistory } from "react-router-dom";

const AgencyApproval = ({ statusInfo, onChangeStatus, onClickSaveBtn }) => {
  const history = useHistory();

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
              className="col-sm-2 col-form-label form-label"
            >
              상태
            </label>
            <div className="col-sm-10">
              <select
                id="topic"
                className="form-control custom-select"
                defaultValue={statusInfo.orgState}
                key={statusInfo.orgState}
                name="orgState"
                onChange={(e) => {
                  onChangeStatus(e.target.name, e.target.value);
                }}
              >
                <option value="W">대기 중</option>
                <option value="O">승인</option>
                <option value="N">기각</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      {statusInfo.orgState === "N" && (
        <>
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
                  className="col-sm-2 col-form-label form-label"
                >
                  기각 사유
                </label>
                <div className="col-sm-10">
                  <select
                    id="topic"
                    className="form-control custom-select"
                    defaultValue={statusInfo.rejectionType}
                    key={statusInfo.rejectionType}
                    name="rejectionType"
                    onChange={(e) => {
                      onChangeStatus(e.target.name, e.target.value);
                    }}
                  >
                    <option value="S">정보 불충분</option>
                    <option value="F">허위 자료 제출</option>
                    <option value="E">기타</option>
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
                <textarea
                  id="question"
                  placeholder="상세..."
                  rows="4"
                  className="form-control"
                  value={statusInfo.rejectionReason}
                  name="rejectionReason"
                  onChange={(e) => {
                    onChangeStatus(e.target.name, e.target.value);
                  }}
                ></textarea>
              </div>
            </div>
          </div>
        </>
      )}
      <div className="list-group-item">
        <button
          type="button"
          className="btn btn-secondary"
          onClick={() => history.goBack()}
        >
          취소
        </button>
        <button
          type="button"
          className="btn btn-accent"
          onClick={() => onClickSaveBtn()}
        >
          저장
        </button>
      </div>
    </div>
  );
};

export default AgencyApproval;
