import React from "react";
import ActivistStat from "./stat-components/ActivistStat";
import ActivityCount from "./stat-components/ActivityCount";
import InstitutionStat from "./stat-components/InstitutionStat";
import SeochoOkConsulting from "./stat-components/SechoOkConsulting";

const StatComponent = ({period}) => {
  return (
    <>
      <ActivityCount period={period}/>

      <ActivistStat type="part" title="활동자" period={period}/>
      <ActivistStat type="bene" title="수요자" period={period}/>

      <InstitutionStat period={period}/>

      <SeochoOkConsulting type="online" title="서초OK생활 온라인 상담" period={period}/>
      <SeochoOkConsulting type="phone" title="서초OK생활 전화 상담" period={period}/>
    </>
  );
};

export default StatComponent;
