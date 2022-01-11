import React from "react";
import AdminListItem from "./AdminListItem";

const style = { width: "48px" };

const AdminList = ({ list, pageNumber, count, deleteAdmin }) => {
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
              <span className="sort">관리자</span>
            </th>
            <th style={style}>
              <span className="sort">등록자</span>
            </th>
            <th style={style}>
              <span className="sort">접속일</span>
            </th>
            <th style={style}>
              <span className="sort">최종 접속일</span>
            </th>
            <th style={style}>
              <span className="sort">연락처</span>
            </th>
            <th style={style}>
              <span className="sort">메모</span>
            </th>
            <th style={style}>
              <span className="sort">관리</span>
            </th>
          </tr>
        </thead>
        <tbody className="list" id="tasks2">
          {list.map((adminInfo) => (
            <AdminListItem
              adminInfo={adminInfo}
              no={no++}
              deleteAdmin={deleteAdmin}
              key={adminInfo.idx}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminList;
