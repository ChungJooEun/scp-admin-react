import React from "react";

import ActivityListItem from "./ActivityListItem";

const style = {
  width: "48px",
};

const ActivityList = ({ list, pageNumber, count }) => {
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
      <table className="table mb-0 thead-border-top-0 table-nowrap">
        <thead>
          <tr>
            <th style={style}>
              <span className="sort">No.</span>
            </th>
            <th style={style}>
              <span className="sort">활동번호</span>
            </th>
            <th style={style}>
              <span className="sort">활동명</span>
            </th>
            <th style={style}>
              <span className="sort">기관/단체명</span>
            </th>
            <th style={style}>
              <span className="sort">카테고리</span>
            </th>
            <th style={style}>
              <span className="sort">모집분야</span>
            </th>
            <th style={style}>
              <span className="sort">모집대상</span>
            </th>
            <th style={style}>
              <span className="sort">활동장소</span>
            </th>
            <th style={style}>
              <span className="sort">필요인원</span>
            </th>
            <th style={style}>
              <span className="sort">총 활동시간</span>
            </th>
            <th style={style}>
              <span className="sort">상태</span>
            </th>
          </tr>
        </thead>
        <tbody className="list" id="tasks2">
          {list.map((activityInfo) => (
            <ActivityListItem activityInfo={activityInfo} no={no--} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ActivityList;
