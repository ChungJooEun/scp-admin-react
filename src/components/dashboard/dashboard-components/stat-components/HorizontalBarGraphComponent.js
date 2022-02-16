import React from "react";
import { calcRate } from "../../../../util/char-options";

const HorizontalBarGraphComponent = ({ genderGraphInfo }) => {
  return (
    <div className="col-md-6 card-group-row__col">
      <div className="card card-group-row__card">
        <div className="card-header p-0 nav">
          <div className="row no-gutters flex" role="tablist">
            <div className="col-auto">
              <div className="p-card-header d-flex align-items-center float-left">
                <div className="h2 mb-0 mr-3">
                  {genderGraphInfo.genderData.m}
                </div>
                <div className="flex">
                  <p className="mb-0">
                    <strong>남성 활동자</strong>
                  </p>
                  <p className="text-50 mb-0 d-flex align-items-center">
                    <small>
                      {calcRate(
                        genderGraphInfo.genderData.m,
                        genderGraphInfo.totalRows
                      )}
                      %
                    </small>
                  </p>
                </div>
              </div>
              <div className="p-card-header d-flex align-items-center float-left">
                <div className="h2 mb-0 mr-3">
                  {genderGraphInfo.genderData.f}
                </div>
                <div className="flex">
                  <p className="mb-0">
                    <strong>여성 활동자</strong>
                  </p>
                  <p className="text-50 mb-0 d-flex align-items-center">
                    <small>
                      {calcRate(
                        genderGraphInfo.genderData.f,
                        genderGraphInfo.totalRows
                      )}
                      %
                    </small>
                  </p>
                </div>
              </div>
            </div>
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
