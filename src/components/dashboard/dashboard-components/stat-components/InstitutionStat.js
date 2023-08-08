import React, { useEffect, useState } from "react";
import axios from "axios";
import {convertDateStr, parsingMonthDate} from "../../../../util/date-convert-function";

import LineGraphComponent from "./LineGraphComponent";

const InstitutionStat = ({period}) => {
  const [partOrgStatInfo, setPartOrgStatInfo] = useState({
    labels: [],
    data: [],
    totalRows: 0,
  });

  const [beneOrgStatInfo, setBeneOrgStatInfo] = useState({
    labels: [],
    data: [],
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

    const getDailyOrgStat = async (type) => {
      const url = `${process.env.REACT_APP_SERVICE_API}/api/v1/stat/${type}/org`;

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

          if (type === "part") {
            setPartOrgStatInfo({
              labels: labels,
              data: data,
              totalRows: totalRows,
            });
          } else {
            setBeneOrgStatInfo({
              labels: labels,
              data: data,
              totalRows: totalRows,
            });
          }
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

    const getMonthlyOrgStat = async (type) => {
      // const url = `${process.env.REACT_APP_SERVICE_API}/api/v1/stat/${type}/org`;
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
      //     if (type === "part") {
      //       setPartOrgStatInfo({
      //         labels: labels,
      //         data: data,
      //         totalRows: totalRows,
      //       });
      //     } else {
      //       setBeneOrgStatInfo({
      //         labels: labels,
      //         data: data,
      //         totalRows: totalRows,
      //       });
      //     }
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
      getDailyOrgStat("part");
      getDailyOrgStat("bene");
    }else{
      getMonthlyOrgStat("part");
      getMonthlyOrgStat("bene");
    }
  }, [period, rangeStatus]);

  return (
    <>
      <div className="page-separator">
        <div className="page-separator__text">기관</div>
      </div>
      <div className="row mb-lg-8pt">
        <LineGraphComponent title="활동기관" lineGraphInfo={partOrgStatInfo} subTitle={period.fromDate && period.toDate ? `${period.fromDate} ~ ${period.toDate}` : "이번주" }/>
        <LineGraphComponent title="수요기관" lineGraphInfo={beneOrgStatInfo} subTitle={period.fromDate && period.toDate ? `${period.fromDate} ~ ${period.toDate}` : "이번주" }/>
      </div>
    </>
  );
};

export default InstitutionStat;
