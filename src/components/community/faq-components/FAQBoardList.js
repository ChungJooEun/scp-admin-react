import React, { useState, useRef } from "react";

import FAQBoardListItem from "./FAQBoardListItem";

const FAQBoardList = ({
  list,
  pageNumber,
  count,
  addCheckedList,
  removeNoneCheckedList,
  toggleAllChecked,
  allChecked,
}) => {
  let no = (pageNumber - 1) * count + 1;

  const [checked, setChecked] = useState(false);
  const checkBox = useRef();

  const onClickCheckAll = () => {
    if (checked === false) {
      setChecked(!checked);
      checkBox.current.checked = true;
      toggleAllChecked(true);
    } else {
      setChecked(!checked);
      checkBox.current.checked = false;
      toggleAllChecked(false);
    }
  };

  return (
    <div
      className="table-responsive"
      data-toggle="lists"
      data-lists-sort-by="js-lists-values-date"
      data-lists-sort-desc="true"
      data-lists-values='["js-lists-values-lead", "js-lists-values-project", "js-lists-values-status", "js-lists-values-budget", "js-lists-values-date"]'
    >
      <table className="table mb-0 thead-border-top-0 table-nowrap">
        <thead>
          <tr>
            <th style={{ width: "12px" }} className="pr-0">
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input js-toggle-check-all"
                  ref={checkBox}
                />
                <label
                  className="custom-control-label"
                  htmlFor="customCheckAllstaff"
                  onClick={() => onClickCheckAll()}
                >
                  <span className="text-hide">Toggle all</span>
                </label>
              </div>
            </th>
            <th style={{ width: "12px" }}>no.</th>
            <th style={{ width: "150px" }}>
              <span
                className="sort"
                data-sort="js-lists-values-cultural-seocho-festival-name"
              >
                질문
              </span>
            </th>
            <th style={{ width: "64px" }}>
              <span
                className="sort"
                data-sort="js-lists-values-last-update-date"
              >
                담당자
              </span>
            </th>
            <th style={{ width: "64px" }}>
              <span className="sort" data-sort="js-lists-values-public">
                조회수
              </span>
            </th>
            <th style={{ width: "64px" }}>
              <span className="sort" data-sort="js-lists-values-public">
                등록일
              </span>
            </th>
          </tr>
        </thead>
        <tbody className="list" id="staff">
          {list.map((faqInfo) => (
            <FAQBoardListItem
              faqInfo={faqInfo}
              no={no++}
              addCheckedList={addCheckedList}
              removeNoneCheckedList={removeNoneCheckedList}
              allChecked={allChecked}
              key={faqInfo.idx}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FAQBoardList;
