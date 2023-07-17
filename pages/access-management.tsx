import React from "react";


import { Wrapper } from "@/layout/wrapper";
import { DashboardOverview } from "@/dashboard/dashboard-overview";
import { SpList1 } from "@/service-provider";
import { AccessManagement1 } from "@/access-management/access-management1";
import { EmptyState } from "@/access-management";
import { useState } from "react";
import Head from "next/head";

function AccessManagement() {
  const [opened, setOpened] = useState(false)
  return (
    <>
 <Head>
   <title>UACS | Access Management</title>
   </Head>

      <Wrapper text="Access Management">

    

      <AccessManagement1/>
     
      </Wrapper>
    </>
  );
}

export default AccessManagement;
