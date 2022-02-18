import axios from "axios";
import React, { useEffect, useState } from "react";
import { calcRate } from "../../../../util/char-options";
import { parsingMonthDate } from "../../../../util/date-convert-function";

import HorizontalBarGraphComponent from "./HorizontalBarGraphComponent";
import LineGraphComponent from "./LineGraphComponent";

const SeochoOkConsulting = ({ type, title }) => {
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

  useEffect(() => {
    const getLineGraphInfo = async () => {
      const url = `${process.env.REACT_APP_SERVICE_API}/api/v1/stat/ok/${type}`;

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
        //     type === "online" ? "온라인" : "전화"
        //   } 상담자 통계 조회 중, 오류가 발생하였습니다.`
        // );
      }
    };

    const getBarGraphInfo = async () => {
      const url = `${process.env.REACT_APP_SERVICE_API}/api/v1/stat/ok/${type}/gender`;

      try {
        const response = await axios.get(url);

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
        //     type === "online" ? "온라인" : "전화"
        //   } 상담 통계 조회 중, 오류가 발생하였습니다.`
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
        <LineGraphComponent title="상담수" lineGraphInfo={lineGraphInfo} />
        <HorizontalBarGraphComponent genderGraphInfo={genderGraphInfo} />
      </div>
    </>
  );
};

export default SeochoOkConsulting;
