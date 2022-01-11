import React from "react";

import ReportedUserListItem from "./ReportedUserListItem";

const style = { width: "48px" };

const ReportedUserList = ({ list, pageNumber, count, onChangeUserState }) => {
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
              <span className="sort">닉네임</span>
            </th>
            <th style={style}>
              <span className="sort">아이디</span>
            </th>
            {/* <th style={style}>
              <span className="sort">활동일</span>
            </th> */}
            <th style={style}>
              <span className="sort">생성일</span>
            </th>
            <th style={style}>
              <span className="sort">최근 활동일</span>
            </th>
            <th style={style}>
              <span className="sort">소속</span>
            </th>
            <th style={style}>
              <span className="sort">신고사유</span>
            </th>
            <th style={style}>
              <span className="sort">관리</span>
            </th>
          </tr>
        </thead>
        <tbody className="list" id="tasks2">
          {list.map((userInfo) => (
            <ReportedUserListItem
              userInfo={userInfo}
              no={no++}
              key={userInfo.idx}
              onChangeUserState={onChangeUserState}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default ReportedUserList;
