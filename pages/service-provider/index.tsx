import { Wrapper } from "@/layout";
import { SecurityLog } from "@/logs";
import {
  SpEmptyList,
  SpList1,
} from "@/service-provider";
import React, { useState, useEffect } from "react";
import useServiceProviders from "../../hooks/use-service-providers";

function ServiceProvider() {
  const { sp, getSp } = useServiceProviders();

  return (
    <Wrapper text="Service Provider">
      {sp.length ? <SpList1 getSp= {getSp}  sp={sp} /> : <SpEmptyList  />}

      {/* <SpList1/> */}
      {/* <SpOverviewEmpty/> */}
    </Wrapper>
  );
}

export default ServiceProvider;
