import React from "react";
import { Link } from "react-router-dom";
import convertDashToDot, {
  convertDateString,
} from "../../../util/date-convert-function";

const getState = (state) => {
  switch (state) {
    case "O":
      return "공개";
    case "C":
      return "비공개";
    case "Y":
      return "공개";
    case "N":
      return "비공개";
    default:
      return state;
  }
};

const getConsultationState = (state) => {
  switch (state) {
    case "W":
      return "대기중";
    case "D":
      return "답변 완료";
    default:
      return state;
  }
};

const OnlineConsultationListItem = ({
  consultationInfo,
  no,
  userName,
  expertName,
  dateString,
}) => {
  return (
    <tr>
      <td>
        <div className="d-flex align-items-center text-align-center">
          <span>{no}</span>
        </div>
      </td>
      <td>
        <div className="d-flex align-items-center">
          <Link
            to={`/sc-ok/online-consultation-detail/${consultationInfo.idx}`}
            className="mr-4pt"
          >
            <strong>{consultationInfo.title}</strong>
          </Link>
        </div>
      </td>
      <td>
        <div className="d-flex align-items-center">
          <span>{consultationInfo.area}</span>
        </div>
      </td>
      <td>
        <div className="d-flex align-items-center">
          <span>{userName ? userName : consultationInfo.userName}</span>
        </div>
      </td>

      <td>
        <div className="d-flex align-items-center">
          <span>
            {dateString
              ? convertDateString(consultationInfo.createDate)
              : convertDashToDot(consultationInfo.createDate)}
          </span>
        </div>
      </td>
      <td>
        <div className="d-flex align-items-center">
          <Link to="/sc-ok/pro-detail" className="mr-4pt">
            <strong>
              {expertName ? expertName : consultationInfo.expertName}
            </strong>
          </Link>
        </div>
      </td>
      <td>
        <small className="text-50">
          {getConsultationState(consultationInfo.consultationState)}
        </small>
      </td>
      {/*
      <td>
        <small className="text-50">{getState(consultationInfo.state)}</small>
      </td>
       */}
    </tr>
  );
};

export default OnlineConsultationListItem;
