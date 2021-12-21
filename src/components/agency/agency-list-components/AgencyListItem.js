import React from "react";

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
          <a
            href="../agency/registration-request-detail.html"
            className="mr-4pt"
          >
            <strong>기관 단체명입니다.</strong>
          </a>
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
          <span>2021.01.01</span>
        </div>
      </td>
      <td>
        <small className="text-50">대기 중</small>
      </td>
    </tr>
  );
};

export default AgencyListItem;
