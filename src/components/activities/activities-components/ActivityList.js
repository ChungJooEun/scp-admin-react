import React from "react";

import ActivityListItem from "./ActivityListItem";

const style = {
  width: "48px",
  cursor: "pointer",
};

const ActivityList = ({ list, pageNumber, count, onChangeSortInfo }) => {
  let no = (pageNumber - 1) * count + 1;
  // let no = pageNumber * count;

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
            <th style={style} onClick={() => onChangeSortInfo("idx")}>
              <span className="sort sort_on">No.</span>
            </th>
            <th style={style} onClick={() => onChangeSortInfo("activityTitle")}>
              <span className="sort sort_on">활동명</span>
            </th>
            <th style={style} onClick={() => onChangeSortInfo("orgTitle")}>
              <span className="sort sort_on">기관/단체명</span>
            </th>
            <th style={style} onClick={() => onChangeSortInfo("category")}>
              <span className="sort sort_on">카테고리</span>
            </th>
            <th style={style} onClick={() => onChangeSortInfo("beneType")}>
              <span className="sort sort_on">모집분야</span>
            </th>
            <th style={style} onClick={() => onChangeSortInfo("partType")}>
              <span className="sort sort_on">모집대상</span>
            </th>
            <th style={style} onClick={() => onChangeSortInfo("address")}>
              <span className="sort sort_on">활동장소</span>
            </th>
            <th style={style} onClick={() => onChangeSortInfo("recruitNum")}>
              <span className="sort sort_on">필요인원</span>
            </th>
            <th style={style} onClick={() => onChangeSortInfo("totalTime")}>
              <span className="sort sort_on">총 활동시간</span>
            </th>
            <th style={style} onClick={() => onChangeSortInfo("isPrivate")}>
              <span className="sort sort_on">상태</span>
            </th>
          </tr>
        </thead>
        <tbody className="list" id="tasks2">
          {list.map((activityInfo) => (
            <ActivityListItem
              activityInfo={activityInfo}
              no={no++}
              key={activityInfo.id}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ActivityList;
