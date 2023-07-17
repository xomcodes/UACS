import React from "react";


import { Wrapper } from "@/layout/wrapper";
import { DashboardOverview } from "@/dashboard/dashboard-overview";
import Head from "next/head";

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
