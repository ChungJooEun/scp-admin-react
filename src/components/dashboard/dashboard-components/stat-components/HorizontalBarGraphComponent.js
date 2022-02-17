import React from "react";
import { calcRate } from "../../../../util/char-options";

const HorizontalBarGraphComponent = ({ genderGraphInfo }) => {
  const setGenderStat = () => {
    const { genderData, totalRows } = genderGraphInfo;

    let ary = [];
    for (let i = 0; i < genderGraphInfo.genderData.length; i++) {
      ary.push(
        <div
          className="p-card-header d-flex align-items-center float-left"
          key={genderData[i].gender}
        >
          <div className="h2 mb-0 mr-3">{genderData[i].cnt}</div>
          <div className="flex">
            <p className="mb-0">
              <strong>
                {
                  {
                    m: "남성",
                    f: "여성",
                    u: "성별 미상",
                  }[genderData[i].gender]
                }{" "}
                활동자
              </strong>
            </p>
            <p className="text-50 mb-0 d-flex align-items-center">
              <small>{calcRate(genderData[i].cnt, totalRows)}%</small>
            </p>
          </div>
        </div>
      );
    }

    return ary;
  };

  return (
    <div className="col-md-6 card-group-row__col">
      <div className="card card-group-row__card">
        <div className="card-header p-0 nav">
          <div className="row no-gutters flex" role="tablist">
            <div className="col-auto">{setGenderStat()}</div>
          </div>
        </div>
        <div className="card-body d-flex flex-column">
          <div className="d-flex flex flex-column align-items-center justify-content-center">
            <ul className="list-unstyled list-skills w-100">
              {genderGraphInfo.ageData.map((ageInfo) => (
                <li className="mb-8pt">
                  <div className="text-50 border-right">
                    <small>{ageInfo.age}</small>
                  </div>
                  <div className="flex">
                    <div className="progress" style={{ height: "4px" }}>
                      <div
                        className="progress-bar bg-primary"
                        role="progressbar"
                        style={{ width: `${ageInfo.rate}%` }}
                        aria-valuenow={ageInfo.rate}
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                  <div className="text-70">
                    <small>{ageInfo.rate}%</small>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HorizontalBarGraphComponent;
