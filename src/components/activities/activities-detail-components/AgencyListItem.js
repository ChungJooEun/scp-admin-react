import React from "react";
import { Link } from "react-router-dom";

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
          <span>{agencyInfo.activityDate}</span>
        </div>
      </td>
      <td>
        <div className="d-flex align-items-center">
          <span> {agencyInfo.recentActivityDate}</span>
        </div>
      </td>
      <td>
        <small className="text-50">
          {
            {
              W: "신청",
              D: "신청완료",
              R: "기각",
              Y: "침여",
              N: "불참",
            }[agencyInfo.state]
          }
        </small>
      </td>
    </tr>
  );
};

export default AgencyListItem;
