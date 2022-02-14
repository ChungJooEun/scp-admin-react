import React from "react";
import { Link } from "react-router-dom";

const AgencyRequestListItem = ({ orgInfo, no }) => {
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
            to={`/agency/registration-request-detail/${orgInfo.id}`}
            className="mr-4pt"
          >
            <strong>{orgInfo.name}</strong>
          </Link>
        </div>
      </td>
      <td>
        <div className="d-flex align-items-center">
          <span>{orgInfo.address}</span>
        </div>
      </td>
      <td>
        <div className="d-flex align-items-center">
          <span>{orgInfo.contactInfo}</span>
        </div>
      </td>
      <td>
        <div className="d-flex align-items-center">
          <span>{orgInfo.createDate}</span>
        </div>
      </td>
      <td>
        <small className="text-50">
          {
            {
              W: "대기중",
              N: "기각",
              O: "기관 생성",
            }[orgInfo.state]
          }
        </small>
      </td>
    </tr>
  );
};

export default AgencyRequestListItem;
