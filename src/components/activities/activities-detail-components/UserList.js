import React from "react";
import Paging from "../../common-components/Paging";
import SearchPeriodBar from "../../common-components/search-components/SearchPeriodBar";
import UserListItem from "./UserListItem";

const UserList = ({ tableTitle }) => {
  return (
    <>
      <div className="page-separator">
        <div className="page-separator__text">
          {tableTitle}(<span className="number-count">12</span>)
        </div>
      </div>
      <div className="card mb-lg-32pt">
        <div className="card-header">
          <SearchPeriodBar />
        </div>
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
                  <a className="sort">상태</a>
                </th>
              </tr>
            </thead>
            <tbody className="list" id="tasks2">
              <UserListItem />
              <UserListItem />
              <UserListItem />
              <UserListItem />
              <UserListItem />
              <UserListItem />
              <UserListItem />
              <UserListItem />
              <UserListItem />
              <UserListItem />
            </tbody>
          </table>
        </div>
        <Paging />
      </div>
    </>
  );
};

export default UserList;
