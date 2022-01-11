import React from "react";
import { Link } from "react-router-dom";

const convertDateFormat = (dateString) => {
  let dateAry = dateString.split(" ");

  let result = dateAry[0].replace(/-/gi, ".");

  // let time = dateAry[1].split(":");
  // result += ` ${time[0]}시${time[1]}분${time[2]}초`;
  result += ` ${dateAry[1]}`;

  return result;
};

const ReportedUserListItem = ({ userInfo, no, onChangeUserState }) => {
  return (
    <tr>
      <td>
        <div className="d-flex align-items-center text-align-center">
          <span>{no}</span>
        </div>
      </td>
      <td>
        <div className="d-flex align-items-center">
          <Link to={`/user/user-detail/${userInfo.idx}`} className="mr-4pt">
            <strong>{userInfo.nickName}</strong>
          </Link>
        </div>
      </td>
      <td>
        <div className="d-flex align-items-center">
          <span>{userInfo.email}</span>
        </div>
      </td>
      <td>
        <div className="d-flex align-items-center">
          <span>{convertDateFormat(userInfo.createDate)}</span>
        </div>
      </td>
      <td>
        <div className="d-flex align-items-center">
          <span>{userInfo.recentActivityDate}</span>
        </div>
      </td>
      <td>
        <small className="text-50">
          {userInfo.state === "O" ? "기관명" : "일반 사용자"}
        </small>
      </td>
      <td>
        <small className="text-50">{userInfo.reportedReason}</small>
      </td>
      <td>
        <select
          id="filter_category"
          className="custom-select"
          style={{ width: "auto" }}
          defaultValue={userInfo.userState}
          key={userInfo.userState}
          onChange={(e) => onChangeUserState(e.target.value, userInfo.idx)}
        >
          <option value="R">처리 대기 중</option>
          <option value="S">정지된 사용자</option>
          <option value="N">해당 없음</option>
        </select>
      </td>
    </tr>
  );
};

export default ReportedUserListItem;
