import React from "react";

import QnABoardListItem from "./QnABoardListItem";

const QnABoardList = () => {
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
                  data-target="#staff"
                  id="customCheckAllstaff"
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
              <a
                href="javascript:void(0)"
                className="sort"
                data-sort="js-lists-values-cultural-seocho-festival-name"
              >
                제목
              </a>
            </th>
            <th style={{ width: "64px" }}>
              <a
                href="javascript:void(0)"
                className="sort"
                data-sort="js-lists-values-last-update-date"
              >
                사용자
              </a>
            </th>
            <th style={{ width: "64px" }}>
              <a
                href="javascript:void(0)"
                className="sort"
                data-sort="js-lists-values-public"
              >
                조회수
              </a>
            </th>
            <th style={{ width: "64px" }}>
              <a
                href="javascript:void(0)"
                className="sort"
                data-sort="js-lists-values-public"
              >
                등록일
              </a>
            </th>
            <th style={{ width: "64px" }}>
              <a
                href="javascript:void(0)"
                className="sort"
                data-sort="js-lists-values-public"
              >
                답변상태
              </a>
            </th>
          </tr>
        </thead>
        <tbody className="list" id="staff">
          <QnABoardListItem />
          <QnABoardListItem />
          <QnABoardListItem />
          <QnABoardListItem />
          <QnABoardListItem />
        </tbody>
      </table>
    </div>
  );
};

export default QnABoardList;
