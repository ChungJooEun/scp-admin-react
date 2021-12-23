import React from "react";

const DayComponent = ({ day }) => {
  return (
    <small>
      <strong className="js-lists-values-name text-black-100 top-0">
        {day}
      </strong>
    </small>
  );
};

export default DayComponent;
