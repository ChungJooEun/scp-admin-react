import React from "react";

import AgencyRequestListItem from "./AgencyRequestListItem";

const style = { width: "48px" };

const AgencyRequestList = ({ list, pageNumber, count }) => {
  let no = (pageNumber - 1) * count + 1;

  return (
    <div
      className="table-responsive"
      data-toggle="lists"
      data-lists-sort-by="js-lists-values-date"
      data-lists-sort-desc="false"
      data-lists-values='["js-lists-values-name", "js-lists-values-date"]'
    >
      <table className="table mb-0 thead-border-top-0 table-nowrap text-align-left">
        <thead>
          <tr>
            <th style={style}>
              <span className="sort">No.</span>
            </th>
            <th style={style}>
              <span className="sort">기관명</span>
            </th>
            <th style={style}>
              <span className="sort">기관주소</span>
            </th>
            <th style={style}>
              <span className="sort">연락처</span>
            </th>
            <th style={style}>
              <span className="sort">등록일</span>
            </th>
            <th style={style}>
              <span className="sort">상태</span>
            </th>
          </tr>
        </thead>
        <tbody className="list" id="tasks2">
          {list.map((orgInfo) => (
            <AgencyRequestListItem orgInfo={orgInfo} no={no++} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AgencyRequestList;
