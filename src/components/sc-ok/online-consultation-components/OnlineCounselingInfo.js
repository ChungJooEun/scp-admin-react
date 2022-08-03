import React from "react";

const OnlineCounselingInfo = ({ conselingInfo }) => {
  return (
    <div className="row">
      <div className="col-lg-12">
        <div className="list-group">
          <div className="list-group-item">
            <div className="form-group row mb-0 ml-0">
              <h3 className="ol-sm-12">{conselingInfo.title}</h3>
            </div>
          </div>
          <div className="list-group-item">
            <div className="form-group row mb-0">
              <label className="col-form-label col-sm-2">신청인 성명</label>
              <div className="col-sm-10 d-flex align-items-center">
                <div className="flex">{conselingInfo.name}</div>
              </div>
            </div>
          </div>
          <div className="list-group-item">
            <div className="form-group row mb-0">
              <label className="col-form-label col-sm-2">주소</label>
              <div className="col-sm-10 d-flex align-items-center">
                <div className="flex">{conselingInfo.address}</div>
              </div>
            </div>
          </div>
          <div className="list-group-item">
            <div className="form-group row mb-0">
              <label className="col-form-label col-sm-2">접수일자</label>
              <div className="col-sm-10 d-flex align-items-center">
                <div className="flex">{conselingInfo.createDate}</div>
              </div>
            </div>
          </div>
          <div className="list-group-item">
            <div className="form-group row mb-0">
              <label className="col-form-label col-sm-2">연락처</label>
              <div className="col-sm-10 d-flex align-items-center">
                <div className="flex">{conselingInfo.contact}</div>
              </div>
            </div>
          </div>

          {/*

          <div className="list-group-item">
            <div className="form-group row mb-0">
              <label className="col-form-label col-sm-2">공개여부</label>
              <div className="col-sm-10 d-flex align-items-center">
                <div className="flex">{conselingInfo.state}</div>
              </div>
            </div>
          </div>
 */}

          <div className="list-group-item">
            <div className="form-group row mb-0">
              <label className="col-form-label col-sm-2">상태</label>
              <div className="col-sm-10 d-flex align-items-center">
                <div className="flex">{conselingInfo.consultationStatus}</div>
              </div>
            </div>
          </div>
          <div className="list-group-item">
            <div className="form-group row mb-0">
              <label className="col-form-label col-sm-2">상담 분야</label>
              <div className="col-sm-10 d-flex align-items-center">
                <div className="flex">{conselingInfo.area}</div>
              </div>
            </div>
          </div>
          <div className="list-group-item">
            <div className="form-group row mb-0">
              <label className="col-form-label col-sm-2">상담 내용</label>
              <div className="col-sm-10 d-flex align-items-center">
                <div
                  className="flex"
                  dangerouslySetInnerHTML={{
                    __html: conselingInfo.content,
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnlineCounselingInfo;
