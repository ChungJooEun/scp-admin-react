import React from "react";

const NoticeDetailInfo = ({ noticeInfo, onChangeNoticeInfo }) => {
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
              htmlFor="question"
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
                value={noticeInfo.title}
                name="title"
                onChange={(e) =>
                  onChangeNoticeInfo(e.target.name, e.target.value)
                }
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
              htmlFor="question"
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
                value={noticeInfo.contactName}
                name="contactName"
                onChange={(e) =>
                  onChangeNoticeInfo(e.target.name, e.target.value)
                }
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
              htmlFor="question"
              className="col-md-2 col-form-label form-label"
            >
              알림 옵션
            </label>
            <div className="col-md-10">
              <select
                id="select01"
                data-toggle="select"
                className="form-control "
                data-select2-id="select01"
                tabIndex="-1"
                aria-hidden="true"
                value={noticeInfo.alarmOption}
                name="alarmOption"
                onChange={(e) =>
                  onChangeNoticeInfo(e.target.name, e.target.value)
                }
              >
                <option value="0">알림 없음</option>
                <option value="1">
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
