import React from "react";
import { Link } from "react-router-dom";

const AgencyListItem = () => {
  return (
    <tr>
      <td>
        <div className="d-flex align-items-center text-align-center">
          <span>10</span>
        </div>
      </td>
      <td>
        <div className="d-flex align-items-center">
          <Link to="/agency/agency-detail" className="mr-4pt">
            <strong>기관/단체명입니다</strong>
          </Link>
        </div>
      </td>
      <td>
        <div className="d-flex align-items-center">
          <span>기관주소</span>
        </div>
      </td>
      <td>
        <div className="d-flex align-items-center">
          <span>000-0000-0000</span>
        </div>
      </td>
      <td>
        <div className="d-flex align-items-center">
          <span>12</span>
        </div>
      </td>
      <td>
        <div className="d-flex align-items-center">
          <span>12</span>
        </div>
      </td>
      <td>
        <div className="d-flex align-items-center">
          <span>2021.01.01</span>
        </div>
      </td>
      <td>
        <div className="d-flex align-items-center">
          <span>2021.01.01</span>
        </div>
      </td>
    </tr>
  );
};

export default AgencyListItem;
