import React from "react";
import { Link } from "react-router-dom";

const FAQVBoardListItem = () => {
  return (
    <tr className="selected">
      <td className="pr-0">
        <div className="custom-control custom-checkbox">
          <input
            type="checkbox"
            className="custom-control-input js-check-selected-row"
            checked=""
            id="customCheck1_1"
          />
          <label className="custom-control-label" for="customCheck1_1">
            <span className="text-hide">Check</span>
          </label>
        </div>
      </td>
      <td className="js-lists-values-place small">5</td>
      <td className="text-aline-left">
        <div
          className="media flex-nowrap align-items-center"
          style={{ whiteSpace: "nowrap" }}
        >
          <div className="media-body">
            <div className="d-flex flex-column">
              <p className="mb-0 txt_line_table_title">
                <Link to="/community/faq-detail">
                  <strong className="js-lists-values-cultural-seocho-festival-name">
                    질문입니다
                  </strong>
                </Link>
              </p>
              <small className="js-lists-values-employee-email text-50"></small>
            </div>
          </div>
        </div>
      </td>
      <td className="js-lists-values-registration-date small">담당자명</td>
      <td className="js-lists-values-status small">125</td>
      <td className="js-lists-values-public small">21.07.30</td>
    </tr>
  );
};

export default FAQVBoardListItem;
