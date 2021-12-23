import React from "react";

import AllUserListItem from "./AllUserListItem";

const AllUserList = () => {
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
              <a className="sort">닉네임</a>
            </th>
            <th style={{ width: "48px" }}>
              <a className="sort">아이디</a>
            </th>
            <th style={{ width: "48px" }}>
              <a className="sort">활동일</a>
            </th>
            <th style={{ width: "48px" }}>
              <a className="sort">최근 활동일</a>
            </th>
            <th style={{ width: "48px" }}>
              <a className="sort">소속</a>
            </th>
          </tr>
        </thead>
        <tbody className="list" id="tasks2">
          <AllUserListItem />
          <AllUserListItem />
          <AllUserListItem />
          <AllUserListItem />
          <AllUserListItem />
          <AllUserListItem />
          <AllUserListItem />
          <AllUserListItem />
          <AllUserListItem />
          <AllUserListItem />
        </tbody>
      </table>
    </div>
  );
};

export default AllUserList;