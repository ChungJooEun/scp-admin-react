import React from "react";

import AgencyListItem from "./AgencyListItem";

const AgencyList = () => {
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
            <th style={{ width: "48px" }}>
              <a className="sort">No.</a>
            </th>
            <th style={{ width: "48px" }}>
              <a className="sort">기관명</a>
            </th>
            <th style={{ width: "48px" }}>
              <a className="sort">기관주소</a>
            </th>
            <th style={{ width: "48px" }}>
              <a className="sort">연락처</a>
            </th>
            <th style={{ width: "48px" }}>
              <a className="sort">등록일</a>
            </th>
            <th style={{ width: "48px" }}>
              <a className="sort">상태</a>
            </th>
          </tr>
        </thead>
        <tbody className="list" id="tasks2">
          <AgencyListItem />
          <AgencyListItem />
          <AgencyListItem />
          <AgencyListItem />
          <AgencyListItem />
          <AgencyListItem />
          <AgencyListItem />
          <AgencyListItem />
          <AgencyListItem />
          <AgencyListItem />
        </tbody>
      </table>
    </div>
  );
};

export default AgencyList;
