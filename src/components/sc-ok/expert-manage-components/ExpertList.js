import React from "react";
import ExpertListItem from "./ExpertListItem";

const style = { width: "48px" };

const ExpertList = ({ expertList, pageNumber, count }) => {
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
              <span className="sort">이름</span>
            </th>
            <th style={style}>
              <span className="sort">아이디</span>
            </th>
            <th style={style}>
              <span className="sort">전담분야</span>
            </th>
            <th style={style}>
              <span className="sort">등록일</span>
            </th>
            <th style={style}>
              <span className="sort">최근 활동일</span>
            </th>
          </tr>
        </thead>
        <tbody className="list" id="tasks2">
          {expertList.map((expertInfo) => (
            <ExpertListItem expertInfo={expertInfo} no={no++} key={no} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ExpertList;
