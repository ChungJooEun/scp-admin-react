import React from "react";
import { Link } from "react-router-dom";

const setTarget = (targetList) => {
  if (targetList.length === 2) {
    return "일반/기관 사용자";
  }

  if (targetList[0] === "NOMAL") {
    return "일반 사용자";
  } else {
    return "기관 사용자";
  }
};

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
            <Link to="/activities/activities-detail" className="mr-4pt">
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
            {
              {
                CONSUMER: "수요자",
                RECRUITMENT: "활동자",
              }[activityInfo.recruitmentField]
            }
          </span>
        </div>
      </td>
      <td>
        <div className="d-flex align-items-center">
          <span>{setTarget(activityInfo.recruitmentTarget)}</span>
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
              POST: "공개",
              PRIVATE: "비공개",
            }[activityInfo.state]
          }
        </small>
      </td>
    </tr>
  );
};

export default ActivityListItem;
