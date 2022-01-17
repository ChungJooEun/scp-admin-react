import React from "react";
import { Link } from "react-router-dom";

const convertDateFormat = (dateString) => {
  let dateAry = dateString.split(" ");

  let result = dateAry[0].replace(/-/gi, ".");

  // let time = dateAry[1].split(":");
  // result += ` ${time[0]}시${time[1]}분${time[2]}초`;
  // result += ` ${dateAry[1]}`;

  return result;
};

const getState = (state) => {
  switch (state) {
    case "O":
      return "공개";
    case "C":
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
          <span>{convertDateFormat(consultationInfo.createDate)}</span>
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
      <td>
        <small className="text-50">{getState(consultationInfo.state)}</small>
      </td>
    </tr>
  );
};

export default OnlineConsultationListItem;
