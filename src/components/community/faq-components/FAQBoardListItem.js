import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

const FAQVBoardListItem = ({
  faqInfo,
  no,
  addCheckedList,
  removeNoneCheckedList,
  allChecked,
}) => {
  const [checked, setChecked] = useState(false);

  const checkBox = useRef();

  const onChangeCheckBox = () => {
    if (checked === false) {
      setChecked(!checked);
      checkBox.current.checked = true;
      addCheckedList(faqInfo.idx);
    } else {
      setChecked(!checked);
      checkBox.current.checked = false;
      removeNoneCheckedList(faqInfo.idx);
    }
  };

  useEffect(() => {
    if (allChecked) {
      setChecked(true);
      checkBox.current.checked = true;
    } else {
      setChecked(false);
      checkBox.current.checked = false;
    }
  }, [allChecked]);

  return (
    <tr className={checked ? "selected" : ""}>
      <td className="pr-0">
        <div className="custom-control custom-checkbox">
          <input
            type="checkbox"
            className={
              checked
                ? "custom-control-input js-check-selected-row"
                : "custom-control-input"
            }
            ref={checkBox}
          />
          <label
            className="custom-control-label"
            htmlFor="customCheck1_1"
            onClick={() => onChangeCheckBox()}
          >
            <span className="text-hide">Check</span>
          </label>
        </div>
      </td>
      <td className="js-lists-values-place small">{no}</td>
      <td className="text-aline-left">
        <div
          className="media flex-nowrap align-items-center"
          style={{ whiteSpace: "nowrap" }}
        >
          <div className="media-body">
            <div className="d-flex flex-column">
              <p className="mb-0 txt_line_table_title">
                <Link to={`/community/faq-detail/${faqInfo.idx}`}>
                  <strong className="js-lists-values-cultural-seocho-festival-name">
                    {faqInfo.title}
                  </strong>
                </Link>
              </p>
              <small className="js-lists-values-employee-email text-50"></small>
            </div>
          </div>
        </div>
      </td>
      <td className="js-lists-values-registration-date small">
        {faqInfo.contactName}
      </td>
      <td className="js-lists-values-status small">{faqInfo.viewCount}</td>
      <td className="js-lists-values-public small">{faqInfo.createDate}</td>
    </tr>
  );
};

export default FAQVBoardListItem;
