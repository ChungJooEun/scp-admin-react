import React from "react";
import { Link } from "react-router-dom";

const convertDateFormat = (dateString) => {
  // let result = dateString.replace(/-/gi, ".");

  // let time = dateAry[1].split(":");
  // result += ` ${time[0]}시${time[1]}분${time[2]}초`;
  // result += ` ${dateAry[1]}`;

  return dateString.replace(/-/gi, ".");
};

const PhoneCounselingListItem = ({ consultationInfo, no, userName }) => {
  return (
    <tr>
      <td>
        <div className="d-flex align-items-center text-align-center">
          <span>{no}</span>
        </div>
      </td>
      {/* <td>
        <div className="d-flex align-items-center">
          <Link to="/sc-ok/phone-consultation-detail" className="mr-4pt">
            <strong>{consultationInfo.title}</strong>
          </Link>
        </div>
      </td> */}
      <td>
        <div className="d-flex align-items-center">
          <span>{consultationInfo.area}</span>
        </div>
      </td>
      <td>
        <div className="d-flex align-items-center">
          <span>{userName}</span>
        </div>
      </td>

      <td>
        <div className="d-flex align-items-center">
          <span>{convertDateFormat(consultationInfo.createDate)}</span>
        </div>
      </td>
      <td>
        <div className="d-flex align-items-center">
          <Link to="/sc-ok/pro-detail" className="mr-4pt">
            <strong>{consultationInfo.expertName}</strong>
          </Link>
        </div>
      </td>
      <td>
        <small className="text-50">
          {consultationInfo.consultationState === "W" ? "대기중" : "답변 완료"}
        </small>
      </td>
    </tr>
  );
};

export default PhoneCounselingListItem;
