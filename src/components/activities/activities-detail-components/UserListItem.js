import React from "react";
import { Link } from "react-router-dom";
import { convertDateFormat } from "../../../util/date-convert-function";

const UserListItem = ({ userInfo, no }) => {
  return (
    <tr>
      <td>
        <div className="d-flex align-items-center text-align-center">
          <span>{no}</span>
        </div>
      </td>
      <td>
        <div className="d-flex align-items-center">
          <Link to={`/user/user-detail/${userInfo.id}`} className="mr-4pt">
            <strong>{userInfo.nickName}</strong>
          </Link>
        </div>
      </td>
      <td>
        <div className="d-flex align-items-center">
          <span>{userInfo.userId}</span>
        </div>
      </td>
      {/* <td>
        <div className="d-flex align-items-center">
          <span>
            {Object.keys(userInfo).includes("createDate")
              ? convertDateFormat(userInfo.createDate)
              : userInfo.activityDate}
          </span>
        </div>
      </td> */}
      <td>
        <div className="d-flex align-items-center">
          <span>{userInfo.recentActivityDate}</span>
        </div>
      </td>
      <td>
        <small className="text-50">
          {
            {
              W: "신청",
              D: "신청완료",
              R: "기각",
              Y: "참여",
              N: "불참",
              F: "완료",
            }[userInfo.state]
          }
        </small>
      </td>
    </tr>
  );
};

export default UserListItem;
