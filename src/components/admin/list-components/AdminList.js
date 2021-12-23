import React from "react";
import AdminListItem from "./AdminListItem";

const AdminList = () => {
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
              <a className="sort">관리자</a>
            </th>
            <th style={{ width: "48px" }}>
              <a className="sort">등록자</a>
            </th>
            <th style={{ width: "48px" }}>
              <a className="sort">접속일</a>
            </th>
            <th style={{ width: "48px" }}>
              <a className="sort">최종 접속일</a>
            </th>
            <th style={{ width: "48px" }}>
              <a className="sort">연락처</a>
            </th>
            <th style={{ width: "48px" }}>
              <a className="sort">메모</a>
            </th>
            <th style={{ width: "48px" }}>
              <a className="sort">관리</a>
            </th>
          </tr>
        </thead>
        <tbody className="list" id="tasks2">
          <AdminListItem />
          <AdminListItem />
          <AdminListItem />
          <AdminListItem />
          <AdminListItem />
          <AdminListItem />
          <AdminListItem />
          <AdminListItem />
          <AdminListItem />
          <AdminListItem />
        </tbody>
      </table>
    </div>
  );
};

export default AdminList;
