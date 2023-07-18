import { ArrowDown2 } from "iconsax-react";
import Head from "next/head";
import React from "react";

import { ActivitiesTable } from "@/activities/activities-table";
import { FilterContainer } from "@/activities";
import { Wrapper } from "@/layout";

function Activities() {
  return (
    <>
      <Head>
        <title>UACS | Activity Log</title>
      </Head>
      <Wrapper
        text="Logs"
        pages="Activities"
        icon={<ArrowDown2 size="16" color="#292D32" />}
      >
        <div className="pt-8 px-[clamp(0.75rem,1.6vw,1.5rem)] overflow-auto flex flex-col gap-10">
          <FilterContainer />
          <div className="overflow-auto">
            <ActivitiesTable />
          </div>
        </div>
      </Wrapper>
    </>
  );
}

export default Activities;
