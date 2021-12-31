import React from "react";

import AgencyListItem from "./AgencyListItem";

const style = { width: "48px" };

const AgencyList = ({ list, pageNumber, count }) => {
  // let no = (pageNumber - 1) * count + 1;
  let no = pageNumber * count;

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
              <span className="sort">최대 인원수</span>
            </th>
            <th style={style}>
              <span className="sort">등록된 활동수</span>
            </th>
            <th style={style}>
              <span className="sort">활동일</span>
            </th>
            <th style={style}>
              <span className="sort">최근 활동일</span>
            </th>
            <th style={style}>
              <span className="sort">상태</span>
            </th>
          </tr>
        </thead>
        <tbody className="list" id="tasks2">
          {list.map((agencyInfo) => (
            <AgencyListItem
              agencyInfo={agencyInfo}
              no={no--}
              key={agencyInfo.id}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AgencyList;
