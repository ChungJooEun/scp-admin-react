import React from "react";

import Flatpickr from "react-flatpickr";
import "flatpickr/dist/themes/airbnb.css";

const SearchPeriodWithExpertBar = () => {
  return (
    <form className="form-inline">
      <div className="col-sm-auto">
        <div className="form-group">
          <select
            id="custom-select"
            className="form-control custom-select ml-16"
          >
            <option selected="">전문가</option>
            <option value="1">전문가1</option>
            <option value="2">전문가2</option>
            <option value="3">전문가3</option>
          </select>
          <Flatpickr
            className="form-control flatpickr-input ml-16"
            placeholder="시작날짜 - 종료날짜"
            data-toggle="flatpickr"
            options={{ mode: "range" }}
          />
          <button className="btn btn-primary ml-16pt" type="submit">
            활동 목록 EXCEL 다운로드
          </button>
          <button className="btn btn-primary ml-16pt" type="submit">
            활동 목록 PDF 다운로드
          </button>
        </div>
      </div>
    </form>
  );
};

export default SearchPeriodWithExpertBar;
