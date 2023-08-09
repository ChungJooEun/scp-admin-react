import axios from "axios";
import React, { useState, useEffect, useCallback } from "react";
import { Bar } from "react-chartjs-2";

import {getBarGraphOptions} from "../../../../util/char-options";
import {convertDateStr, parsingMonthDate, parsingYMDate} from "../../../../util/date-convert-function";

const getDataset = (stat) => {

  if(stat.data.lastWeek.length === 0){
    return [{
      data: stat.data.thisWeek,
      fill: true,
      backgroundColor: "rgb(30, 128, 240)",
      borderColor: "rgb(30, 128, 240)",
      borderWidth: 1,
      borderRadius: 7,
    }]
  }else{
    return [
      {
        label: "지난주",
        data: stat.data.lastWeek,
        fill: true,
        backgroundColor: "rgb(220, 230, 244)",
        borderColor: "rgb(220, 230, 244)",
        borderWidth: 1,
        borderRadius: 7,
      },
      {
        label: "이번주",
        data: stat.data.thisWeek,
        fill: true,
        backgroundColor: "rgb(30, 128, 240)",
        borderColor: "rgb(30, 128, 240)",
        borderWidth: 1,
        borderRadius: 7,
      }
    ]
  }
}

const ActivityCount = ({period}) => {
  const [activityCount, setActivityCount] = useState({
    labels: { lastWeek: [], thisWeek: [] },
    data: { lastWeek: [], thisWeek: [] },
    totalRows: 0,
  });

  const [rangeStatus, setRangeStatus] = useState("D");

  useEffect(() => {
    if(period.fromDate && period.toDate){
      let fromDate = new Date(period.fromDate);
      let toDate = new Date(period.toDate);

      if((fromDate.getFullYear() === toDate.getFullYear() && fromDate.getMonth() === toDate.getMonth()) || ((toDate - fromDate)/(1000 * 60 * 60 * 24) < 31)){
        setRangeStatus("D");
      }else{
        setRangeStatus("M");
      }
    }else{
      setRangeStatus("D");
    }
  },[period])

  useEffect(() => {

    let params = {};
    if(!period.fromDate || !period.toDate){
      let today = new Date();
      let toDate = convertDateStr(today);
      today.setDate(today.getDate() - 6);
      let fromDate = convertDateStr(today);

      params = {
        fromDate : fromDate,
        toDate : toDate,
      }
    }
    else{
      params = {
        fromDate : period.fromDate,
        toDate : period.toDate,
      };
    }

    const getDailyActivityStat = async () => {
      const url = `${process.env.REACT_APP_SERVICE_API}/api/v1/stat/activities`;

      try {
        const response = await axios.get(url, {params : params});

        if (response.status === 200) {
          const { totalRows, thisData, previousData } = response.data;

          let labels = { lastWeek: [], thisWeek: [] };
          let data = { lastWeek: [], thisWeek: [] };

          for (let i = 0; i < thisData.length; i++) {
            labels.thisWeek.push(parsingMonthDate(thisData[i].date));
            data.thisWeek.push(thisData[i].cnt);
          }

          if(!period.fromDate || !period.toDate) {
            for (let i = 0; i < previousData.length; i++) {
              labels.lastWeek.push(parsingMonthDate(previousData[i].date));
              data.lastWeek.push(previousData[i].cnt);
            }
          }

          setActivityCount({
            labels: labels,
            data: data,
            totalRows: totalRows,
          });
        }
      } catch (e) {
        console.log(e);
        // alert("활동수 조회 중, 오류가 발생하였습니다.");
      }
    };
    const getMonthlyActivityStat = async () => {
      const url = `${process.env.REACT_APP_SERVICE_API}/api/v1/stat/activities/monthly`;

      try {
        const response = await axios.get(url, {params : params});

        if (response.status === 200) {
          const { totalRows, thisData } = response.data;

          let labels = { lastWeek: [], thisWeek: [] };
          let data = { lastWeek: [], thisWeek: [] };

          for (let i = 0; i < thisData.length; i++) {
            labels.thisWeek.push(parsingYMDate(thisData[i].date));
            data.thisWeek.push(thisData[i].cnt);
          }

          setActivityCount({
            labels: labels,
            data: data,
            totalRows: totalRows,
          });
        }
      } catch (e) {
        console.log(e);
        // alert("활동수 조회 중, 오류가 발생하였습니다.");
      }
    };

    rangeStatus === "D" ? getDailyActivityStat() : getMonthlyActivityStat();

  }, [period, rangeStatus]);

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
                        <small>{period.fromDate && period.toDate ? `${period.fromDate} ~ ${period.toDate}` : "이번주" }</small>
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
                  datasets : getDataset(activityCount)
                }}
                options={getBarGraphOptions(period.fromDate && period.toDate ? `${period.fromDate} ~ ${period.toDate}` : "이번주")}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ActivityCount;
