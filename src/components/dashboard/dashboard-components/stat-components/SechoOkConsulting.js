import React from "react";

const SeochoOkConsulting = () => {
  return (
    <>
      <div className="page-separator">
        <div className="page-separator__text">서초OK생활 온라인 상담</div>
      </div>
      <div className="row card-group-row mb-lg-8pt">
        <div className="col-md-6 card-group-row__col">
          <div className="card card-group-row__card">
            <div className="card-header p-0 nav">
              <div className="row no-gutters flex" role="tablist">
                <div className="col-auto">
                  <div className="p-card-header d-flex align-items-center">
                    <div className="h2 mb-0 mr-3">417</div>
                    <div className="flex">
                      <p className="mb-0">
                        <strong>상담 수</strong>
                      </p>
                      <p className="text-50 mb-0 d-flex align-items-center">
                        <small>이번주 + 240</small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-body">
              <div
                id="legend"
                className="chart-legend mt-0 mb-24pt justify-content-start"
              ></div>
              <div className="chart" style={{ height: "182px" }}>
                <canvas
                  id="earningsChart"
                  className="chart-canvas js-update-chart-bar"
                  data-chart-legend="#legend"
                  data-chart-line-background-color="primary,gray"
                  data-chart-prefix="$"
                  data-chart-suffix="k"
                >
                  <span style={{ fontSize: "1rem" }}>
                    <strong>Views</strong> area chart goes here.
                  </span>
                </canvas>
              </div>
            </div>
          </div>
        </div>
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

export default SeochoOkConsulting;
