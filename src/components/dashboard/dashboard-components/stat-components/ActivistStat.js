import axios from "axios";
import React, { useState, useEffect } from "react";
import LineGraphComponent from "./LineGraphComponent";

import { parsingMonthDate } from "../../../../util/date-convert-function";

const ActivistStat = ({ type, title }) => {
  const [lineGraphInfo, setLineGraphInfo] = useState({
    labels: [],
    data: [],
    totalRows: 0,
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

    getLineGraphInfo();
  }, [type]);

  return (
    <>
      <div className="page-separator">
        <div className="page-separator__text">{title}</div>
      </div>
      <div className="row card-group-row mb-lg-8pt">
        <LineGraphComponent title={title} lineGraphInfo={lineGraphInfo} />

        <div className="col-md-6 card-group-row__col">
          <div className="card card-group-row__card">
            <div className="card-header p-0 nav">
              <div className="row no-gutters flex" role="tablist">
                <div className="col-auto">
                  <div className="p-card-header d-flex align-items-center float-left">
                    <div className="h2 mb-0 mr-3">103</div>
                    <div className="flex">
                      <p className="mb-0">
                        <strong>남성 활동자</strong>
                      </p>
                      <p className="text-50 mb-0 d-flex align-items-center">
                        <small>52%</small>
                      </p>
                    </div>
                  </div>
                  <div className="p-card-header d-flex align-items-center float-left">
                    <div className="h2 mb-0 mr-3">103</div>
                    <div className="flex">
                      <p className="mb-0">
                        <strong>여성 활동자</strong>
                      </p>
                      <p className="text-50 mb-0 d-flex align-items-center">
                        <small>48%</small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-body d-flex flex-column">
              <div className="d-flex flex flex-column align-items-center justify-content-center">
                <ul className="list-unstyled list-skills w-100">
                  <li className="mb-8pt">
                    <div className="text-50 border-right">
                      <small>~20대</small>
                    </div>
                    <div className="flex">
                      <div className="progress" style={{ height: "4px" }}>
                        <div
                          className="progress-bar bg-primary"
                          role="progressbar"
                          style={{ width: "40%" }}
                          aria-valuenow="40"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                    <div className="text-70">
                      <small>20%</small>
                    </div>
                  </li>
                  <li className="mb-8pt">
                    <div className="text-50 border-right">
                      <small>30대</small>
                    </div>
                    <div className="flex">
                      <div className="progress" style={{ height: "4px" }}>
                        <div
                          className="progress-bar bg-primary"
                          role="progressbar"
                          style={{ width: "50%" }}
                          aria-valuenow="50"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                    <div className="text-70">
                      <small>40%</small>
                    </div>
                  </li>
                  <li className="mb-8pt">
                    <div className="text-50 border-right">
                      <small>30대~</small>
                    </div>
                    <div className="flex">
                      <div className="progress" style={{ height: "4px" }}>
                        <div
                          className="progress-bar bg-primary"
                          role="progressbar"
                          style={{ width: "60%" }}
                          aria-valuenow="60"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                    <div className="text-70">
                      <small>30%</small>
                    </div>
                  </li>
                  <li className="mb-8pt">
                    <div className="text-50 border-right">
                      <small>50대~</small>
                    </div>
                    <div className="flex">
                      <div className="progress" style={{ height: "4px" }}>
                        <div
                          className="progress-bar bg-primary"
                          role="progressbar"
                          style={{ width: "90%" }}
                          aria-valuenow="90"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                    <div className="text-70">
                      <small>10%</small>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ActivistStat;
