import React from "react";

const PhoneCounselingInfo = () => {
  return (
    <div className="row">
      <div className="col-lg-12">
        <div className="list-group">
          <div className="list-group-item">
            <div className="form-group row mb-0 ml-0">
              <h3 className="ol-sm-12">활동 제목입니다.</h3>
            </div>
          </div>
          <div className="list-group-item">
            <div className="form-group row mb-0">
              <label className="col-form-label col-sm-2">신청인 성명</label>
              <div className="col-sm-10 d-flex align-items-center">
                <div className="flex">성명</div>
              </div>
            </div>
          </div>
          <div className="list-group-item">
            <div className="form-group row mb-0">
              <label className="col-form-label col-sm-2">활동 번호</label>
              <div className="col-sm-10 d-flex align-items-center">
                <div className="flex">0000</div>
              </div>
            </div>
          </div>
          <div className="list-group-item">
            <div className="form-group row mb-0">
              <label className="col-form-label col-sm-2">주소</label>
              <div className="col-sm-10 d-flex align-items-center">
                <div className="flex">주소</div>
              </div>
            </div>
          </div>
          <div className="list-group-item">
            <div className="form-group row mb-0">
              <label className="col-form-label col-sm-2">접수일자</label>
              <div className="col-sm-10 d-flex align-items-center">
                <div className="flex">2021.01.01</div>
              </div>
            </div>
          </div>
          <div className="list-group-item">
            <div className="form-group row mb-0">
              <label className="col-form-label col-sm-2">연락처</label>
              <div className="col-sm-10 d-flex align-items-center">
                <div className="flex">2021.01.01</div>
              </div>
            </div>
          </div>
          <div className="list-group-item">
            <div className="form-group row mb-0">
              <label className="col-form-label col-sm-2">상태</label>
              <div className="col-sm-10 d-flex align-items-center">
                <div className="flex">대기 중/답변 완료</div>
              </div>
            </div>
          </div>
          <div className="list-group-item">
            <div className="form-group row mb-0">
              <label className="col-form-label col-sm-2">상담 분야</label>
              <div className="col-sm-10 d-flex align-items-center">
                <div className="flex">법률/세무/법무/건축/노무</div>
              </div>
            </div>
          </div>
          <div className="list-group-item">
            <div className="form-group row mb-0">
              <label className="col-form-label col-sm-2">상담 내용</label>
              <div className="col-sm-10 d-flex align-items-center">
                <div className="flex">입력사항 없음</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhoneCounselingInfo;
