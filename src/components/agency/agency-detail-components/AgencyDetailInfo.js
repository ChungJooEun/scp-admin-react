import React from "react";

const AgencyDetailInfo = () => {
  return (
    <div className="row">
      <div className="col-lg-4">
        <a href="" className="avatar width-15rem">
          <img
            src="../assets/images/people/110/guy-1.jpg"
            alt="avatar"
            className="avatar-img rounded-circle"
          />
        </a>
      </div>

      <div className="col-lg-8">
        <div className="list-group">
          <div className="list-group-item">
            <div className="form-group row mb-0 ml-0">
              <h3 className="ol-sm-12">제목입니다.</h3>
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
                  첨부파일
                </label>
                <div className="col-md-10">
                  <a
                    href=""
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
                      <span className="text-100">기관등록증.pdf</span>
                      <span className="text-50 lh-1">1.3 Mb</span>
                    </span>
                    <span className="text-70 text-underline mr-8pt">
                      다운로드
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="list-group-item">
            <div className="form-group row mb-0">
              <label className="col-form-label col-sm-2">주소</label>
              <div className="col-sm-10 d-flex align-items-center">
                <div className="flex">기관주소입니다.</div>
              </div>
            </div>
          </div>
          <div className="list-group-item">
            <div className="form-group row mb-0">
              <label className="col-form-label col-sm-2">연락처</label>
              <div className="col-sm-10 d-flex align-items-center">
                <div className="flex">000-0000-0000</div>
              </div>
            </div>
          </div>
          <div className="list-group-item">
            <div className="form-group row mb-0">
              <label className="col-form-label col-sm-2">이메일</label>
              <div className="col-sm-10 d-flex align-items-center">
                <div className="flex">email@email.com</div>
              </div>
            </div>
          </div>
          <div className="list-group-item">
            <div className="form-group row mb-0">
              <label className="col-form-label col-sm-2">기관타입</label>
              <div className="col-sm-10 d-flex align-items-center">
                <div className="flex">수요/활동기관</div>
              </div>
            </div>
          </div>
          <div className="list-group-item">
            <div className="form-group row mb-0">
              <label className="col-form-label col-sm-2">카테고리</label>
              <div className="col-sm-10 d-flex align-items-center">
                <div className="flex">카테고리1, 카테고리2, 카테고리3</div>
              </div>
            </div>
          </div>
          <div className="list-group-item">
            <div className="form-group row mb-0">
              <div className="col-sm-12 d-flex align-items-center">
                <div className="flex">기관 설명설명</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgencyDetailInfo;
