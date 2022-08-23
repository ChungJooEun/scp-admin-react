import React from "react";

import { Link } from "react-router-dom";
import { convertDateFormat } from "../../../util/date-convert-function";

const AllUserListItem = ({ userInfo, no }) => {
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
          {/* {userInfo.state === "O" ? "기관명" : "일반 사용자"} */}
          {userInfo.orgTitle}
        </small>
      </td>
    </tr>
  );
};

export default AllUserListItem;
