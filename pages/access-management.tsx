import React from "react";


import { Wrapper } from "@/layout/wrapper";
import { DashboardOverview } from "@/dashboard/dashboard-overview";
import { GrantAccess } from "@/access-management";

function AccessManagement() {
  return (
    <>
      <Wrapper text="Access Management">
        
      <section className='px-[clamp(0.75rem,1.6vw,1.5rem)] py-[30px]'>
        <GrantAccess className="bg-white h-[87vh]"/>
        </section>
      </Wrapper>
    </>
  );
}

export default AccessManagement;
