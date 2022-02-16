import axios from "axios";
import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";

import barGraphOptions from "../../../../util/char-options";
import { parsingMonthDate } from "../../../../util/date-convert-function";

const ActivityCount = () => {
  const [activityCount, setActivityCount] = useState({
    labels: { lastWeek: [], thisWeek: [] },
    data: { lastWeek: [], thisWeek: [] },
    totalRows: 0,
  });

  useEffect(() => {
    const getActivityStat = async () => {
      const url = `${process.env.REACT_APP_SERVICE_API}/api/v1/stat/activities`;

      try {
        const response = await axios.get(url);

        if (response.status === 200) {
          const { totalRows, thisData, previousData } = response.data;

          let labels = { lastWeek: [], thisWeek: [] };
          let data = { lastWeek: [], thisWeek: [] };

          for (let i = 0; i < thisData.length; i++) {
            labels.thisWeek.push(parsingMonthDate(thisData[i].date));
            data.thisWeek.push(thisData[i].cnt);
          }

          for (let i = 0; i < previousData.length; i++) {
            labels.lastWeek.push(parsingMonthDate(previousData[i].date));
            data.lastWeek.push(previousData[i].cnt);
          }

          setActivityCount({
            labels: labels,
            data: data,
            totalRows: totalRows,
          });
        }
      } catch (e) {
        console.log(e);
        alert("활동수 조회 중, 오류가 발생하였습니다.");
      }
    };

    getActivityStat();
  });

  return (
    <>
      <div className="page-separator">
        <div className="page-separator__text">활동 수</div>
      </div>
      <div className="row card-group-row mb-lg-8pt">
        <div className="col-md-6 card-group-row__col">
          <div className="card card-group-row__card">
            <div className="card-header p-0 nav">
              <div className="row no-gutters flex" role="tablist">
                <div className="col-auto">
                  <div className="p-card-header d-flex align-items-center">
                    <div className="h2 mb-0 mr-3">
                      {activityCount.totalRows}
                    </div>
                    <div className="flex">
                      <p className="mb-0">
                        <strong>활동 수</strong>
                      </p>
                      <p className="text-50 mb-0 d-flex align-items-center">
                        <small>총</small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-body">
              <Bar
                data={{
                  labels: activityCount.labels.thisWeek,
                  datasets: [
                    {
                      label: "지난주",
                      data: activityCount.data.lastWeek,
                      fill: true,
                      backgroundColor: "rgb(220, 230, 244)",
                      borderColor: "rgb(220, 230, 244)",
                      borderWidth: 1,
                      borderRadius: 7,
                    },
                    {
                      label: "이번주",
                      data: activityCount.data.thisWeek,
                      fill: true,
                      backgroundColor: "rgb(30, 128, 240)",
                      borderColor: "rgb(30, 128, 240)",
                      borderWidth: 1,
                      borderRadius: 7,
                    },
                  ],
                }}
                options={barGraphOptions}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ActivityCount;
