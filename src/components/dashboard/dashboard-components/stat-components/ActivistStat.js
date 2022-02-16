import axios from "axios";
import React, { useState, useEffect } from "react";
import LineGraphComponent from "./LineGraphComponent";

import { parsingMonthDate } from "../../../../util/date-convert-function";
import HorizontalBarGraphComponent from "./HorizontalBarGraphComponent";
import { calcRate } from "../../../../util/char-options";

const ActivistStat = ({ type, title }) => {
  const [lineGraphInfo, setLineGraphInfo] = useState({
    labels: [],
    data: [],
    totalRows: 0,
  });

  const [genderGraphInfo, setGenderGraphInfo] = useState({
    totalRows: 0,
    genderData: {
      m: 0,
      f: 0,
    },
    ageData: [],
  });

  useEffect(() => {
    const getLineGraphInfo = async () => {
      const url = `${process.env.REACT_APP_SERVICE_API}/api/v1/stat/${type}/act-list`;

      try {
        const response = await axios.get(url);

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

    const getBarGraphInfo = async () => {
      const url = `${process.env.REACT_APP_SERVICE_API}/api/v1/stat/${type}/act-list/gender`;

      try {
        const response = await axios.get(url);

        if (response.status === 200) {
          const { totalRows, genderData, ageData } = response.data;

          let genderObj = {
            m: 0,
            f: 0,
          };

          for (let i = 0; i < genderData.length; i++) {
            if (
              genderData[i].gender === "M" ||
              genderData[i].gender === "남성"
            ) {
              genderObj.m = genderData[i].cnt;
            } else {
              genderObj.f = genderData[i].cnt;
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
            genderData: genderObj,
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

    getLineGraphInfo();
    getBarGraphInfo();
  }, [type]);

  return (
    <>
      <div className="page-separator">
        <div className="page-separator__text">{title}</div>
      </div>
      <div className="row card-group-row mb-lg-8pt">
        <LineGraphComponent title={title} lineGraphInfo={lineGraphInfo} />
        <HorizontalBarGraphComponent genderGraphInfo={genderGraphInfo} />
      </div>
    </>
  );
};

export default ActivistStat;
