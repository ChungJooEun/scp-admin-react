import React from "react";

import PhoneCounselingListItem from "./PhoneCounselingListItem";

const style = { width: "48px", cursor: "pointer" };

const PhoneCounselingList = ({
  list,
  userName,
  pageNumber,
  count,
  expertName,
  onChangeSortInfo,
}) => {
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
            <th style={style} onClick={() => onChangeSortInfo("idx")}>
              <span className="sort sort_on">No.</span>
            </th>
            <th style={style} onClick={() => onChangeSortInfo("title")}>
              <span className="sort sort_on">제목</span>
            </th>
            <th style={style} onClick={() => onChangeSortInfo("area")}>
              <span className="sort sort_on">상담분야</span>
            </th>
            <th style={style} onClick={() => onChangeSortInfo("name")}>
              <span className="sort sort_on">성명</span>
            </th>

            <th
              style={style}
              onClick={() => onChangeSortInfo("consultationDate")}
            >
              <span className="sort sort_on">일정</span>
            </th>
            <th style={style} onClick={() => onChangeSortInfo("expertName")}>
              <span className="sort sort_on">전문가</span>
            </th>
            <th style={style} onClick={() => onChangeSortInfo("status")}>
              <span className="sort sort_on">답변상태</span>
            </th>
          </tr>
        </thead>
        <tbody className="list" id="tasks2">
          {list.map((consultationInfo) => (
            <PhoneCounselingListItem
              consultationInfo={consultationInfo}
              no={no++}
              userName={userName}
              expertName={expertName}
              key={consultationInfo.idx}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PhoneCounselingList;
