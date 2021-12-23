import React from "react";

import OnlineConsultationListItem from "./OnlineConsultationListItem";

const OnlineConsultationList = () => {
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
              <a className="sort">제목</a>
            </th>
            <th style={{ width: "48px" }}>
              <a className="sort">상담분야</a>
            </th>
            <th style={{ width: "48px" }}>
              <a className="sort">성명</a>
            </th>

            <th style={{ width: "48px" }}>
              <a className="sort">일정</a>
            </th>
            <th style={{ width: "48px" }}>
              <a className="sort">전문가</a>
            </th>
            <th style={{ width: "48px" }}>
              <a className="sort">답변상태</a>
            </th>
            <th style={{ width: "48px" }}>
              <a className="sort">공개여부</a>
            </th>
          </tr>
        </thead>
        <tbody className="list" id="tasks2">
          <OnlineConsultationListItem />
          <OnlineConsultationListItem />
          <OnlineConsultationListItem />
          <OnlineConsultationListItem />
          <OnlineConsultationListItem />
          <OnlineConsultationListItem />
          <OnlineConsultationListItem />
          <OnlineConsultationListItem />
          <OnlineConsultationListItem />
          <OnlineConsultationListItem />
        </tbody>
      </table>
    </div>
  );
};

export default OnlineConsultationList;
