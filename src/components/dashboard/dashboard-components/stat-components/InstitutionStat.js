import React from "react";

const InstitutionStat = () => {
  return (
    <>
      <div className="page-separator">
        <div className="page-separator__text">기관</div>
      </div>
      <div className="row mb-lg-8pt">
        <div className="col-md-6 card-group-row__col">
          <div className="card card-group-row__card">
            <div className="card-header p-0 nav border-0">
              <div className="row no-gutters flex" role="tablist">
                <div className="col-auto">
                  <div className="p-card-header d-flex align-items-center">
                    <div className="h2 mb-0 mr-3">2,412</div>
                    <div className="flex d-flex flex-column">
                      <p className="mb-0">
                        <strong>활동기관</strong>
                      </p>
                      <small className="text-50 d-flex align-items-center">
                        이번 주 + 240
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-body">
              <div className="chart" style={{ height: "128px" }}>
                <canvas
                  id="viewsChart"
                  className="chart-canvas js-update-chart-line js-update-chart-area"
                  data-chart-points="true"
                  data-chart-line-border-color="primary"
                  data-chart-prefix="$"
                  data-chart-suffix="k"
                ></canvas>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 card-group-row__col">
          <div className="card card-group-row__card">
            <div className="card-header p-0 nav border-0">
              <div className="row no-gutters flex" role="tablist">
                <div className="col-auto">
                  <div className="p-card-header d-flex align-items-center">
                    <div className="h2 mb-0 mr-3">2,412</div>
                    <div className="flex d-flex flex-column">
                      <p className="mb-0">
                        <strong>수요기관</strong>
                      </p>
                      <small className="text-50 d-flex align-items-center">
                        이번 주 + 240
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-body">
              <div className="chart" style={{ height: "128px" }}>
                <canvas
                  id="viewsChart"
                  className="chart-canvas js-update-chart-line js-update-chart-area"
                  data-chart-points="true"
                  data-chart-line-border-color="primary"
                  data-chart-prefix="$"
                  data-chart-suffix="k"
                ></canvas>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InstitutionStat;
