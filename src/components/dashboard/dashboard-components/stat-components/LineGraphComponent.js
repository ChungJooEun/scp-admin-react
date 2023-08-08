import React from "react";
import { Line } from "react-chartjs-2";
import { lineGraphOptions } from "../../../../util/char-options";

const LineGraphComponent = ({ title, lineGraphInfo, subTitle }) => {
  return (
    <div className="col-md-6 card-group-row__col">
      <div className="card card-group-row__card">
        <div className="card-header p-0 nav">
          <div className="row no-gutters flex" role="tablist">
            <div className="col-auto">
              <div className="p-card-header d-flex align-items-center">
                <div className="h2 mb-0 mr-3">{lineGraphInfo.totalRows}</div>
                <div className="flex">
                  <p className="mb-0">
                    <strong>{title} 수</strong>
                  </p>
                  <p className="text-50 mb-0 d-flex align-items-center">
                    <small>{subTitle}</small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card-body">
          <Line
            data={{
              labels: lineGraphInfo.labels,
              datasets: [
                {
                  label: "",
                  data: lineGraphInfo.data,
                  fill: true,
                  lineTension: 0.5,
                  backgroundColor: "rgba(15, 107, 255, 0.1)",
                  borderColor: "rgb(30, 128, 240)",
                  borderWidth: 2,
                },
              ],
            }}
            options={lineGraphOptions}
          />
        </div>
      </div>
    </div>
  );
};

export default LineGraphComponent;
