import React from "react";

import Paging from "../../../common-components/Paging";

import DayComponent from "./DayComponent";
import ReservatableSchedule from "./ReservatableSchedule";
import ReservedSchedule from "./ReservedSchedule";

const ReservationCallender = () => {
  return (
    <>
      <div className="page-separator mt-10">
        <div className="page-separator__text">2021년 1월</div>
      </div>
      <div className="card mb-24pt">
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
              <option value="All Roles">2025년</option>
              <option value="All Roles">2026년</option>
              <option value="All Roles">2027년</option>
              <option value="All Roles">2028년</option>
              <option value="All Roles">2029년</option>
              <option value="All Roles">2031년</option>
              <option value="All Roles">2032년</option>
              <option value="All Roles">2033년</option>
              <option value="All Roles">2034년</option>
              <option value="All Roles">2035년</option>
              <option value="All Roles">2036년</option>
              <option value="All Roles">2037년</option>
            </select>
            <select
              id="inlineFormRole"
              className="custom-select mb-2 mr-sm-2 mb-sm-0"
            >
              <option value="All Roles">1월</option>
              <option value="All Roles">2월</option>
              <option value="All Roles">3월</option>
              <option value="All Roles">4월</option>
              <option value="All Roles">5월</option>
              <option value="All Roles">6월</option>
              <option value="All Roles">7월</option>
              <option value="All Roles">8월</option>
              <option value="All Roles">9월</option>
              <option value="All Roles">10월</option>
              <option value="All Roles">11월</option>
              <option value="All Roles">12월</option>
            </select>
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
                <th>
                  <div className="lh-1 d-flex flex-column text-50 my-4pt">
                    일
                  </div>
                </th>
              </tr>
            </thead>
            <tbody className="list" id="contacts calendar">
              <tr>
                <td>
                  <DayComponent day="1" />
                  <ReservatableSchedule />
                  <ReservedSchedule />
                </td>
                <td>
                  <DayComponent day="2" />
                  <ReservedSchedule />
                  <ReservedSchedule />
                </td>

                <td>
                  <DayComponent day="3" />
                  <ReservatableSchedule />
                </td>
                <td>
                  <DayComponent day="4" />
                  <ReservedSchedule />
                  <ReservedSchedule />
                </td>
                <td>
                  <DayComponent day="5" />
                  <ReservedSchedule />
                  <ReservatableSchedule />
                </td>
                <td>
                  <DayComponent day="6" />
                  <ReservedSchedule />
                </td>
                <td>
                  <DayComponent day="7" />
                  <ReservedSchedule />
                </td>
              </tr>

              <tr>
                <td>
                  <DayComponent day="8" />
                  <ReservedSchedule />
                  <ReservedSchedule />
                </td>
                <td>
                  <DayComponent day="9" />
                  <ReservedSchedule />
                  <ReservedSchedule />
                </td>
                <td>
                  <DayComponent day="10" />
                  <ReservedSchedule />
                  <ReservatableSchedule />
                </td>
                <td>
                  <DayComponent day="11" />
                  <ReservedSchedule />
                  <ReservedSchedule />
                </td>
                <td>
                  <DayComponent day="12" />
                  <ReservatableSchedule />
                  <ReservedSchedule />
                </td>
                <td>
                  <DayComponent day="13" />
                  <ReservedSchedule />
                </td>
                <td>
                  <DayComponent day="14" />
                  <ReservedSchedule />
                </td>
              </tr>

              <tr>
                <td>
                  <DayComponent day="15" />
                  <ReservedSchedule />
                  <ReservatableSchedule />
                </td>
                <td>
                  <DayComponent day="16" />
                  <ReservedSchedule />
                  <ReservedSchedule />
                </td>
                <td>
                  <DayComponent day="17" />
                  <ReservatableSchedule />
                  <ReservatableSchedule />
                </td>
                <td>
                  <DayComponent day="18" />
                  <ReservedSchedule />
                  <ReservedSchedule />
                </td>
                <td>
                  <DayComponent day="19" />
                  <ReservedSchedule />
                  <ReservedSchedule />
                </td>
                <td>
                  <DayComponent day="20" />
                  <ReservedSchedule />
                </td>
                <td>
                  <DayComponent day="21" />
                  <ReservatableSchedule />
                </td>
              </tr>
              <tr>
                <td>
                  <DayComponent day="22" />
                  <ReservatableSchedule />
                  <ReservedSchedule />
                </td>
                <td>
                  <DayComponent day="23" />
                  <ReservedSchedule />
                  <ReservedSchedule />
                </td>
                <td>
                  <DayComponent day="24" />
                  <ReservatableSchedule />
                  <ReservedSchedule />
                </td>
                <td>
                  <DayComponent day="25" />
                  <ReservedSchedule />
                  <ReservatableSchedule />
                </td>
                <td>
                  <DayComponent day="26" />
                  <ReservedSchedule />
                  <ReservedSchedule />
                </td>
                <td>
                  <DayComponent day="27" />
                  <ReservedSchedule />
                </td>
                <td>
                  <DayComponent day="28" />
                  <ReservatableSchedule />
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <Paging />
      </div>

      <br />
      <br />
      <br />
    </>
  );
};

export default ReservationCallender;