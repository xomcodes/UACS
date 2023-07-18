import React from "react";
import { useState } from "react";
import Head from "next/head";


import { Wrapper } from "@/layout/wrapper";
import { AccessManagement1 } from "@/access-management/access-management1";


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
