import React from "react";

import { Link } from "react-router-dom";

const AllUserListItem = () => {
  return (
    <tr>
      <td>
        <div className="d-flex align-items-center text-align-center">
          <span>10</span>
        </div>
      </td>
      <td>
        <div className="d-flex align-items-center">
          <Link to="/user/user-detail" className="mr-4pt">
            <strong>닉네임</strong>
          </Link>
        </div>
      </td>
      <td>
        <div className="d-flex align-items-center">
          <span>아이디</span>
        </div>
      </td>
      <td>
        <div className="d-flex align-items-center">
          <span>2021.01.01 오후2시</span>
        </div>
      </td>
      <td>
        <div className="d-flex align-items-center">
          <span>2021.01.01</span>
        </div>
      </td>
      <td>
        <small className="text-50">기관명/일반 사용자</small>
      </td>
    </tr>
  );
};

export default AllUserListItem;
