import React from "react";

import ActivityListItem from "./ActivityListItem";

const ActivityList = () => {
  return (
    <div
      className="table-responsive"
      data-toggle="lists"
      data-lists-sort-by="js-lists-values-date"
      data-lists-sort-desc="false"
      data-lists-values='["js-lists-values-name", "js-lists-values-date"]'
    >
      <table className="table mb-0 thead-border-top-0 table-nowrap">
        <thead>
          <tr>
            <th style={{ width: "48px" }}>
              <a className="sort">No.</a>
            </th>
            <th style={{ width: "48px" }}>
              <a className="sort">활동번호</a>
            </th>
            <th style={{ width: "48px" }}>
              <a className="sort">활동명</a>
            </th>
            <th style={{ width: "48px" }}>
              <a className="sort">기관/단체명</a>
            </th>
            <th style={{ width: "48px" }}>
              <a className="sort">카테고리</a>
            </th>
            <th style={{ width: "48px" }}>
              <a className="sort">모집분야</a>
            </th>
            <th style={{ width: "48px" }}>
              <a className="sort">모집대상</a>
            </th>
            <th style={{ width: "48px" }}>
              <a className="sort">활동장소</a>
            </th>
            <th style={{ width: "48px" }}>
              <a className="sort">필요인원</a>
            </th>
            <th style={{ width: "48px" }}>
              <a className="sort">총 활동시간</a>
            </th>
            <th style={{ width: "48px" }}>
              <a className="sort">상태</a>
            </th>
          </tr>
        </thead>
        <tbody className="list" id="tasks2">
          <ActivityListItem />
          <ActivityListItem />
          <ActivityListItem />
          <ActivityListItem />
          <ActivityListItem />
          <ActivityListItem />
          <ActivityListItem />
          <ActivityListItem />
          <ActivityListItem />
          <ActivityListItem />
        </tbody>
      </table>
    </div>
  );
};

export default ActivityList;
