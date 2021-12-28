import React, { useState, useEffect, useRef } from "react";

import DayComponent from "./DayComponent";
import ReservatableSchedule from "./ReservatableSchedule";
import ReservedSchedule from "./ReservedSchedule";

const createYearOption = () => {
  let yearOption = [];

  for (let i = 2021; i < 2042; i++) {
    yearOption.push(
      <option value={i} key={i}>
        {i}년
      </option>
    );
  }

  return yearOption;
};

const createMonthOption = () => {
  let monthOption = [];

  for (let i = 1; i <= 12; i++) {
    monthOption.push(
      <option value={i} key={i}>
        {i}월
      </option>
    );
  }

  return monthOption;
};

const ReservationCallender = () => {
  const [date, setDate] = useState(null);

  const yearOption = useRef();
  const monthOption = useRef();

  const searchSchedule = (e) => {
    e.preventDefault();

    setDate({
      year: yearOption.current.value,
      month: monthOption.current.value,
    });
  };

  const setCallenderRows = (
    startDate,
    isFisrtRows,
    firstDateofDay,
    lastDate
  ) => {
    let callender = [];
    let endDate = startDate + 6;

    for (let i = startDate; i <= endDate; i++) {
      if (isFisrtRows) {
        if (i - 1 < firstDateofDay) {
          callender.push(<td key={i}></td>);
        } else {
          callender.push(
            <td key={i}>
              <DayComponent day={i - firstDateofDay} />
              <ReservatableSchedule />
              <ReservedSchedule />
            </td>
          );
        }
      } else {
        if (i <= lastDate) {
          callender.push(
            <td key={i}>
              <DayComponent day={i} />
              <ReservatableSchedule />
              <ReservedSchedule />
            </td>
          );
        } else {
          callender.push(<td key={i}></td>);
        }
      }
    }

    return callender;
  };

  const setCallender = () => {
    // 0 : 일 ~ 6 : 토
    const firstDateofDay = new Date(date.year, date.month - 1, 1).getDay();
    const lastDate = new Date(date.year, date.month, 0).getDate();

    let callenderAry = [];

    let callenderRows = Math.ceil((lastDate - (7 - firstDateofDay)) / 7);

    let callenderDate = 1;

    for (let i = 0; i <= callenderRows; i++) {
      callenderAry.push(
        <tr key={i}>
          {setCallenderRows(
            callenderDate,
            i === 0 ? true : false,
            firstDateofDay,
            lastDate
          )}
        </tr>
      );

      i === 0 ? (callenderDate += 7 - firstDateofDay) : (callenderDate += 7);
    }

    return callenderAry;
  };

  useEffect(() => {
    const today = new Date();

    setDate({
      year: today.getFullYear(),
      month: today.getMonth() + 1,
    });
  }, []);

  if (!date) {
    return <div></div>;
  }

  return (
    <>
      <div className="page-separator mt-10">
        <div className="page-separator__text">
          {date.year}년 {date.month}월
        </div>
      </div>
      <div className="card mb-24pt">
        <div className="card-header">
          <form className="form-inline" onSubmit={searchSchedule}>
            <select
              id="inlineFormRole"
              className="custom-select mb-2 mr-sm-2 mb-sm-0"
              defaultValue={date.year}
              name="year"
              ref={yearOption}
            >
              {createYearOption()}
            </select>
            <select
              id="inlineFormRole"
              className="custom-select mb-2 mr-sm-2 mb-sm-0"
              name="month"
              defaultValue={date.month}
              ref={monthOption}
            >
              {createMonthOption()}
            </select>
            <button className="btn btn-primary" type="submit">
              검색
            </button>
          </form>
        </div>
        <div
          className="table-responsive"
          data-toggle="lists"
          data-lists-values='["js-lists-values-name"]'
        >
          <table className="table table-bordered table-flush mb-0 thead-border-top-0 table-nowrap">
            <thead>
              <tr>
                <th>
                  <div className="lh-1 d-flex flex-column text-50 my-4pt">
                    일
                  </div>
                </th>
                <th>
                  <div className="lh-1 d-flex flex-column text-50 my-4pt">
                    월
                  </div>
                </th>
                <th>
                  <div className="lh-1 d-flex flex-column text-50 my-4pt">
                    화
                  </div>
                </th>
                <th>
                  <div className="lh-1 d-flex flex-column text-50 my-4pt">
                    수
                  </div>
                </th>
                <th>
                  <div className="lh-1 d-flex flex-column text-50 my-4pt">
                    목
                  </div>
                </th>
                <th>
                  <div className="lh-1 d-flex flex-column text-50 my-4pt">
                    금
                  </div>
                </th>
                <th>
                  <div className="lh-1 d-flex flex-column text-50 my-4pt">
                    토
                  </div>
                </th>
              </tr>
            </thead>
            <tbody className="list" id="contacts calendar">
              {setCallender()}
            </tbody>
          </table>
        </div>

        {/* <Paging /> */}
      </div>

      <br />
      <br />
      <br />
    </>
  );
};

export default ReservationCallender;
