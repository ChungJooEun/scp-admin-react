import React from "react";

import Flatpickr from "react-flatpickr";
import "flatpickr/dist/themes/airbnb.css";

const SearchPeriodBar = () => {
  return (
    <form className="form-inline">
      <div className="col-sm-auto">
        <div className="form-group">
          <Flatpickr
            className="form-control flatpickr-input-display ml-16"
            placeholder="시작날짜 - 종료날짜"
            data-toggle="flatpickr"
            options={{ mode: "range" }}
          />
          <input
            id="filter_date"
            type="hidden"
            className="form-control flatpickr-input-display ml-16"
            placeholder="Select date ..."
            value="13/03/2018 to 20/03/2018"
            data-toggle="flatpickr"
            data-flatpickr-mode="range"
            data-flatpickr-alt-format="d/m/Y"
            data-flatpickr-date-format="d/m/Y"
          />
          <button className="btn bg-alt border-left border-top border-top-sm-0 rounded-0">
            <i className="material-icons text-primary icon-20pt">refresh</i>
          </button>
        </div>
      </div>
    </form>
  );
};

export default SearchPeriodBar;
