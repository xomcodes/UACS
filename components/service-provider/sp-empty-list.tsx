import { EmptyState} from "@/access-management";
import { FilterIcon } from "@/activities/filter-icon";
import { FilterInput } from "@/activities/filter-input";
import { BtnwithIcon } from "@/shared";
import { usePortal } from "@ibnlanre/portal";
import { Button, TextInput } from "@mantine/core";
import { SearchNormal1 } from "iconsax-react";
import Image from "next/image";
import React from "react";

export const SpEmptyList = () => {
  const [totalSp, setTotalSp] = usePortal<number>("total-sp");
  return (
    <div className="pt-8 px-[clamp(0.75rem,1.6vw,1.5rem)]  flex-1 flex flex-col gap-10">
      <div className="flex flex-col gap-10  flex-1">
        <div className="flex justify-between items-center ">
          <h3 className="text-base font-semibold text-uacs-eneutral-11">
            Total Service Provider ({totalSp})
          </h3>

          <div className="flex gap-4">
            <div className="flex ">
                <TextInput
                  rightSection={
                    <SearchNormal1
                      size="16"
                      color="#C1C2C6"
                      variant="Outline"
                    />
                  }
                  classNames={{
                    input:
                      "bg-white border-none h-10 rounded-none rounded-tl-lg rounded-bl-lg placeholder:text-xs w-[clamp(132px,19vw,276px)] placeholder:font-medium text-uacs-eneutral-6  ",
                  }}
                  placeholder="Service Provider"
                />

              <div className="px-2 bg-[#DADADD] flex rounded-tr-lg items-center  rounded-br-lg ">
                <FilterIcon />
              </div>
            </div>
            <Button
              leftIcon={
                <Image
                  src="/dashboard/plus.png"
                  width="18"
                  height="18"
                  alt="plus"
                />
              }
              className="bg-uacs-ared-7 text-sm rounded-lg hover:bg-red-800 h-10 w-fit"
              classNames={{
                inner: "gap-[10px]"
              }}
            >
              New Service Provider
            </Button>
          </div>
        </div>

        <EmptyState btnText="Create Service Provider" />
      </div>

      {/* //    <FilterContainer/> */}
    </div>
  );
};
