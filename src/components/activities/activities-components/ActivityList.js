import React from "react";

import SearchPeriodBar from "../../common-components/search-components/SearchPeriodBar";
import ActivityListItem from "./ActivityListItem";
import Paging from "../../common-components/Paging";

const ActivityList = ({ tableTitle }) => {
  return (
    <>
      <div className="page-separator">
        <div className="page-separator__text">
          {tableTitle}(<span className="number-count">12</span>)
        </div>
      </div>

      <div className="card mb-lg-32pt">
        <div className="card-header">
          <SearchPeriodBar />
        </div>
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
        <Paging />
      </div>
    </>
  );
};

export default ActivityList;
