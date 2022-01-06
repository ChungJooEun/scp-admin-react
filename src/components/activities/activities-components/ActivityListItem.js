import React from "react";
import { Link } from "react-router-dom";

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

const ActivityListItem = ({ activityInfo, no }) => {
  return (
    <tr>
      <td>
        <div className="d-flex align-items-center text-align-center">
          <span>{no}</span>
        </div>
      </td>
      <td>
        <div className="d-flex align-items-center">
          <span>{activityInfo.activityNumber}</span>
        </div>
      </td>
      <td>
        <div className="d-flex align-items-center">
          <strong className="flex js-lists-values-name">
            <Link
              to={`/activities/activities-detail/${activityInfo.id}`}
              className="mr-4pt"
            >
              {activityInfo.name}
            </Link>
          </strong>
        </div>
      </td>
      <td>
        <div className="d-flex align-items-center">
          <span>{activityInfo.organization}</span>
        </div>
      </td>
      <td>
        <div className="d-flex align-items-center">
          <span>{activityInfo.categoryName}</span>
        </div>
      </td>
      <td>
        <div className="d-flex align-items-center">
          <span>
            {activityInfo.partType !== "X"
              ? activityInfo.beneType !== "X"
                ? "활동자/수요자"
                : "활동자"
              : activityInfo.beneType !== "X"
              ? "수요자"
              : ""}
          </span>
        </div>
      </td>
      <td>
        <div className="d-flex align-items-center">
          <span>
            {
              {
                A: "일반/기관",
                U: "일반",
                O: "기관",
                X: "없음",
              }[
                activityInfo.partType === "X"
                  ? activityInfo.beneType
                  : activityInfo.partType
              ]
            }
          </span>
        </div>
      </td>
      <td>
        <div className="d-flex align-items-center">
          <span>{activityInfo.location}</span>
        </div>
      </td>
      <td>
        <div className="d-flex align-items-center">
          <span>{activityInfo.numberOfPeople}</span>
        </div>
      </td>
      <td>
        <div className="d-flex align-items-center">
          <span>{activityInfo.activityTime}시간</span>
        </div>
      </td>
      <td>
        <small className="text-50">
          {
            {
              O: "공개",
              P: "비공개",
            }[activityInfo.state]
          }
        </small>
      </td>
    </tr>
  );
};

export default ActivityListItem;
