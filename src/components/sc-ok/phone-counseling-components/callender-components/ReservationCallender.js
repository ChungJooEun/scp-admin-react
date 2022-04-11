import axios from "axios";
import React, { useState, useEffect, useRef, useCallback } from "react";

import DayComponent from "./DayComponent";
import PhoneCounselingScheduleItem from "./PhoneCounselingScheduleItem";

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

const createScheduleDate = (date) => {
  let month = parseInt(date.month);

  let dateStr = date.year + "-";

  if (month < 10) {
    dateStr += "0" + month;
  } else {
    dateStr += month;
  }

  return dateStr;
};

const ReservationCallender = () => {
  const today = new Date();

  const [date, setDate] = useState({
    year: today.getFullYear(),
    month: today.getMonth() + 1,
  });

  const yearOption = useRef();
  const monthOption = useRef();

  const [scheduleList, setScheduleList] = useState(null);

  const searchSchedule = (e) => {
    e.preventDefault();

    setDate({
      year: yearOption.current.value,
      month: monthOption.current.value,
    });
  };

  const createdSchedule = (day) => {
    let ary = [];

    for (let i = 0; i < scheduleList.length; i++) {
      if (day === scheduleList[i].date) {
        ary.push(
          <PhoneCounselingScheduleItem scheduleInfo={scheduleList[i]} />
        );
      }
    }

    return ary;
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
              {createdSchedule(i - firstDateofDay)}
            </td>
          );
        }
      } else {
        if (i <= lastDate) {
          callender.push(
            <td key={i}>
              <DayComponent day={i} />
              {createdSchedule(i)}
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

  const getSchedule = useCallback(async () => {
    // let url = `${
    //   process.env.REACT_APP_SERVICE_API
    // }/api/v1/ok/phone-schedule/list/${createScheduleDate(date)}`;

    let url = `${
      process.env.REACT_APP_SERVICE_API
    }/api/v1/ok/phone/monthly-schedule/${createScheduleDate(date)}`;

    try {
      const response = await axios.get(url);

      if (response.status === 200) {
        const { data } = response.data;

        let ary = [];

        for (let i = 0; i < data.length; i++) {
          for (let j = 0; j < data[i].data.length; j++) {
            for (let k = 0; k < data[i].data[j].schedules.length; k++) {
              ary.push({
                idx: Object.keys(data[i].data[j].schedules[k]).includes("idx")
                  ? data[i].data[j].schedules[k].idx
                  : "-1",
                expertName: Object.keys(data[i].data[j]).includes("expertName")
                  ? data[i].data[j].expertName
                  : "전문가 미지정",
                date: parseInt(data[i].date.split("-")[2]),
                time: data[i].data[j].schedules[k].time,
                statusId: data[i].data[j].schedules[k].bookYn,
                statusName:
                  data[i].data[j].schedules[k].bookYn === "Y"
                    ? "예약 중"
                    : "예약 완료",
                category: data[i].data[j].cateName,
              });
            }
          }
        }

        setScheduleList(ary);
      }
    } catch (e) {
      alert("상담 스케줄 조회 중, 오류가 발생하였습니다.");
      console.log(e);
    }
  }, [date]);

  const [toggleCallendar, setToggleCallendar] = useState(true);

  const onToggleCallendar = () => {
    setToggleCallendar(!toggleCallendar);
  };

  useEffect(() => {
    getSchedule();
  }, [getSchedule]);

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
            <button className="btn btn-primary ml-16pt" type="submit">
              검색
            </button>
            <button
              className="btn btn-warning ml-16pt float-right"
              type="button"
              onClick={onToggleCallendar}
            >
              {toggleCallendar ? "캘린더 닫기" : "캘린더 열기"}
            </button>
          </form>
        </div>
        {toggleCallendar && scheduleList && (
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
        )}

        {/* <Paging /> */}
      </div>

      <br />
      <br />
      <br />
    </>
  );
};

export default ReservationCallender;
