import { FilterContainer } from "@/activities";
import { Wrapper } from "@/layout";
import { SecurityLog } from "@/logs";
import { ArrowDown2 } from "iconsax-react";
import Head from "next/head";
import React from "react";

function Logs() {
  return (
    <>
      <Head>
        <title>UACS | Activity Log</title>
      </Head>
      <Wrapper
        text="Logs"
        pages="Security"
        icon={<ArrowDown2 size="16" color="#292D32" />}
      >
        <div className="pt-8 px-[clamp(0.75rem,1.6vw,1.5rem)] overflow-auto flex flex-col gap-10">
          <FilterContainer />
          <div className="overflow-auto">
            <SecurityLog />
          </div>
        </div>
      </Wrapper>
    </>
  );
}

export default Logs;
