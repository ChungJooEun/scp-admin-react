import React from "react";

const NoticeDetailInfo = () => {
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
              *제목
            </label>
            <div className="col-md-10">
              <input
                id="title"
                type="text"
                placeholder="제목을 입력하세요 ..."
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
              알림 옵션
            </label>
            <div className="col-md-10">
              <select
                id="select01"
                data-toggle="select"
                className="form-control select2-hidden-accessible"
                data-select2-id="select01"
                tabindex="-1"
                aria-hidden="true"
              >
                <option selected="" data-select2-id="2">
                  알림 없음
                </option>
                <option data-select2-id="26">
                  알림 보내기 (앱을 이용하는 모든 사용자에게 푸쉬알림 보내기)
                </option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoticeDetailInfo;
