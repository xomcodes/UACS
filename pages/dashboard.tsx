import React from "react";


import { Wrapper } from "@/layout/wrapper";
import { DashboardOverview } from "@/dashboard/dashboard-overview";

function Dashboard() {
  return (
    <>
      <Wrapper text="Dashboard">
        <DashboardOverview />
      </Wrapper>
    </>
  );
}

export default Dashboard;
