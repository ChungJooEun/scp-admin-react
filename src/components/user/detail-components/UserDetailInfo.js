import React from "react";

const UserDetailInfo = ({
  userInfo,
  type,
  onHandleBlockedUser,
  onHandleActiveUser,
}) => {
  const onClickBlockedUserBtn = () => {
    onHandleBlockedUser();
  };

  const onClickActivrUserBtn = () => {
    onHandleActiveUser();
  };

  return (
    <div className="row">
      <div className="col-lg-4">
        <span className="avatar width-15rem">
          <img
            src={userInfo.img}
            alt="avatar"
            className="avatar-img rounded-circle"
          />
        </span>
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
              <label className="col-form-label col-sm-2">
                {type === "EXPERT" ? "아이디" : "닉네임"}
              </label>
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
                  {userInfo.gender === "M"
                    ? "남"
                    : userInfo.gender === "F"
                    ? "여"
                    : "-"}
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
          {type === "EXPERT" && (
            <div className="list-group-item">
              <div className="form-group row mb-0">
                <label className="col-form-label col-sm-2">전문분야</label>
                <div className="col-sm-10 d-flex align-items-center">
                  <div className="flex">{userInfo.area}</div>
                </div>
              </div>
            </div>
          )}
          {type === "USER" && (
            <div className="card-footer">
              <button
                className="btn btn-warning"
                type="button"
                onClick={
                  userInfo.isDeleted === "N"
                    ? () => onClickBlockedUserBtn()
                    : () => onClickActivrUserBtn()
                }
              >
                {userInfo.isDeleted === "N"
                  ? "계정 정지하기"
                  : "계정 정지 취소하기"}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserDetailInfo;
