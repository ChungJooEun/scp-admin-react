import React from "react";

import AgencyRequestListItem from "./AgencyRequestListItem";

const style = { width: "48px", cursor: "pointer" };

const AgencyRequestList = ({ list, pageNumber, count, onChangeSortInfo }) => {
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
            <th style={{ width: "48px" }}>
              <span>No.</span>
            </th>
            <th style={style} onClick={() => onChangeSortInfo("orgTitle")}>
              <span className="sort sort_on">기관명</span>
            </th>
            <th style={style} onClick={() => onChangeSortInfo("orgAddress")}>
              <span className="sort sort_on">기관주소</span>
            </th>
            <th style={style} onClick={() => onChangeSortInfo("orgContact")}>
              <span className="sort sort_on">연락처</span>
            </th>
            <th style={style} onClick={() => onChangeSortInfo("createdAt")}>
              <span className="sort sort_on">등록일</span>
            </th>
            <th style={style} onClick={() => onChangeSortInfo("orgStatus")}>
              <span className="sort sort_on">상태</span>
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
