import React from "react";
import Image from "next/image";
import { ArrowLeft2, NotificationBing } from "iconsax-react";

import { DropDown } from "./drop-down";

export const DashboardHeader = ({
  children,
  pages,
  text,
  icon,
}: {
  children: React.ReactNode;
  pages?: string;
  text: string;
  icon?: React.ReactNode;
}) => {
  return (
    <div className=" bg-uacs-eneutral-3 flex flex-col">
      <div className=" flex justify-between bg-white  px-8 border-l border-l-[#EAEAEA] ">
        <div className="flex gap-3 p-[18px] ">
          <h4 className="border-r-2 border-[#E64D45] pr-2 text-base font-semibold font-[Switzer] ">
            Unified Access Control System
          </h4>
          <div className="flex gap-3">
            <h4 className=" font-medium font-[Switzer]  text-base text-uacs-eneutral-7">
              {text}
            </h4>
            <div className="-rotate-90">{icon}</div>
          </div>
          <h4 className=" font-medium font-[Switzer]  text-base text-uacs-eneutral-7">
            {pages}
          </h4>
        </div>

        <div className="flex gap-8  border-l border-l-[#EAEAEA] pl-[3.5rem] items-center ">
          <div className="relative">
            <NotificationBing size="30" color="#8F8E91" variant="Outline" />
            <div className=" bg-[#C81107] absolute w-2 h-2 rounded-full right-0 top-[2px] left-5 "></div>
          </div>

          <div className="flex gap-4 items-center">
            <Image
              src="/dashboard/profile-pix.png"
              width="52"
              height="52"
              alt="profile-pix"
              className="rounded-full"
            />
            <div className="flex flex-col gap-1">
              <h3 className="font-[Switzer] text-sm font-semibold text-uacs-eneutral-11">
                Joshua Simire
              </h3>
              <p className="font-[Switzer] text-xs text-uacs-eneutral-7 font-normal">
                Admin
              </p>
            </div>
            <DropDown />
          </div>
        </div>
      </div>
      {/* Inner */}
      {children}
    </div>
  );
};
