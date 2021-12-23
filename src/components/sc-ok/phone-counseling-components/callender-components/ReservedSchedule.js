import React from "react";

const ReservedSchedule = () => {
  return (
    <a
      className="d-flex flex-column border-1 rounded bg-light mt-10 px-8pt py-4pt lh-1"
      href="../sc-ok/phone-consultation-detail.html"
    >
      <small>
        <strong className="js-lists-values-name text-black-100">전문가2</strong>
      </small>
      <small className="text-black-50">오후 01:30</small>
      <small className="text-black-50">예약마감</small>
    </a>
  );
};

export default ReservedSchedule;
