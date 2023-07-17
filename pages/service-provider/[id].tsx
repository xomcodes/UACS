import { Wrapper } from "@/layout";
import { SpOverviewEmpty } from "@/service-provider";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import useSpDetails, { ISPDetails } from "../../hooks/use-sp-details";
import { LoadingOverlay } from "@mantine/core";
import Head from "next/head";

function Provider() {
  const { spDetails, getSp, loading } = useSpDetails();
  return (

    <>
        <Head>
   <title>UACS | {spDetails?.name} </title>
   </Head>
    <Wrapper text={spDetails?.name as string}>
      <SpOverviewEmpty getSp={getSp} spDetails={spDetails as ISPDetails}  />
    </Wrapper>
    <LoadingOverlay visible={loading} />
    </>
  );
}

export default Provider;
