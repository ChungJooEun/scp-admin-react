import React from "react";
import { Link } from "react-router-dom";

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
          <Link to="/user/user-detail" className="mr-4pt">
            <strong>{userInfo.nickName}</strong>
          </Link>
        </div>
      </td>
      <td>
        <div className="d-flex align-items-center">
          <span>{userInfo.userId}</span>
        </div>
      </td>
      <td>
        <div className="d-flex align-items-center">
          <span>{userInfo.activityDate}</span>
        </div>
      </td>
      <td>
        <div className="d-flex align-items-center">
          <span>{userInfo.recentActivityDate}</span>
        </div>
      </td>
      <td>
        <small className="text-50">
          {
            {
              WAITING: "대기중",
              REJECT: "기각",
              CONFIRMATION: "확정",
            }[userInfo.state]
          }
        </small>
      </td>
    </tr>
  );
};

export default UserListItem;
