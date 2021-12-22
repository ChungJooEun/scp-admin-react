import React from "react";

const ActivityDetailInfo = () => {
  return (
    <div className="row">
      <div className="col-sm-6 col-md-4 card-group-row__col">
        <div className="card-img-top">
          <img
            src="../assets/images/stories/256_rsz_thomas-russell-751613-unsplash.jpg"
            className="card-img-top card-img-cover"
            alt=""
          />
        </div>
      </div>

      <div className="col-lg-8">
        <div className="list-group">
          <div className="list-group-item">
            <div className="form-group row mb-0 ml-0">
              <h3 className="ol-sm-12">제목입니다.</h3>
            </div>
          </div>
          <div className="list-group-item">
            <div className="form-group row mb-0">
              <label className="col-form-label col-sm-2">카테고리</label>
              <div className="col-sm-10 d-flex align-items-center">
                <div className="flex">카테고리</div>
              </div>
            </div>
          </div>
          <div className="list-group-item">
            <div className="form-group row mb-0">
              <label className="col-form-label col-sm-2">대상</label>
              <div className="col-sm-10 d-flex align-items-center">
                <div className="flex">대상</div>
              </div>
            </div>
          </div>
          <div className="list-group-item">
            <div className="form-group row mb-0">
              <label className="col-form-label col-sm-2">활동 장소</label>
              <div className="col-sm-10 d-flex align-items-center">
                <div className="flex">활동 장소입니다.</div>
              </div>
            </div>
          </div>
          <div className="list-group-item">
            <div className="form-group row mb-0">
              <label className="col-form-label col-sm-2">필요인원</label>
              <div className="col-sm-10 d-flex align-items-center">
                <div className="flex">12명</div>
              </div>
            </div>
          </div>
          <div className="list-group-item">
            <div className="form-group row mb-0">
              <label className="col-form-label col-sm-2">총 활동 시간</label>
              <div className="col-sm-10 d-flex align-items-center">
                <div className="flex">12시간</div>
              </div>
            </div>
          </div>
          <div className="list-group-item">
            <div className="form-group row mb-0">
              <label className="col-form-label col-sm-2">활동 일시</label>
              <div className="col-sm-10 d-flex align-items-center">
                <div className="flex">2020.01.01 오전 10시 30분</div>
              </div>
            </div>
          </div>
          <div className="list-group-item">
            <div className="form-group row mb-0">
              <label className="col-form-label col-sm-2">모집 대상</label>
              <div className="col-sm-10 d-flex align-items-center">
                <div className="flex">일반사용자, 활동기관</div>
              </div>
            </div>
          </div>
          <div className="list-group-item">
            <div className="form-group row mb-0">
              <label className="col-form-label col-sm-2">상세 내용</label>
              <div className="col-sm-10 d-flex align-items-center">
                <div className="flex">상세내용</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivityDetailInfo;
