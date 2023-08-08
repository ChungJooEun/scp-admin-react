import React, {useState} from "react";

import Flatpickr from "react-flatpickr";
import "flatpickr/dist/themes/airbnb.css";
import {convertDateStr} from "../../../util/date-convert-function";

const SearchPeriodBarImpl = ({searching}) => {

  const [dateRange, setDateRange] = useState({
    fromDate : "",
    toDate : "",
  })

  const onChangeDateRange = (dAray) => {
    if (dAray.length === 1) {
      setDateRange({
        fromDate: dAray[0],
        toDate: dAray[0],
      });
    } else {
      setDateRange({
        fromDate: dAray[0],
        toDate: dAray[1],
      });
    }
  };

  const onClickSearchButton = () => {
    searching({
      fromDate : convertDateStr(dateRange.fromDate),
      toDate : convertDateStr(dateRange.toDate),
    })
  }

  return (
    <form className="form-inline">
      <div className="col-sm-auto">
        <div className="form-group">
          <Flatpickr
            className="form-control flatpickr-input-display ml-16"
            data-toggle="flatpickr"
            options={{ mode: "range" }}
            onChange={(dAray) => onChangeDateRange(dAray)}
            placeholder="시작날짜 - 종료날짜"
          />
          <button
              className="btn bg-alt border-top border-top-sm-0 rounded-0"
              type={"button"}
              onClick={onClickSearchButton}
          >
            <i className="material-icons text-primary icon-20pt">search</i>
          </button>
        </div>
      </div>
    </form>
  );
};

export default SearchPeriodBarImpl;
