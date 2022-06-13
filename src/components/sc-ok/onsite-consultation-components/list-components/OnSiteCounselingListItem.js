import React from "react";
import { Link } from "react-router-dom";
import convertDashToDot from "../../../../util/date-convert-function";

const OnSiteCounselingListItem = ({
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
            to={`/sc-ok/onsite-consultation-detail/${consultationInfo.idx}`}
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
          <span>{`${convertDashToDot(consultationInfo.registeredDate)} ${
            consultationInfo.registeredTime24
          }`}</span>
        </div>
      </td>
      <td>
        <div className="d-flex align-items-center">
          <Link
            to={`/sc-ok/pro-detail/${consultationInfo.expertIdx}`}
            className="mr-4pt"
          >
            <strong>
              {expertName ? expertName : consultationInfo.expertName}
            </strong>
          </Link>
        </div>
      </td>
    </tr>
  );
};

export default OnSiteCounselingListItem;
