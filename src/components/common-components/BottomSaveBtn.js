import React from "react";

const BottomSaveBtn = ({ type, onClickSaveBtn, state, onChangeState }) => {
  return (
    <div className="detail_under_menu ">
      <div className="card">
        <div className="list-group-item">
          <div
            role="group"
            aria-labelledby="label-question"
            className="m-0 form-group"
          >
            <div className="form-row align-items-center">
              <label className="col-md-1 col-form-label form-label">상태</label>
              <div className="col-md-8">
                <select
                  id="custom-select"
                  className="form-control custom-select"
                  defaultValue={state}
                  key={state}
                  onChange={(e) => onChangeState(e.target.value)}
                >
                  <option value="TEMP_SAVE">임시저장</option>
                  <option value="POST">게시</option>
                </select>
              </div>
              <div className="flex"></div>
              {type === "detail" && (
                <div className="col-auto d-flex flex-column">
                  <button type="button" className="btn btn-outline-secondary">
                    삭제
                  </button>
                </div>
              )}

              <div className="col-auto d-flex flex-column">
                <button type="button" className="btn btn-secondary">
                  취소
                </button>
              </div>
              <div className="col-auto d-flex flex-column">
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => onClickSaveBtn()}
                >
                  확인
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomSaveBtn;
