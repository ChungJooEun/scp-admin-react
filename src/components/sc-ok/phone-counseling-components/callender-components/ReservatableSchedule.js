import React from "react";

const ReservatableSchedule = () => {
  return (
    <a className="d-flex flex-column border-1 rounded bg-point mt-10 px-8pt py-4pt lh-1">
      <small>
        <strong className="js-lists-values-name text-black-100">전문가2</strong>
      </small>
      <small className="text-point-50">오후 01:30</small>
      <small className="text-point-50">예약 중</small>
    </a>
  );
};

export default ReservatableSchedule;
