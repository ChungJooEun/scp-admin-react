import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";

import SearchPeriodBar from "../../common-components/search-components/SearchPeriodBar";
import AnsweredListItem from "./AnsweredListItem";

const style = { width: "48px" };
const createYearOption = () => {
  let yearOption = [];

  for (let i = 2021; i < 2042; i++) {
    yearOption.push(
      <option value={i} key={i}>
        {i}년
      </option>
    );
  }

  return yearOption;
};

const AnsweredList = () => {
  const [year, setYear] = useState(new Date().getFullYear());

  const [expertOption, setExpertOption] = useState(null);
  // const [seletedExpertList, setSelectedExpertList] = useState(null);
  // CCooooooo1_01=18 (ex, 1월 법률, 전문가ID 18),

  const getMonthlyExpert = useCallback(async () => {
    const url = `${process.env.REACT_APP_SERVICE_API}/api/v1/ok/online/expert/list`;

    try {
      const response = await axios.get(url, {
        params: {
          yy: year,
        },
      });

      if (response.status === 200) {
        let ary = {
          law: [], // 법률 (cc00000001)
          taxation: [], //세무 (cc00000002)
          architecture: [], //건축 (cc00000003)
          judicialAffairs: [], // 법무 (cc00000004)
          labor: [], // 노무 (cc00000006)
        };

        const monthKeys = Object.keys(response.data);
        let category;
        let categoryKeys;

        let temp;

        for (let i = 0; i < monthKeys.length; i++) {
          category = response.data[monthKeys[i]];
          categoryKeys = Object.keys(category);

          for (let j = 0; j < categoryKeys.length; j++) {
            temp = {
              month: monthKeys[i].substring(0, monthKeys[i].length - 1),
              list: category[categoryKeys[j]].experts,
            };

            switch (categoryKeys[j]) {
              case "cc00000001":
                ary.law.push(temp);
                break;
              case "cc00000002":
                ary.taxation.push(temp);
                break;
              case "cc00000003":
                ary.architecture.push(temp);
                break;
              case "cc00000004":
                ary.judicialAffairs.push(temp);
                break;
              case "cc00000006":
                ary.labor.push(temp);
                break;
              default:
                break;
            }
          }
        }

        setExpertOption(ary);
      }
    } catch (e) {
      alert("답변자 목록 조회 중, 오류가 발생하였습니다.");
      console.log(e);
    }
  }, [year]);

  useEffect(() => {
    getMonthlyExpert();
  }, [getMonthlyExpert]);

  return (
    <div className="card mb-lg-32pt">
      <div className="card-header">
        <SearchPeriodBar />
      </div>
      <div
        className="table-responsive"
        data-toggle="lists"
        data-lists-sort-by="js-lists-values-date"
        data-lists-sort-desc="false"
        data-lists-values='["js-lists-values-name", "js-lists-values-date"]'
      >
        <div className="card-header">
          <form className="form-inline">
            <select
              id="inlineFormRole"
              className="custom-select mb-2 mr-sm-2 mb-sm-0"
              defaultValue={year}
              key={year}
              onChange={(e) => setYear(e.target.value)}
            >
              {createYearOption()}
            </select>
          </form>
        </div>
        {expertOption && (
          <table className="table mb-0 thead-border-top-0 table-nowrap text-align-left">
            <thead>
              <tr>
                <th style={{ width: "70px" }}>
                  <span></span>
                </th>
                <th style={style}>
                  <span>1월</span>
                </th>
                <th style={style}>
                  <span>2월</span>
                </th>
                <th style={style}>
                  <span>3월</span>
                </th>
                <th style={style}>
                  <span>4월</span>
                </th>
                <th style={style}>
                  <span>5월</span>
                </th>
                <th style={style}>
                  <span>6월</span>
                </th>
                <th style={style}>
                  <span>7월</span>
                </th>
                <th style={style}>
                  <span>8월</span>
                </th>
                <th style={style}>
                  <span>9월</span>
                </th>
                <th style={style}>
                  <span>10월</span>
                </th>
                <th style={style}>
                  <span>11월</span>
                </th>
                <th style={style}>
                  <span>12월</span>
                </th>
              </tr>
            </thead>

            <tbody className="list" id="tasks2">
              <AnsweredListItem
                rowLabel="법률"
                categoryId="CC00000001"
                expertOption={expertOption.law}
              />
              <AnsweredListItem
                rowLabel="세무"
                categoryId="CC00000002"
                expertOption={expertOption.taxation}
              />
              <AnsweredListItem
                rowLabel="법무"
                categoryId="CC00000004"
                expertOption={expertOption.judicialAffairs}
              />
              <AnsweredListItem
                rowLabel="노무"
                categoryId="CC00000006"
                expertOption={expertOption.labor}
              />
              <AnsweredListItem
                rowLabel="건축"
                categoryId="CC00000003"
                expertOption={expertOption.architecture}
              />
            </tbody>
          </table>
        )}
      </div>
      <div className="card-footer">
        <button className="btn btn-secondary" type="button">
          취소
        </button>
        <button className="btn btn-primary" type="submit">
          저장
        </button>
      </div>
    </div>
  );
};

export default AnsweredList;
