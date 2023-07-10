import React from "react";

import { DashboardActivities } from "./dashboard-activities";
import { StatisticCard } from "./statistic-card";
import { ServiceProvider } from "./service-provider";

export const DashboardOverview = () => {
  return (
    <section className=" grid grid-cols-[1fr,347px] overflow-auto  px-[clamp(0.75rem,1.6vw,1.5rem)] pt-8  gap-6">
      <div className="flex flex-col overflow-auto gap-4 ">
        <StatisticCard />

        {/* Activities */}
        <DashboardActivities />
      </div>

      {/* The right side of the dashboard */}
      <ServiceProvider />
    </section>
  );
};
