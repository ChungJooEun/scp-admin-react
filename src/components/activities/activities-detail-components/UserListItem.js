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
              W: "신청",
              D: "신청완료",
              R: "기각",
              Y: "침여",
              N: "불참",
            }[userInfo.state]
          }
        </small>
      </td>
    </tr>
  );
};

export default UserListItem;
