import React from "react";


import { Wrapper } from "@/layout/wrapper";
import { DashboardOverview } from "@/dashboard/dashboard-overview";
import { SpList1 } from "@/service-provider";
import { AccessManagement1 } from "@/access-management/access-management1";
import { EmptyState } from "@/access-management";
import { useState } from "react";

function AccessManagement() {
  const [opened, setOpened] = useState(false)
  return (
    <>
      <Wrapper text="Access Management">

      {/* accessManager.length ?  */}

      <AccessManagement1/>
           
      {/* <section className='px-[clamp(0.75rem,1.6vw,1.5rem)] py-[30px] flex-1'>
        <EmptyState onClick={() => setOpened(true)} btnText='Grant Access' className="bg-white "/>
        </section>  */}
        
      {/* <section className='px-[clamp(0.75rem,1.6vw,1.5rem)] py-[30px] flex-1'>
        <EmptyState onClick={() => setOpened(true)} btnText='Grant Access' className="bg-white "/>
        </section> */}

      {/* <AccessManagement1/> */}
      </Wrapper>
    </>
  );
}

export default AccessManagement;
