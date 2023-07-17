import { Wrapper } from "@/layout";
import { SecurityLog } from "@/logs";
import { SpEmptyList, SpList1 } from "@/service-provider";
import React, { useState, useEffect } from "react";
import useServiceProviders from "../../hooks/use-service-providers";
import Head from "next/head";
import { LoadingOverlay } from "@mantine/core";

function ServiceProvider() {
  const { sp, getSp, loading } = useServiceProviders();

  return (
    <>
      <Head>
        <title>UACS | Service Provider</title>
      </Head>
      <Wrapper text="Service Provider">
        {sp.length ? <SpList1 getSp={getSp} sp={sp} /> : <SpEmptyList />}

        {/* <SpList1/> */}
        {/* <SpOverviewEmpty/> */}
      </Wrapper>
      <LoadingOverlay visible={loading} />
    </>
  );
}

export default ServiceProvider;
