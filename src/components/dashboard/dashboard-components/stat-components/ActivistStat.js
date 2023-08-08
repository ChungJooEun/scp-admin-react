import axios from "axios";
import React, { useState, useEffect } from "react";
import LineGraphComponent from "./LineGraphComponent";

import {convertDateStr, parsingMonthDate} from "../../../../util/date-convert-function";
import HorizontalBarGraphComponent from "./HorizontalBarGraphComponent";
import { calcRate } from "../../../../util/char-options";

const ActivistStat = ({ type, title, period }) => {
  const [lineGraphInfo, setLineGraphInfo] = useState({
    labels: [],
    data: [],
    totalRows: 0,
  });

  const [genderGraphInfo, setGenderGraphInfo] = useState({
    totalRows: 0,
    genderData: [],
    ageData: [],
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

    const getDailyLineGraphInfo = async () => {
      const url = `${process.env.REACT_APP_SERVICE_API}/api/v1/stat/${type}/act-list`;

      try {
        const response = await axios.get(url, {params : params});

        if (response.status === 200) {
          const { totalRows, thisData } = response.data;

          let labels = [];
          let data = [];

          for (let i = 0; i < thisData.length; i++) {
            labels.push(parsingMonthDate(thisData[i].date));
            data.push(thisData[i].cnt);
          }

          setLineGraphInfo({
            labels: labels,
            data: data,
            totalRows: totalRows,
          });
        }
      } catch (e) {
        console.log(e);
        // alert(
        //   `${
        //     type === "part" ? "활동자" : "수요자"
        //   } 통계 조회 중, 오류가 발생하였습니다.`
        // );
      }
    };
    const getDailyBarGraphInfo = async () => {
      const url = `${process.env.REACT_APP_SERVICE_API}/api/v1/stat/${type}/act-list/gender`;

      try {
        const response = await axios.get(url, {params : params});

        if (response.status === 200) {
          const { totalRows, genderData, ageData } = response.data;

          let genderary = [];

          for (let i = 0; i < genderData.length; i++) {
            if (
              genderData[i].gender === "M" ||
              genderData[i].gender === "남성"
            ) {
              genderary.push({
                gender: "m",
                cnt: genderData[i].cnt,
              });
            } else if (
              genderData[i].gender === "F" ||
              genderData[i].gender === "여성"
            ) {
              genderary.push({
                gender: "f",
                cnt: genderData[i].cnt,
              });
            } else {
              genderary.push({
                gender: "u",
                cnt: genderData[i].cnt,
              });
            }
          }

          let ageAry = [];
          for (let i = 0; i < ageData.length; i++) {
            ageAry.push({
              age: ageData[i].age === "Unknown" ? "나이 미상" : ageData[i].age,
              rate: calcRate(ageData[i].cnt, totalRows),
            });
          }

          setGenderGraphInfo({
            totalRows: totalRows,
            genderData: genderary,
            ageData: ageAry,
          });
        }
      } catch (e) {
        console.log(e);
        // alert(
        //   `${
        //     type === "part" ? "활동자" : "수요자"
        //   } 통계 조회 중, 오류가 발생하였습니다.`
        // );
      }
    };

    const getMonthlyLineGraphInfo = async () => {
      // const url = `${process.env.REACT_APP_SERVICE_API}/api/v1/stat/${type}/act-list`;
      //
      // try {
      //   const response = await axios.get(url, {params : params});
      //
      //   if (response.status === 200) {
      //     const { totalRows, thisData } = response.data;
      //
      //     let labels = [];
      //     let data = [];
      //
      //     for (let i = 0; i < thisData.length; i++) {
      //       labels.push(parsingMonthDate(thisData[i].date));
      //       data.push(thisData[i].cnt);
      //     }
      //
      //     setLineGraphInfo({
      //       labels: labels,
      //       data: data,
      //       totalRows: totalRows,
      //     });
      //   }
      // } catch (e) {
      //   console.log(e);
        // alert(
        //   `${
        //     type === "part" ? "활동자" : "수요자"
        //   } 통계 조회 중, 오류가 발생하였습니다.`
        // );
      // }
    };
    const getMonthlyBarGraphInfo = async () => {
      // const url = `${process.env.REACT_APP_SERVICE_API}/api/v1/stat/${type}/act-list/gender`;
      //
      // try {
      //   const response = await axios.get(url, {params : params});
      //
      //   if (response.status === 200) {
      //     const { totalRows, genderData, ageData } = response.data;
      //
      //     let genderary = [];
      //
      //     for (let i = 0; i < genderData.length; i++) {
      //       if (
      //           genderData[i].gender === "M" ||
      //           genderData[i].gender === "남성"
      //       ) {
      //         genderary.push({
      //           gender: "m",
      //           cnt: genderData[i].cnt,
      //         });
      //       } else if (
      //           genderData[i].gender === "F" ||
      //           genderData[i].gender === "여성"
      //       ) {
      //         genderary.push({
      //           gender: "f",
      //           cnt: genderData[i].cnt,
      //         });
      //       } else {
      //         genderary.push({
      //           gender: "u",
      //           cnt: genderData[i].cnt,
      //         });
      //       }
      //     }
      //
      //     let ageAry = [];
      //     for (let i = 0; i < ageData.length; i++) {
      //       ageAry.push({
      //         age: ageData[i].age === "Unknown" ? "나이 미상" : ageData[i].age,
      //         rate: calcRate(ageData[i].cnt, totalRows),
      //       });
      //     }
      //
      //     setGenderGraphInfo({
      //       totalRows: totalRows,
      //       genderData: genderary,
      //       ageData: ageAry,
      //     });
      //   }
      // } catch (e) {
      //   console.log(e);
      //   // alert(
      //   //   `${
      //   //     type === "part" ? "활동자" : "수요자"
      //   //   } 통계 조회 중, 오류가 발생하였습니다.`
      //   // );
      // }
    };

    if(rangeStatus === "D"){
      getDailyLineGraphInfo();
      getDailyBarGraphInfo();
    }else{
      getMonthlyLineGraphInfo();
      getMonthlyBarGraphInfo();
    }
  }, [type, period, rangeStatus]);

  return (
    <>
      <div className="page-separator">
        <div className="page-separator__text">{title}</div>
      </div>
      <div className="row card-group-row mb-lg-8pt">
        <LineGraphComponent title={title} lineGraphInfo={lineGraphInfo} subTitle={period.fromDate && period.toDate ? `${period.fromDate} ~ ${period.toDate}` : "이번주" }/>
        <HorizontalBarGraphComponent genderGraphInfo={genderGraphInfo} />
      </div>
    </>
  );
};

export default ActivistStat;
