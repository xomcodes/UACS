import React, { useState } from "react";
import Image from "next/image";
import { SearchNormal1 } from "iconsax-react";
import { Button, TextInput } from "@mantine/core";
import { usePortal } from "@ibnlanre/portal";

import { FilterIcon } from "@/activities/filter-icon";
import { CreateSp } from "@/modals";
import { IServiceProvider } from "./sp-list1";

export const SpEmptyList = ({
  sp,
  getSp,
}: {
  sp: IServiceProvider[];
  getSp: () => void;
}) => {
  const [totalSp, setTotalSp] = usePortal<number>("total-sp");
  const [opened, setOpened] = useState(false);
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
                  <SearchNormal1 size="16" color="#C1C2C6" variant="Outline" />
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
              onClick={() => setOpened(true)}
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
                inner: "gap-[10px]",
              }}
            >
              New Service Provider
            </Button>
          </div>
        </div>

        <div className="  flex justify-center items-center bg-white h-full rounded-lg">
          <div className="flex flex-col gap-8 items-center">
            <Image
              src="/access-m-images/Vector.png"
              width="176"
              height="176"
              alt="nostaff"
            />
            <div className="flex flex-col items-center justify-center gap-1">
              <h3 className="text-xl font-semibold text-uacs-primary-90 ">
                No Service Provider Created Yet
              </h3>
              <p className="text-sm font-normal  max-w-[308px] text-uacs-cneutral-7 text-center">
                A list of service providers created will appear here
              </p>
            </div>
            <Button
              onClick={() => setOpened(true)}
              className="!bg-uacs-ared-7 !rounded-lg hover:!bg-red-800 !h-[46px]  !text-white !text-sm  !w-fit "
            >
              Create Service Provider
            </Button>
          </div>
        </div>
      </div>
      <CreateSp opened={opened} setOpened={setOpened} getSp={getSp} />
    </div>
  );
};
