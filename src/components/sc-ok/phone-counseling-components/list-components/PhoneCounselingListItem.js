import React from "react";

const PhoneCounselingListItem = () => {
  return (
    <tr>
      <td>
        <div className="d-flex align-items-center text-align-center">
          <span>10</span>
        </div>
      </td>
      <td>
        <div className="d-flex align-items-center">
          <a href="../sc-ok/phone-consultation-detail.html" className="mr-4pt">
            <strong>상담제목</strong>
          </a>
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
          <a href="../sc-ok/pro-detail.html" className="mr-4pt">
            <strong>담당자명</strong>
          </a>
        </div>
      </td>
      <td>
        <small className="text-50">대기 중</small>
      </td>
    </tr>
  );
};

export default PhoneCounselingListItem;
