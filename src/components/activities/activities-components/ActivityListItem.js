import React from "react";
import { Link } from "react-router-dom";

const ActivityListItem = () => {
  return (
    <tr>
      <td>
        <div className="d-flex align-items-center text-align-center">
          <span>10</span>
        </div>
      </td>
      <td>
        <div className="d-flex align-items-center">
          <span>00000</span>
        </div>
      </td>
      <td>
        <div className="d-flex align-items-center">
          <strong className="flex js-lists-values-name">
            <Link to="/activities/activities-detail" className="mr-4pt">
              제목입니다
            </Link>
          </strong>
        </div>
      </td>
      <td>
        <div className="d-flex align-items-center">
          <span>기관 단체명입니다.</span>
        </div>
      </td>
      <td>
        <div className="d-flex align-items-center">
          <span>카테고리</span>
        </div>
      </td>
      <td>
        <div className="d-flex align-items-center">
          <span>수요자/활동자</span>
        </div>
      </td>
      <td>
        <div className="d-flex align-items-center">
          <span>기관/일반 사용자</span>
        </div>
      </td>
      <td>
        <div className="d-flex align-items-center">
          <span>활동 장소</span>
        </div>
      </td>
      <td>
        <div className="d-flex align-items-center">
          <span>10</span>
        </div>
      </td>
      <td>
        <div className="d-flex align-items-center">
          <span>1시간</span>
        </div>
      </td>
      <td>
        <small className="text-50">공개</small>
      </td>
    </tr>
  );
};

export default ActivityListItem;
