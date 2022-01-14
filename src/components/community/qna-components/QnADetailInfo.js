import React from "react";

const QnADetailInfo = ({ qnaInfo }) => {
  return (
    <div class="page-section">
      <div className="row">
        <div className="col-lg-12">
          <div className="list-group">
            <div className="list-group-item">
              <div className="form-group row mb-0 ml-0">
                <h3 className="ol-sm-12">{qnaInfo.title}</h3>
              </div>
            </div>
            <div className="list-group-item">
              <div className="form-group row mb-0">
                <label className="col-form-label col-sm-2">사용자</label>
                <div className="col-sm-10 d-flex align-items-center">
                  <div className="flex">{qnaInfo.nickName}</div>
                </div>
              </div>
            </div>
            <div className="list-group-item">
              <div className="form-group row mb-0">
                <label className="col-form-label col-sm-2">글번호</label>
                <div className="col-sm-10 d-flex align-items-center">
                  <div className="flex">{qnaInfo.idx}</div>
                </div>
              </div>
            </div>
            <div className="list-group-item">
              <div className="form-group row mb-0">
                <label className="col-form-label col-sm-2">조회수</label>
                <div className="col-sm-10 d-flex align-items-center">
                  <div className="flex">{qnaInfo.viewCount}</div>
                </div>
              </div>
            </div>
            <div className="list-group-item">
              <div className="form-group row mb-0">
                <label className="col-form-label col-sm-2">작성일</label>
                <div className="col-sm-10 d-flex align-items-center">
                  <div className="flex">{qnaInfo.createDate}</div>
                </div>
              </div>
            </div>
            <div className="list-group-item">
              <div className="form-group row mb-0">
                <label className="col-form-label col-sm-2">공개여부</label>
                <div className="col-sm-10 d-flex align-items-center">
                  <div className="flex">
                    {
                      {
                        O: "공개",
                        C: "비공개",
                      }[qnaInfo.openStatus]
                    }
                  </div>
                </div>
              </div>
            </div>
            <div className="list-group-item">
              <div className="form-group row mb-0">
                <label className="col-form-label col-sm-2">상세</label>
                <div className="col-sm-10 d-flex align-items-center">
                  <div className="flex">{qnaInfo.content}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QnADetailInfo;
