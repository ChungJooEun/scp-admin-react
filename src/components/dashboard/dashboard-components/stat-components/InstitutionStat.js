import React, { useEffect, useState } from "react";
import axios from "axios";
import { parsingMonthDate } from "../../../../util/date-convert-function";

import LineGraphComponent from "./LineGraphComponent";

const InstitutionStat = () => {
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

  useEffect(() => {
    const getOrgStat = async (type) => {
      const url = `${process.env.REACT_APP_SERVICE_API}/api/v1/stat/${type}/org`;

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

    getOrgStat("part");
    getOrgStat("bene");
  }, []);

  return (
    <>
      <div className="page-separator">
        <div className="page-separator__text">기관</div>
      </div>
      <div className="row mb-lg-8pt">
        <LineGraphComponent title="활동기관" lineGraphInfo={partOrgStatInfo} />
        <LineGraphComponent title="수요기관" lineGraphInfo={beneOrgStatInfo} />
      </div>
    </>
  );
};

export default InstitutionStat;
