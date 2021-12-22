import React from "react";

const UserListItem = () => {
  return (
    <tr>
      <td>
        <div className="d-flex align-items-center text-align-center">
          <span>10</span>
        </div>
      </td>
      <td>
        <div className="d-flex align-items-center">
          <a href="../user/user-detail.html" className="mr-4pt">
            <strong>닉네임</strong>
          </a>
        </div>
      </td>
      <td>
        <div className="d-flex align-items-center">
          <span>아이디</span>
        </div>
      </td>
      <td>
        <div className="d-flex align-items-center">
          <span>2020.01.01</span>
        </div>
      </td>
      <td>
        <div className="d-flex align-items-center">
          <span>2020.01.01 오후1시</span>
        </div>
      </td>
      <td>
        <small className="text-50">확정</small>
      </td>
    </tr>
  );
};

export default UserListItem;
