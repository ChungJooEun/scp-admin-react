import React from "react";

import OnlineConsultationListItem from "./OnlineConsultationListItem";

const style = { width: "48px" };
const OnlineConsultationList = ({
  list,
  userName,
  pageNumber,
  count,
  expertName,
  dateString,
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
            <th style={style}>
              <span className="sort">No.</span>
            </th>
            <th style={style}>
              <span className="sort">제목</span>
            </th>
            <th style={style}>
              <span className="sort">상담분야</span>
            </th>
            <th style={style}>
              <span className="sort">성명</span>
            </th>

            <th style={style}>
              <span className="sort">일정</span>
            </th>
            <th style={style}>
              <span className="sort">전문가</span>
            </th>
            <th style={style}>
              <span className="sort">답변상태</span>
            </th>
            <th style={style}>
              <span className="sort">공개여부</span>
            </th>
          </tr>
        </thead>
        <tbody className="list" id="tasks2">
          {list.map((consultationInfo) => (
            <OnlineConsultationListItem
              consultationInfo={consultationInfo}
              no={no++}
              userName={userName}
              expertName={expertName}
              dateString={dateString}
              key={consultationInfo.idx}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OnlineConsultationList;
