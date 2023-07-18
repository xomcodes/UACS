import React from "react";
import Head from "next/head";


import { Wrapper } from "@/layout/wrapper";
import { DashboardOverview } from "@/dashboard/dashboard-overview";

function Dashboard() {
  return (
    <>
     <Head>
   <title>UACS | Dashboard</title>
   </Head>
      <Wrapper text="Dashboard">
        <DashboardOverview />
      </Wrapper>
    </>
  );
}

export default Dashboard;
