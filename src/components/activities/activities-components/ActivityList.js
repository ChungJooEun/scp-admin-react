import React from "react";
import SearchPeriodBar from "../../common-components/search-components/SearchPeriodBar";
import ActivityListItem from "./ActivityListItem";

const ActivityList = ({ tableTitle }) => {
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
          <table className="table mb-0 thead-border-top-0 table-nowrap">
            <thead>
              <tr>
                <th style={{ width: "48px" }}>
                  <a className="sort">No.</a>
                </th>
                <th style={{ width: "48px" }}>
                  <a className="sort">활동번호</a>
                </th>
                <th style={{ width: "48px" }}>
                  <a className="sort">활동명</a>
                </th>
                <th style={{ width: "48px" }}>
                  <a className="sort">기관/단체명</a>
                </th>
                <th style={{ width: "48px" }}>
                  <a className="sort">카테고리</a>
                </th>
                <th style={{ width: "48px" }}>
                  <a className="sort">모집분야</a>
                </th>
                <th style={{ width: "48px" }}>
                  <a className="sort">모집대상</a>
                </th>
                <th style={{ width: "48px" }}>
                  <a className="sort">활동장소</a>
                </th>
                <th style={{ width: "48px" }}>
                  <a className="sort">필요인원</a>
                </th>
                <th style={{ width: "48px" }}>
                  <a className="sort">총 활동시간</a>
                </th>
                <th style={{ width: "48px" }}>
                  <a className="sort">상태</a>
                </th>
              </tr>
            </thead>
            <tbody className="list" id="tasks2">
              <ActivityListItem />
              <ActivityListItem />
              <ActivityListItem />
              <ActivityListItem />
              <ActivityListItem />
              <ActivityListItem />
              <ActivityListItem />
              <ActivityListItem />
              <ActivityListItem />
              <ActivityListItem />
            </tbody>
          </table>
        </div>
        <div className="card-footer p-8pt">
          <ul className="pagination justify-content-start pagination-xsm m-0">
            <li className="page-item disabled">
              <a className="page-link" href="#" aria-label="Previous">
                <span aria-hidden="true" className="material-icons">
                  chevron_left
                </span>
                <span>이전</span>
              </a>
            </li>
            <li className="page-item dropdown">
              <a
                className="page-link dropdown-toggle"
                data-toggle="dropdown"
                href="#"
                aria-label="Page"
              >
                <span>1</span>
              </a>
              <div className="dropdown-menu">
                <a href="" className="dropdown-item active">
                  1
                </a>
                <a href="" className="dropdown-item">
                  2
                </a>
                <a href="" className="dropdown-item">
                  3
                </a>
                <a href="" className="dropdown-item">
                  4
                </a>
                <a href="" className="dropdown-item">
                  5
                </a>
              </div>
            </li>
            <li className="page-item">
              <a className="page-link" href="#" aria-label="Next">
                <span>다음</span>
                <span aria-hidden="true" className="material-icons">
                  chevron_right
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default ActivityList;
