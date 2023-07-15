import { Wrapper } from "@/layout";
import { SpOverviewEmpty } from "@/service-provider";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";

function Provider() {
  return (
    <Wrapper text="ComX">
      <SpOverviewEmpty />
    </Wrapper>
  );
}

export default Provider;
