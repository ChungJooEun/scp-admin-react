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

const useConfirm = (message = null, onConfirm) => {
  if (!onConfirm || typeof onConfirm !== "function") {
    return;
  }

  const confirmAction = () => {
    if (window.confirm(message)) {
      onConfirm();
    }
  };
  return confirmAction;
};

const AnsweredList = () => {
  const [year, setYear] = useState(new Date().getFullYear());

  const [expertOption, setExpertOption] = useState(null);
  const [seletedExpertList, setSelectedExpertList] = useState(null);

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

        let seletedExperts = {
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
        let experts = null;

        for (let i = 0; i < monthKeys.length; i++) {
          category = response.data[monthKeys[i]];
          categoryKeys = Object.keys(category);

          for (let j = 0; j < categoryKeys.length; j++) {
            temp = {
              month: monthKeys[i].substring(0, monthKeys[i].length - 1),
              list: category[categoryKeys[j]].experts,
              category: categoryKeys[j],
            };

            experts = null;

            for (let k = 0; k < category[categoryKeys[j]].experts.length; k++) {
              if (category[categoryKeys[j]].experts[k].monthYn === "Y") {
                experts = {
                  month: monthKeys[i].substring(0, monthKeys[i].length - 1),
                  expertId: category[categoryKeys[j]].experts[k].id,
                  category: categoryKeys[j],
                };

                break;
              }
            }

            if (experts === null) {
              experts = {
                month: monthKeys[i].substring(0, monthKeys[i].length - 1),
                expertId: "default",
                category: categoryKeys[j],
              };
            }

            switch (categoryKeys[j]) {
              case "cc00000001":
                ary.law.push(temp);
                seletedExperts.law.push(experts);
                break;
              case "cc00000002":
                ary.taxation.push(temp);
                seletedExperts.taxation.push(experts);
                break;
              case "cc00000003":
                ary.architecture.push(temp);
                seletedExperts.architecture.push(experts);
                break;
              case "cc00000004":
                ary.judicialAffairs.push(temp);
                seletedExperts.judicialAffairs.push(experts);
                break;
              case "cc00000006":
                ary.labor.push(temp);
                seletedExperts.labor.push(experts);
                break;
              default:
                break;
            }
          }
        }

        setSelectedExpertList(seletedExperts);
        setExpertOption(ary);
      }
    } catch (e) {
      alert("답변자 목록 조회 중, 오류가 발생하였습니다.");
      console.log(e);
    }
  }, [year]);

  const changeSeletedExpert = (expertList, month, expertId) => {
    let ary = expertList;
    ary[parseInt(month) - 1].expertId = expertId;

    return ary;
  };

  const onChangeSeletedValue = (categoryId, month, expertId) => {
    let seletedExperts = seletedExpertList;

    switch (categoryId) {
      case "cc00000001":
        seletedExperts.law = changeSeletedExpert(
          seletedExpertList.law,
          month,
          expertId
        );
        break;
      case "cc00000002":
        seletedExperts.taxation = changeSeletedExpert(
          seletedExpertList.taxation,
          month,
          expertId
        );
        break;
      case "cc00000003":
        seletedExperts.architecture = changeSeletedExpert(
          seletedExpertList.architecture,
          month,
          expertId
        );
        break;
      case "cc00000004":
        seletedExperts.judicialAffairs = changeSeletedExpert(
          seletedExpertList.judicialAffairs,
          month,
          expertId
        );
        break;
      case "cc00000006":
        seletedExperts.labor = changeSeletedExpert(
          seletedExpertList.labor,
          month,
          expertId
        );
        break;
      default:
        break;
    }

    setSelectedExpertList(seletedExperts);
  };

  const saveSeletedExpertList = async (params) => {
    const url = `${process.env.REACT_APP_SERVICE_API}/api/v1/ok/online/expert/update`;

    try {
      const response = await axios.post(url, null, {
        params: params,
      });

      if (response.status === 201) {
        alert("답변자가 저장되었습니다.");
      }
    } catch (e) {
      alert("답변자 저장 중, 오류가 발생하였습니다.");
      console.log(e);
    }
  };

  const onHandleSaveSeletedExpert = () => {
    let params = new Object();

    // userId=관리자 ID,
    params.userId = window.sessionStorage.getItem("userId");

    // yy=검색년도,
    params.yy = year;

    const categoryKeys = Object.keys(seletedExpertList);
    let parameterName;

    for (let i = 0; i < categoryKeys.length; i++) {
      for (let j = 0; j < seletedExpertList[categoryKeys[i]].length; j++) {
        if (seletedExpertList[categoryKeys[i]][j].expertId !== "default") {
          parameterName = `${seletedExpertList[categoryKeys[i]][
            j
          ].category.toUpperCase()}_${
            seletedExpertList[categoryKeys[i]][j].month
          }`;
          params[parameterName] =
            seletedExpertList[categoryKeys[i]][j].expertId;
        }
      }
    }

    // for (let v of Object.keys(params)) {
    //   console.log(v);
    // }

    saveSeletedExpertList(params);
  };

  const onClickSaveBtn = useConfirm(
    "답변자 수정 사항을 저장하시겠습니까?",
    onHandleSaveSeletedExpert
  );

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
                expertOption={expertOption.law}
                seletedExperts={seletedExpertList.law}
                onChangeSeletedValue={onChangeSeletedValue}
              />
              <AnsweredListItem
                rowLabel="세무"
                expertOption={expertOption.taxation}
                seletedExperts={seletedExpertList.taxation}
                onChangeSeletedValue={onChangeSeletedValue}
              />
              <AnsweredListItem
                rowLabel="법무"
                expertOption={expertOption.judicialAffairs}
                seletedExperts={seletedExpertList.judicialAffairs}
                onChangeSeletedValue={onChangeSeletedValue}
              />
              <AnsweredListItem
                rowLabel="노무"
                expertOption={expertOption.labor}
                seletedExperts={seletedExpertList.labor}
                onChangeSeletedValue={onChangeSeletedValue}
              />
              <AnsweredListItem
                rowLabel="건축"
                expertOption={expertOption.architecture}
                seletedExperts={seletedExpertList.architecture}
                onChangeSeletedValue={onChangeSeletedValue}
              />
            </tbody>
          </table>
        )}
      </div>
      {/* <div className="card-footer">
        <button className="btn btn-secondary" type="button">
          취소
        </button>
        <button
          className="btn btn-primary"
          type="button"
          onClick={onClickSaveBtn}
        >
          저장
        </button>
      </div> */}
    </div>
  );
};

export default AnsweredList;
