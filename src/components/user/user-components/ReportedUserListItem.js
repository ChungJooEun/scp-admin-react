import React from "react";
import { Link } from "react-router-dom";

const ReportedUserListItem = () => {
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
      <td>
        <small className="text-50">신고사유입니다.</small>
      </td>
      <td>
        <select
          id="filter_category"
          className="custom-select"
          style={{ width: "auto" }}
        >
          <option value="all">처리 대기 중</option>
          <option value="all">정지된 사용자</option>
          <option value="all">해당 없음</option>
        </select>
      </td>
    </tr>
  );
};

export default ReportedUserListItem;
