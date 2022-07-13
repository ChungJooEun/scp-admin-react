import React from "react";

const AgencyDetailInfo = ({
  orgInfo,
  hideFile,
  editCoinStatus,
  centerList,
  editScCoinCenterInfo,
  onClickApproveAccumCoin,
}) => {
  return (
    <div className="row">
      <div className="col-lg-4">
        <span className="avatar width-15rem">
          <img
            src={orgInfo.img}
            alt="avatar"
            className="avatar-img rounded-circle"
          />
        </span>
      </div>

      <div className="col-lg-8">
        <div className="list-group">
          <div className="list-group-item">
            <div className="form-group row mb-0 ml-0">
              <h3 className="ol-sm-12">{orgInfo.name}</h3>
            </div>
          </div>
          {hideFile ? (
            ""
          ) : (
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
                    첨부파일
                  </label>
                  <div className="col-md-10">
                    <a
                      href={orgInfo.fileUrl}
                      className="d-flex align-items-center border-1 rounded mb-0 p-8pt"
                    >
                      <span
                        className="mr-8pt p-8pt bg-secondary rounded"
                        style={{ width: "40px", height: "40px" }}
                      >
                        <i className="material-icons icon-24pt text-white">
                          file_download
                        </i>
                      </span>
                      <span className="flex d-flex flex-column">
                        <span className="text-100">{orgInfo.fileName}</span>
                        <span className="text-50 lh-1">
                          {(orgInfo.fileSize / 1024 / 1024).toFixed(2)} Mb
                        </span>
                      </span>
                      <span className="text-70 text-underline mr-8pt">
                        다운로드
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}
          <div className="list-group-item">
            <div className="form-group row mb-0">
              <label className="col-form-label col-sm-2">주소</label>
              <div className="col-sm-10 d-flex align-items-center">
                <div className="flex">{orgInfo.address}</div>
              </div>
            </div>
          </div>
          <div className="list-group-item">
            <div className="form-group row mb-0">
              <label className="col-form-label col-sm-2">연락처</label>
              <div className="col-sm-10 d-flex align-items-center">
                <div className="flex">{orgInfo.contactInfo}</div>
              </div>
            </div>
          </div>
          <div className="list-group-item">
            <div className="form-group row mb-0">
              <label className="col-form-label col-sm-2">이메일</label>
              <div className="col-sm-10 d-flex align-items-center">
                <div className="flex">{orgInfo.email}</div>
              </div>
            </div>
          </div>
          <div className="list-group-item">
            <div className="form-group row mb-0">
              <label className="col-form-label col-sm-2">기관타입</label>
              <div className="col-sm-10 d-flex align-items-center">
                <div className="flex">
                  {
                    {
                      C: "수요 기관",
                      A: "활동 기관",
                      CA: "수요/활동 기관",
                    }[orgInfo.type]
                  }
                </div>
              </div>
            </div>
          </div>
          <div className="list-group-item">
            <div className="form-group row mb-0">
              <label className="col-form-label col-sm-2">카테고리</label>
              <div className="col-sm-10 d-flex align-items-center">
                <div className="flex">{orgInfo.category}</div>
              </div>
            </div>
          </div>
          <div className="list-group-item">
            <div className="form-group row mb-0">
              <label className="col-form-label col-sm-2">코인 적립 여부</label>
              <div className="col-sm-10 d-flex align-items-center">
                <div className="flex">
                  <select
                    id="filter_category"
                    className="custom-select"
                    defaultValue={orgInfo.coinStatus}
                    key={orgInfo.coinStatus}
                    onChange={(e) => editCoinStatus(e.target.value)}
                  >
                    <option value="Y">적립</option>
                    <option value="N">해당 없음</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          {orgInfo.coinStatus === "Y" && (
            <div className="list-group-item">
              <div className="form-group row mb-0">
                <label className="col-form-label col-sm-2">서초코인 센터</label>
                <div className="col-sm-7 d-flex align-items-center">
                  <div className="flex">
                    <select
                      id="filter_category"
                      className="custom-select"
                      defaultValue={orgInfo.scCoinCenterId}
                      key={orgInfo.scCoinCenterId}
                      onChange={(e) => editScCoinCenterInfo(e.target.value)}
                    >
                      <option value="default" key="default" selected={false}>
                        서초 코인 센터 선택
                      </option>
                      {centerList &&
                        centerList.map((info) => (
                          <option value={info.centerId} key={info.centerId}>
                            {info.centerName}
                          </option>
                        ))}
                    </select>
                  </div>
                </div>
                <div className="col-sm-3 d-flex align-items-center">
                  <div className="flex">
                    <button
                      onClick={onClickApproveAccumCoin}
                      type="button"
                      className="btn btn-accent"
                    >
                      코인 적립 승인
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
          <div className="list-group-item">
            <div className="form-group row mb-0">
              <div className="col-sm-12 d-flex align-items-center">
                <div className="flex">{orgInfo.introduction}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgencyDetailInfo;
