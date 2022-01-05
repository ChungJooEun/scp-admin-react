import React from "react";

const UserDetailInfo = ({ userInfo }) => {
  return (
    <div className="row">
      <div className="col-lg-4">
        <a href="" className="avatar width-15rem">
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/people/110/guy-1.jpg`}
            alt="avatar"
            className="avatar-img rounded-circle"
          />
        </a>
      </div>

      <div className="col-lg-8">
        <div className="list-group">
          <div className="list-group-item">
            <div className="form-group row mb-0">
              <label className="col-form-label col-sm-2">이름</label>
              <div className="col-sm-10 d-flex align-items-center">
                <div className="flex">{userInfo.name}</div>
              </div>
            </div>
          </div>
          <div className="list-group-item">
            <div className="form-group row mb-0">
              <label className="col-form-label col-sm-2">닉네임</label>
              <div className="col-sm-10 d-flex align-items-center">
                <div className="flex">{userInfo.nickName}</div>
              </div>
            </div>
          </div>
          <div className="list-group-item">
            <div className="form-group row mb-0">
              {/* <label className="col-form-label col-sm-2">아이디</label>
              <div className="col-sm-10 d-flex align-items-center">
                <div className="flex">아이디</div>
              </div> */}
              <label className="col-form-label col-sm-2">이메일</label>
              <div className="col-sm-10 d-flex align-items-center">
                <div className="flex">{userInfo.email}</div>
              </div>
            </div>
          </div>
          <div className="list-group-item">
            <div className="form-group row mb-0">
              <label className="col-form-label col-sm-2">출생년월일</label>
              <div className="col-sm-10 d-flex align-items-center">
                <div className="flex">{userInfo.birth}</div>
              </div>
            </div>
          </div>
          <div className="list-group-item">
            <div className="form-group row mb-0">
              <label className="col-form-label col-sm-2">성별</label>
              <div className="col-sm-10 d-flex align-items-center">
                <div className="flex">
                  {userInfo.gender === "M" ? "남" : "여"}
                </div>
              </div>
            </div>
          </div>
          <div className="list-group-item">
            <div className="form-group row mb-0">
              <label className="col-form-label col-sm-2">소속</label>
              <div className="col-sm-10 d-flex align-items-center">
                <div className="flex">
                  {userInfo.state === "O" ? "기관명" : "일반 사용자"}
                </div>
              </div>
            </div>
          </div>
          <div className="list-group-item">
            <div className="form-group row mb-0">
              <label className="col-form-label col-sm-2">총 활동시간</label>
              <div className="col-sm-10 d-flex align-items-center">
                <div className="flex">12시간</div>
              </div>
            </div>
          </div>
          <div className="list-group-item">
            <div className="form-group row mb-0">
              <label className="col-form-label col-sm-2">연락처</label>
              <div className="col-sm-10 d-flex align-items-center">
                <div className="flex">{userInfo.phone}</div>
              </div>
            </div>
          </div>
          <div className="list-group-item">
            <div className="form-group row mb-0">
              <label className="col-form-label col-sm-2">주소</label>
              <div className="col-sm-10 d-flex align-items-center">
                <div className="flex">{userInfo.address}</div>
              </div>
            </div>
          </div>
          <div className="card-footer">
            <button className="btn btn-warning" type="button">
              계정 정지하기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetailInfo;
