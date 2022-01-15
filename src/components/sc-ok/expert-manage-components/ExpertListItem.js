import React from "react";
import { Link } from "react-router-dom";

const ExpertListItem = ({ expertInfo, no }) => {
  return (
    <tr>
      <td>
        <div className="d-flex align-items-center text-align-center">
          <span>{no}</span>
        </div>
      </td>
      <td>
        <div className="d-flex align-items-center">
          <Link to="/sc-ok/pro-detail" className="mr-4pt">
            <strong>{expertInfo.name}</strong>
          </Link>
        </div>
      </td>
      <td>
        <div className="d-flex align-items-center">
          <span>{expertInfo.adminId}</span>
        </div>
      </td>
      <td>
        <div className="d-flex align-items-center">
          <span>{expertInfo.area}</span>
        </div>
      </td>
      <td>
        <div className="d-flex align-items-center">
          <span>{expertInfo.createdAt}</span>
        </div>
      </td>
      <td>
        <div className="d-flex align-items-center">
          <span>{expertInfo.latestAt}</span>
        </div>
      </td>
    </tr>
  );
};

export default ExpertListItem;
