import React from "react";
import { Link } from "react-router-dom";
import { convertDateFormat } from "../../../util/date-convert-function";

const AgencyListItem = ({ agencyInfo, no }) => {
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
            to={`/agency/agency-detail/${agencyInfo.id}`}
            className="mr-4pt"
          >
            <strong>{agencyInfo.name}</strong>
          </Link>
        </div>
      </td>
      <td>
        <div className="d-flex align-items-center">
          <span>{agencyInfo.address}</span>
        </div>
      </td>
      <td>
        <div className="d-flex align-items-center">
          <span>{agencyInfo.contactInfo}</span>
        </div>
      </td>
      <td>
        <div className="d-flex align-items-center">
          <span>{agencyInfo.maximumNumberOfPeople}</span>
        </div>
      </td>
      <td>
        <div className="d-flex align-items-center">
          <span>{agencyInfo.registeredActivities}</span>
        </div>
      </td>
      <td>
        <div className="d-flex align-items-center">
          <span>{convertDateFormat(agencyInfo.createDate)}</span>
        </div>
      </td>
      <td>
        <div className="d-flex align-items-center">
          <span>{agencyInfo.recentActivityDate}</span>
        </div>
      </td>
    </tr>
  );
};

export default AgencyListItem;
