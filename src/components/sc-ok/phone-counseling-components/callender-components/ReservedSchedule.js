import React from "react";
import { Link } from "react-router-dom";

const ReservedSchedule = () => {
  return (
    <Link
      className="d-flex flex-column border-1 rounded bg-light mt-10 px-8pt py-4pt lh-1"
      to="/sc-ok/phone-consultation-detail"
    >
      <small>
        <strong className="js-lists-values-name text-black-100">전문가2</strong>
      </small>
      <small className="text-black-50">오후 01:30</small>
      <small className="text-black-50">예약마감</small>
    </Link>
  );
};

export default ReservedSchedule;
