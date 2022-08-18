import React from "react";

// const setTarget = (targetList) => {
//   if (targetList.length === 2) {
//     return "일반/기관 사용자";
//   }

//   if (targetList[0] === "NOMAL") {
//     return "일반 사용자";
//   } else {
//     return "기관 사용자";
//   }
// };

const ActivityDetailInfo = ({ activityInfo }) => {
  return (
    <div className="row">
      <div className="col-sm-6 col-md-4 card-group-row__col">
        <div className="card-img-top">
          <img
            src={activityInfo.img}
            className="card-img-top card-img-cover"
            alt=""
          />
        </div>
      </div>

      <div className="col-lg-8">
        <div className="list-group">
          <div className="list-group-item">
            <div className="form-group row mb-0 ml-0">
              <h3 className="ol-sm-12">{activityInfo.name}</h3>
            </div>
          </div>
          <div className="list-group-item">
            <div className="form-group row mb-0">
              <label className="col-form-label col-sm-2">카테고리</label>
              <div className="col-sm-10 d-flex align-items-center">
                <div className="flex">{activityInfo.categoryName}</div>
              </div>
            </div>
          </div>
          <div className="list-group-item">
            <div className="form-group row mb-0">
              <label className="col-form-label col-sm-2">대상</label>
              <div className="col-sm-10 d-flex align-items-center">
                <div className="flex">
                  {activityInfo.partType !== "X"
                    ? activityInfo.beneType !== "X"
                      ? "활동자/수요자"
                      : "활동자"
                    : activityInfo.beneType !== "X"
                    ? "수요자"
                    : ""}
                </div>
              </div>
            </div>
          </div>
          <div className="list-group-item">
            <div className="form-group row mb-0">
              <label className="col-form-label col-sm-2">활동 장소</label>
              <div className="col-sm-10 d-flex align-items-center">
                <div className="flex">{activityInfo.location}</div>
              </div>
            </div>
          </div>
          <div className="list-group-item">
            <div className="form-group row mb-0">
              <label className="col-form-label col-sm-2">필요인원</label>
              <div className="col-sm-10 d-flex align-items-center">
                <div className="flex">{activityInfo.numberOfPeople}명</div>
              </div>
            </div>
          </div>
          <div className="list-group-item">
            <div className="form-group row mb-0">
              <label className="col-form-label col-sm-2">총 활동 시간</label>
              <div className="col-sm-10 d-flex align-items-center">
                <div className="flex">{`${activityInfo.activityTime_hour}시간 ${activityInfo.activityTime_minute}분`}</div>
              </div>
            </div>
          </div>
          <div className="list-group-item">
            <div className="form-group row mb-0">
              <label className="col-form-label col-sm-2">활동 일시</label>
              <div className="col-sm-10 d-flex align-items-center">
                <div className="flex">{activityInfo.activityDateTime}</div>
              </div>
            </div>
          </div>
          <div className="list-group-item">
            <div className="form-group row mb-0">
              <label className="col-form-label col-sm-2">모집 대상</label>
              <div className="col-sm-10 d-flex align-items-center">
                <div className="flex">
                  {/* {
                    {
                      A: "일반/기관",
                      U: "일반",
                      O: "기관",
                      X: "없음",
                      E: "모집 안함",
                    }[
                      activityInfo.partType === "X"
                        ? activityInfo.beneType
                        : activityInfo.partType
                    ]
                  } */}
                  활동자 :{" "}
                  {
                    {
                      A: "일반/기관",
                      U: "일반",
                      O: "기관",
                      X: "없음",
                      E: "모집 안함",
                    }[activityInfo.partType]
                  }{" "}
                  / 수요자 :{" "}
                  {
                    {
                      A: "일반/기관",
                      U: "일반",
                      O: "기관",
                      X: "없음",
                      E: "모집 안함",
                    }[activityInfo.beneType]
                  }
                </div>
              </div>
            </div>
          </div>
          <div className="list-group-item">
            <div className="form-group row mb-0">
              <label className="col-form-label col-sm-2">상세 내용</label>
              <div className="col-sm-10 d-flex align-items-center">
                <div className="flex">{activityInfo.detail}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivityDetailInfo;
