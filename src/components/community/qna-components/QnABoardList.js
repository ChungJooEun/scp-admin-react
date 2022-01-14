import React from "react";

import QnABoardListItem from "./QnABoardListItem";

const QnABoardList = ({ list, pageNumber, count }) => {
  let no = (pageNumber - 1) * count + 1;

  return (
    <div
      className="table-responsive"
      data-toggle="lists"
      data-lists-sort-by="js-lists-values-date"
      data-lists-sort-desc="true"
      data-lists-values='["js-lists-values-lead", "js-lists-values-project", "js-lists-values-status", "js-lists-values-budget", "js-lists-values-date"]'
    >
      <table className="table mb-0 thead-border-top-0 table-nowrap">
        <thead>
          <tr>
            <th style={{ width: "12px" }} className="pr-0">
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input js-toggle-check-all"
                />
                <label
                  className="custom-control-label"
                  for="customCheckAllstaff"
                >
                  <span className="text-hide">Toggle all</span>
                </label>
              </div>
            </th>
            <th style={{ width: "12px" }}>no.</th>
            <th style={{ width: "150px" }}>
              <span
                className="sort"
                data-sort="js-lists-values-cultural-seocho-festival-name"
              >
                제목
              </span>
            </th>
            <th style={{ width: "64px" }}>
              <span className="sort">사용자</span>
            </th>
            <th style={{ width: "64px" }}>
              <span className="sort">조회수</span>
            </th>
            <th style={{ width: "64px" }}>
              <span className="sort">등록일</span>
            </th>
            <th style={{ width: "64px" }}>
              <span className="sort">답변상태</span>
            </th>
          </tr>
        </thead>
        <tbody className="list" id="staff">
          {list.map((qnaInfo) => (
            <QnABoardListItem qnaInfo={qnaInfo} no={no++} key={qnaInfo.idx} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default QnABoardList;
