import React from "react";
import { Button, Popover } from "@mantine/core";
import { Add, Edit, Eye } from "iconsax-react";


import { Activate } from "./icons/activate";

export const Inactive = () => {
  return (
    <Popover
      position="bottom"
      classNames={{
        dropdown: "rounded-lg p-0 !w-fit pop-shadow",
      }}
    >
      <Popover.Target>
        <Button>Toggle popover</Button>
      </Popover.Target>
      <Popover.Dropdown>
        <div className="flex flex-col cursor-pointer rounded-lg ">
          <div
            className=" flex gap-2 py-[10px] px-4"
            //   onClick={() => setOpen(false)}
          >
            <Edit size="16" color="#5E606A" variant="Outline" />
            <h2 className=" text-uacs-eneutral-8 text-xs font-medium">
              Update
            </h2>
          </div>

          <div className=" flex gap-2 py-[10px] px-4">
            <Eye size="16" color="#8F9198" variant="Outline" />
            <h2 className="text-uacs-eneutral-8 text-xs font-medium">Eye</h2>
          </div>

          <div className=" flex gap-2 py-[10px] px-4">
            <Add size="16" color="#8F9198" variant="Bold" />
            <h2 className="text-uacs-eneutral-8 text-xs font-medium">
              Add memebers
            </h2>
          </div>

          <div className=" flex gap-2 py-[10px] px-4">
            <Activate />
            <h2 className="text-uacs-success  text-xs font-bold">Activate</h2>
          </div>
        </div>
      </Popover.Dropdown>
    </Popover>
  );
};
