import React from "react";

const CounselingAnswer = () => {
  return (
    <div className="row">
      <div className="col-lg-12">
        <div className="list-group">
          <div className="list-group-item">
            <div className="form-group row mb-0">
              <label className="col-form-label col-sm-2">전문가</label>
              <div className="col-sm-10 d-flex align-items-center">
                <div className="flex">성명</div>
              </div>
            </div>
          </div>
          <div className="list-group-item">
            <div className="form-group row mb-0">
              <label className="col-form-label col-sm-2">상담일자</label>
              <div className="col-sm-10 d-flex align-items-center">
                <div className="flex">2021.01.01</div>
              </div>
            </div>
          </div>
          <div className="list-group-item">
            <div className="form-group row mb-0">
              <label className="col-form-label col-sm-2">상담시간</label>
              <div className="col-sm-10 d-flex align-items-center">
                <div className="flex">오전 10시 20분</div>
              </div>
            </div>
          </div>
          <div className="list-group-item">
            <div className="form-group row mb-0">
              <label className="col-form-label col-sm-2">답변 내용</label>
              <div className="col-sm-10 d-flex align-items-center">
                <div className="flex">답변없음</div>
              </div>
            </div>
          </div>
        </div>
        <button className="btn btn-primary ml-16pt" type="submit">
          상담 기록부 PDF 다운로드
        </button>
      </div>
    </div>
  );
};

export default CounselingAnswer;
