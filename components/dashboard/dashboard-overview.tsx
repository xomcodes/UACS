import React from "react";

import { AccessCard1 } from "./access-card1";
import { AccessCard2 } from "./access-card2";
import { DashboardActivities } from "./dashboard-activities";
import { StatisticCard } from "./statistic-card";

export const DashboardOverview = () => {
  return (
    <section className=" grid grid-cols-[1fr,347px]  px-[clamp(0.75rem,1.6vw,1.5rem)] pt-8 ">
      <div className="flex- flex-col ">
        
        <StatisticCard/>

        {/* Activities */}
            <DashboardActivities/>
       
      </div>
    </section>
  );
};

