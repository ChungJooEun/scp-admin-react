import React from "react";

import UserListItem from "./UserListItem";

const style = { width: "48px" };

const UserList = ({ list, pageNumber, count }) => {
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
              <span className="sort">최근 활동일</span>
            </th>
            <th style={style}>
              <span className="sort">상태</span>
            </th>
          </tr>
        </thead>
        <tbody className="list" id="tasks2">
          {list.map((userInfo) => (
            <UserListItem userInfo={userInfo} no={no++} key={userInfo.id} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
