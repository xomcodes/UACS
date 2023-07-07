import { GrantAccess } from "@/access-management";
import { FilterContainer } from "@/activities";
import { FilterInput } from "@/activities/filter-input";
import { FilterLeftText } from "@/activities/filter-left-text";
import { BtnwithIcon } from "@/shared";
import { ArrowLeft2 } from "iconsax-react";
import React from "react";

export const SpEmptyList = ( ) => {
  return (
    <div className="pt-8 px-[clamp(0.75rem,1.6vw,1.5rem)] flex flex-col gap-10">
      <div className="flex flex-col gap-10">
        <div className="flex justify-between items-center ">
          <h3 className="text-base font-semibold text-uacs-eneutral-11">
            Total Service Provider (50)
          </h3>

          <div className="flex gap-4">
            <FilterInput />
            <BtnwithIcon text="New Service Provider" className="!px-4 !py-4" icon="/dashboard/plus.png" />
          </div>
        </div>
        <GrantAccess className="!h-[77vh] " />
      </div>

      {/* //    <FilterContainer/> */}
    </div>
  );
};
