import React, { useState, useEffect } from "react";

import Flatpickr from "react-flatpickr";
import "flatpickr/dist/themes/airbnb.css";
import axios from "axios";

import { convertDateStr } from "../../../util/date-convert-function";

const SearchPeriodWithExpertBar = ({
  type,
  hideExpertOption,
  expertIdx,
  searchCounselginList,
}) => {
  const [expertList, setExpertList] = useState(null);
  const [selectedExpertIdx, setSelectedExpertIdx] = useState("default");

  const [selectedDate, setSelectedDate] = useState({
    sDate: "",
    eDate: "",
  });

  const selectExpert = (seletedIdx) => {
    setSelectedExpertIdx(seletedIdx);
  };

  const setExpertListOption = () => {
    let ary = [];

    ary.push(
      <option value="default" key="default">
        전문가
      </option>
    );

    for (let i = 0; i < expertList.length; i++) {
      ary.push(
        <option value={expertList[i].value} key={expertList[i].value}>
          {expertList[i].label}
        </option>
      );
    }

    return ary;
  };

  const onChangeDateRange = (dAray) => {
    if (dAray.length === 1) {
      setSelectedDate({
        sDate: convertDateStr(dAray[0]),
        eDate: convertDateStr(dAray[0]),
      });
    } else {
      setSelectedDate({
        sDate: convertDateStr(dAray[0]),
        eDate: convertDateStr(dAray[1]),
      });
    }
  };

  useEffect(() => {
    const getExpertList = async () => {
      const url = `${process.env.REACT_APP_SERVICE_API}/api/v1/ok/expert/list`;

      try {
        const response = await axios.get(url);

        if (response.status === 200) {
          const { data } = response.data;

          let ary = [];
          for (let i = 0; i < data.length; i++) {
            ary.push({
              value: data[i].idx,
              label: data[i].name,
            });
          }

          setExpertList(ary);
        }
      } catch (e) {
        alert("전문가 목록을 조회중, 오류가 발생하였습니다.");
        console.log(e);

        setExpertList([]);
      }
    };
    getExpertList();
  }, []);

  return (
    <div className="form-inline">
      <div className="col-sm-auto">
        <div className="form-group">
          {hideExpertOption === true ? null : (
            <select
              id="custom-select"
              className="form-control custom-select ml-16"
              defaultValue={selectedExpertIdx}
              key={selectedExpertIdx}
              onChange={(e) => selectExpert(e.target.value)}
            >
              {expertList && setExpertListOption()}
            </select>
          )}
          <Flatpickr
            className="form-control flatpickr-input ml-16"
            placeholder="시작날짜 - 종료날짜"
            data-toggle="flatpickr"
            options={{ mode: "range" }}
            onChange={(dAray) => onChangeDateRange(dAray)}
          />
          <input
            className="btn btn-secondary ml-16pt"
            type="button"
            value="검색"
            onClick={() =>
              searchCounselginList(selectedExpertIdx, selectedDate)
            }
          />
          <a
            href={`${
              process.env.REACT_APP_SERVICE_API
            }/api/v1/excel/ok-${type}/${window.sessionStorage.getItem(
              "userIdx"
            )}?sDate=${selectedDate.sDate}&eDate=${
              selectedDate.eDate
            }&expertIdx=${
              hideExpertOption === true
                ? expertIdx
                : selectedExpertIdx !== "default"
                ? selectedExpertIdx
                : ""
            }`}
          >
            <input
              className="btn btn-primary ml-16pt"
              type="button"
              value="활동 목록 EXCEL 다운로드"
            />
          </a>
          <a
            href={`${
              process.env.REACT_APP_SERVICE_API
            }/api/v1/pdf/ok-${type}/${window.sessionStorage.getItem(
              "userIdx"
            )}?sDate=${selectedDate.sDate}&eDate=${
              selectedDate.eDate
            }&expertIdx=${
              hideExpertOption === true
                ? expertIdx
                : selectedExpertIdx !== "default"
                ? selectedExpertIdx
                : ""
            }`}
            target="_blank"
            rel="noreferrer"
          >
            <input
              className="btn btn-primary ml-16pt"
              type="button"
              value="활동 목록 PDF 다운로드"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default SearchPeriodWithExpertBar;
