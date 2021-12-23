import React from "react";

const ExpertListItem = () => {
  return (
    <tr>
      <td>
        <div className="d-flex align-items-center text-align-center">
          <span>10</span>
        </div>
      </td>
      <td>
        <div className="d-flex align-items-center">
          <a href="../sc-ok/pro-detail.html" className="mr-4pt">
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
          <select
            id="filter_category"
            className="custom-select"
            style={{ width: "auto" }}
          >
            <option value="all">법률</option>
            <option value="all">법무</option>
            <option value="all">세무</option>
            <option value="all">건축</option>
            <option value="all">노무</option>
          </select>
        </div>
      </td>
      <td>
        <div className="d-flex align-items-center">
          <span>2021.01.01</span>
        </div>
      </td>
      <td>
        <div className="d-flex align-items-center">
          <span>2021.01.01</span>
        </div>
      </td>
    </tr>
  );
};

export default ExpertListItem;