import { FilterInput } from "@/activities/filter-input";
import { BtnwithIcon } from "@/shared";
import React, {useState} from "react";
import { ComXRounded } from "./comX-rounded";
import Image from "next/image";
import Link from "next/link";
import { Button, Modal, TextInput } from "@mantine/core";
import { SearchNormal1 } from "iconsax-react";
import { FilterIcon } from "@/activities/filter-icon";
import { CreateSp } from "@/modals";


export const SpList1 = () => {
  const [opened, setOpened] = useState(false)
  return (
    <div className="pt-8 px-[clamp(0.75rem,1.6vw,1.5rem)] flex flex-col gap-10">
      <div className="flex flex-col gap-10">
        <div className="flex justify-between items-center ">
          <h3 className="text-base font-semibold text-uacs-eneutral-11">
            Total Service Provider (50)
          </h3>

          {/* <div className="flex gap-4">
            <FilterInput />
            <BtnwithIcon
              text="New Service Provider"
              className="!px-4 !py-4"
              icon="/dashboard/plus.png"
            />
          </div> */}

          

<div className="flex gap-4">
            <div className="flex ">
                <TextInput 
                  icon={
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
            <Button onClick={() => setOpened(true)}
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
        <CreateSp opened={opened} setOpened={setOpened}/>

        {/* Sp Cards */}
        <div className=" bg-white rounded-[20px] border-[0.3px]  border-[#EBEBEB]  gap-20 p-5 sp-card-shadow flex {">
          <div className="flex gap-8">
            {/* logo */}
            <div className="gap-8">
              <div className="flex  relative max-w-max">
                <Image
                  src="/comx-round.svg"
                  width="80"
                  height="80"
                  alt="comx"
                />
                <div className=" border border-uacs-light-03 bg-uacs-success rounded-full h-4 w-4 absolute left-[3.7rem] bottom-3 "></div>
              </div>
            </div>

            {/* Card list */}
            <div className="flex gap-12 items-center">
              <div className="flex flex-col gap-[11px]">
                <p className=" text-uacs-primary-70 text-xs font-normal ">
                  Service Provider
                </p>
                <h2 className=" text-uacs-eneutral-8 font-bold text-sm">
                  ComX Admin
                </h2>
              </div>

              <div className="flex flex-col gap-[11px]">
                <p className=" text-uacs-primary-70 text-xs font-normal ">
                  URL
                </p>
                <Link href="www.comx.afexnigeria.com">
                  {" "}
                  <h2 className=" text-uacs-eneutral-8 font-bold text-sm">
                    ComX Admin
                  </h2>
                </Link>
              </div>

              <div className="flex flex-col gap-[11px]">
                <p className=" text-uacs-primary-70 text-xs font-normal ">
                  Members with Permission
                </p>
                <h2 className=" text-uacs-eneutral-8 font-bold text-sm">420</h2>
              </div>

              <div className="flex flex-col gap-[11px]">
                <p className=" text-uacs-primary-70 text-xs font-normal ">
                  Date Created
                </p>
                <h2 className=" text-uacs-eneutral-8 font-bold text-sm">
                  May 04, 2022
                </h2>
              </div>
            </div>
          </div>

{/* image list */}
             <div>
                <div className="border-2 border-white bg-[#FFC700] h-9 w-9 py-2 flex justify-center rounded-full items-center">
                    <h2 className="text-white text-sm font-semibold"> A</h2>
                </div>

             </div>

        </div>
      </div>
    </div>
  );
};
