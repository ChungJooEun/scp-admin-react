import React from "react";
import { Link } from "react-router-dom";

const OnlineConsultationListItem = () => {
  return (
    <tr>
      <td>
        <div className="d-flex align-items-center text-align-center">
          <span>10</span>
        </div>
      </td>
      <td>
        <div className="d-flex align-items-center">
          <Link to="/sc-ok/online-consultation-detail" className="mr-4pt">
            <strong>상담제목</strong>
          </Link>
        </div>
      </td>
      <td>
        <div className="d-flex align-items-center">
          <span>법률/세무/법무/건축/노무</span>
        </div>
      </td>
      <td>
        <div className="d-flex align-items-center">
          <span>성명</span>
        </div>
      </td>

      <td>
        <div className="d-flex align-items-center">
          <span>2021.01.01</span>
        </div>
      </td>
      <td>
        <div className="d-flex align-items-center">
          <Link to="/sc-ok/pro-detail" className="mr-4pt">
            <strong>담당자명</strong>
          </Link>
        </div>
      </td>
      <td>
        <small className="text-50">대기 중</small>
      </td>
      <td>
        <small className="text-50">비공개</small>
      </td>
    </tr>
  );
};

export default OnlineConsultationListItem;
