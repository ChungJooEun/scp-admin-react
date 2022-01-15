import React from "react";

const AnsweredListItem = ({
  rowLabel,
  expertOption,
  seletedExperts,
  onChangeSeletedValue,
}) => {
  const setOption = (list) => {
    let ary = [];

    ary.push(
      <option value="default" key="default">
        선택없음
      </option>
    );

    for (let i = 0; i < list.length; i++) {
      ary.push(
        <option value={list[i].id} key={list[i].id}>
          {list[i].name}
        </option>
      );
    }

    return ary;
  };

  const setSeletTag = () => {
    let ary = [];

    for (let i = 0; i < expertOption.length; i++) {
      ary.push(
        <td>
          <select
            id="filter_category"
            className="custom-select"
            style={{ width: "auto" }}
            defaultValue={seletedExperts[i].expertId}
            key={seletedExperts[i].expertId}
            onChange={(e) =>
              onChangeSeletedValue(
                expertOption[i].category,
                expertOption[i].month,
                e.target.value
              )
            }
          >
            {setOption(expertOption[i].list)}
          </select>
        </td>
      );
    }

    return ary;
  };

  return (
    <tr>
      <td>
        <div className="d-flex align-items-center text-align-center">
          <strong>{rowLabel} :</strong>
        </div>
      </td>

      {/* 1월 ~ 12월 */}
      {setSeletTag()}
    </tr>
  );
};

export default AnsweredListItem;
