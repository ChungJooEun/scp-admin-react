import React from "react";
import ActivistStat from "./stat-components/ActivistStat";
import ActivityCount from "./stat-components/ActivityCount";
import InstitutionStat from "./stat-components/InstitutionStat";
import SeochoOkConsulting from "./stat-components/SechoOkConsulting";

const StatComponent = () => {
  return (
    <>
      <ActivityCount />

      <ActivistStat type="part" title="활동자" />
      <ActivistStat type="bene" title="수요자" />

      <InstitutionStat />

      <SeochoOkConsulting type="online" title="서초OK생활 온라인 상담" />
      <SeochoOkConsulting type="phone" title="서초OK생활 전화 상담" />
    </>
  );
};

export default StatComponent;
