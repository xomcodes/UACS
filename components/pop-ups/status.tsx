import React from "react";
import { Popover } from "@mantine/core";

import { AllSp } from "./icons";
import { ActiveSp } from "./icons/active-sp";
import { InactiveSp } from "./icons/inactive-sp";

export const Status = () => {
  return (
    <Popover
      position="bottom"
      classNames={{
        dropdown: "rounded-lg p-0 !w-fit pop-shadow",
      }}
    >
      <Popover.Target>{/* <Button>Toggle popover</Button> */}</Popover.Target>
      <Popover.Dropdown>
        <div className="flex flex-col cursor-pointer">
          <div className=" flex gap-2 py-2 px-4">
            <AllSp />
            <h2 className=" text-uacs-eneutral-9 text-xs font-medium">
              All Service Providers
            </h2>
          </div>

          <div className=" flex gap-2 py-2 px-4">
            <ActiveSp />
            <h2 className="text-[#0DBF66] text-xs font-medium">
              Active Service Providers
            </h2>
          </div>

          <div className=" flex gap-2 py-2 px-4">
            <InactiveSp />
            <h2 className="text-[#9FA19C] text-xs font-medium">
              Inactive Service Providers
            </h2>
          </div>
        </div>
      </Popover.Dropdown>
    </Popover>
  );
};
