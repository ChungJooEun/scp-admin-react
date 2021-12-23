import React from "react";

const QnADetailInfo = () => {
  return (
    <div class="page-section">
      <div className="row">
        <div className="col-lg-12">
          <div className="list-group">
            <div className="list-group-item">
              <div className="form-group row mb-0 ml-0">
                <h3 className="ol-sm-12">제목입니다.</h3>
              </div>
            </div>
            <div className="list-group-item">
              <div className="form-group row mb-0">
                <label className="col-form-label col-sm-2">사용자</label>
                <div className="col-sm-10 d-flex align-items-center">
                  <div className="flex">닉네임</div>
                </div>
              </div>
            </div>
            <div className="list-group-item">
              <div className="form-group row mb-0">
                <label className="col-form-label col-sm-2">글번호</label>
                <div className="col-sm-10 d-flex align-items-center">
                  <div className="flex">123</div>
                </div>
              </div>
            </div>
            <div className="list-group-item">
              <div className="form-group row mb-0">
                <label className="col-form-label col-sm-2">조회수</label>
                <div className="col-sm-10 d-flex align-items-center">
                  <div className="flex">123</div>
                </div>
              </div>
            </div>
            <div className="list-group-item">
              <div className="form-group row mb-0">
                <label className="col-form-label col-sm-2">작성일</label>
                <div className="col-sm-10 d-flex align-items-center">
                  <div className="flex">2021년 1월 1일</div>
                </div>
              </div>
            </div>
            <div className="list-group-item">
              <div className="form-group row mb-0">
                <label className="col-form-label col-sm-2">공개여부</label>
                <div className="col-sm-10 d-flex align-items-center">
                  <div className="flex">공개</div>
                </div>
              </div>
            </div>
            <div className="list-group-item">
              <div className="form-group row mb-0">
                <label className="col-form-label col-sm-2">상세</label>
                <div className="col-sm-10 d-flex align-items-center">
                  <div className="flex">상세 내용</div>
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
