import React from "react";
import SearchPeriodBar from "../../common-components/search-components/SearchPeriodBar";
import AnsweredListItem from "./AnsweredListItem";

const AnsweredList = () => {
  return (
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
        <div className="card-header">
          <form className="form-inline">
            <select
              id="inlineFormRole"
              className="custom-select mb-2 mr-sm-2 mb-sm-0"
            >
              <option value="All Roles">2021년</option>
              <option value="All Roles">2022년</option>
              <option value="All Roles">2023년</option>
              <option value="All Roles">2024년</option>
            </select>
          </form>
        </div>
        <table className="table mb-0 thead-border-top-0 table-nowrap text-align-left">
          <thead>
            <tr>
              <th style={{ width: "70px" }}>
                <a></a>
              </th>
              <th style={{ width: "48px" }}>
                <a>1월</a>
              </th>
              <th style={{ width: "48px" }}>
                <a>2월</a>
              </th>
              <th style={{ width: "48px" }}>
                <a>3월</a>
              </th>
              <th style={{ width: "48px" }}>
                <a>4월</a>
              </th>
              <th style={{ width: "48px" }}>
                <a>5월</a>
              </th>
              <th style={{ width: "48px" }}>
                <a>6월</a>
              </th>
              <th style={{ width: "48px" }}>
                <a>7월</a>
              </th>
              <th style={{ width: "48px" }}>
                <a>8월</a>
              </th>
              <th style={{ width: "48px" }}>
                <a>9월</a>
              </th>
              <th style={{ width: "48px" }}>
                <a>10월</a>
              </th>
              <th style={{ width: "48px" }}>
                <a>11월</a>
              </th>
              <th style={{ width: "48px" }}>
                <a>12월</a>
              </th>
            </tr>
          </thead>
          <tbody className="list" id="tasks2">
            <AnsweredListItem rowLabel="법률" />
            <AnsweredListItem rowLabel="세무" />
            <AnsweredListItem rowLabel="법무" />
            <AnsweredListItem rowLabel="노무" />
            <AnsweredListItem rowLabel="건축" />
          </tbody>
        </table>
      </div>
      <div className="card-footer">
        <button className="btn btn-secondary" type="button">
          취소
        </button>
        <button className="btn btn-primary" type="submit">
          저장
        </button>
      </div>
    </div>
  );
};

export default AnsweredList;
