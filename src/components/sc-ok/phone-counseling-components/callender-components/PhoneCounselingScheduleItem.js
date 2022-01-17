import React from "react";
import { Link } from "react-router-dom";

const PhoneCounselingScheduleItem = ({ scheduleInfo }) => {
  return (
    <Link
      className={
        scheduleInfo.statusId === 0
          ? "d-flex flex-column border-1 rounded bg-point mt-10 px-8pt py-4pt lh-1"
          : "d-flex flex-column border-1 rounded bg-light mt-10 px-8pt py-4pt lh-1"
      }
      to={
        scheduleInfo.statusId === 1
          ? `/sc-ok/phone-consultation-detail/${scheduleInfo.idx}`
          : null
      }
      // to={`/sc-ok/edit-consultation/${scheduleInfo.idx}`}
    >
      <small>
        <strong className="js-lists-values-name text-black-100">
          {scheduleInfo.expertName}
        </strong>
      </small>
      <small className="text-black-50">{scheduleInfo.time}</small>
      <small className="text-black-50">{scheduleInfo.statusName}</small>
    </Link>
  );
};

export default PhoneCounselingScheduleItem;
