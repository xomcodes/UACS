import React, { useState } from "react";
import Link from "next/link";
import { Button, Modal, TextInput } from "@mantine/core";
import { SearchNormal1 } from "iconsax-react";
import { FilterIcon } from "@/activities/filter-icon";
import { CreateSp } from "@/modals";
import Image from "next/image";
import { Active } from "@/pop-ups";

export interface IServiceProvider {
  name: string;
  website_url: string;
  staffs_with_permission: { first_name: string }[];
  date: string;
  test_picture_url: string;
  id: number;
  is_active: boolean;
  picture: string
}


const avatarColors =[
 '#FFC700', '#009EF7','#F1416C', '#181C32', '#181C32', '#BF2018'
]

export const SpList1 = ({
  sp,
  getSp,
}: {
  sp: IServiceProvider[];
  getSp: () => void;
}) => {
  const [opened, setOpened] = useState(false);
  
  return (
    <div className="pt-8 px-[clamp(0.75rem,1.6vw,1.5rem)] flex flex-col gap-10 overflow-auto">
      <div className="flex flex-col gap-10 overflow-auto">
        <div className="flex justify-between items-center ">
          <h3 className="text-base font-semibold text-uacs-eneutral-11">
            Total Service Provider ({sp?.length})
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
        <CreateSp opened={opened} setOpened={setOpened} getSp={getSp} />

        <div className="flex flex-col gap-4 overflow-auto">
          {sp?.map((item) => (
            <div
              key={item.id}
              className=" grid grid-cols-[1fr,300px] justify-center bg-white rounded-[20px] border-[0.3px]  border-[#EBEBEB]  gap-20 p-5 sp-card-shadow "
            >
              {/* left */}
              <div className="grid grid-cols-[60px,1fr] gap-8 items-center">
                <img
                  // src="/comx-round.svg"
                  src={item.test_picture_url}
                  width={80}
                  height={80}
                  alt="comX"
                />

                <div className=" grid grid-cols-[repeat(4,1fr)] gap-12">
                  <div className="flex flex-col gap-[11px] ">
                    <p className=" text-uacs-primary-70 text-xs font-normal ">
                      Service Provider
                    </p>
                    <h2 className=" text-uacs-eneutral-8 font-bold text-sm  w-[130px] ">
                      {item.name}
                    </h2>
                  </div>

                  <div className="flex flex-col gap-[11px] ">
                    <p className=" text-uacs-primary-70 text-xs font-normal ">
                      URL
                    </p>
                    <Link href="www.comx.afexnigeria.com">
                      {" "}
                      <h2
                        className=" text-uacs-eneutral-8 font-bold text-sm w-[160px] "
                        style={{ wordBreak: "break-word" }}
                      >
                        {item.website_url}
                      </h2>
                    </Link>
                  </div>

                  <div className="flex flex-col gap-[11px]">
                    <p className=" text-uacs-primary-70 text-xs font-normal ">
                      Members with Permission
                    </p>
                    <h2 className=" text-uacs-eneutral-8 font-bold text-sm">
                      {item.staffs_with_permission.length}
                    </h2>
                  </div>

                  <div className="flex flex-col gap-[11px]">
                    <p className=" text-uacs-primary-70 text-xs font-normal ">
                      Date Created
                    </p>
                    <h2 className=" text-uacs-eneutral-8 font-bold text-sm">
                      {item.date}
                    </h2>
                  </div>
                </div>
              </div>

              {/* right */}
              <div className="flex flex-col gap-1 justify-between relative">
                <p className="text-uacs-primary-70 text-right mr-[65px] text-xs font-normal">
                  Staff
                </p>

                <div className="flex  gap-6 justify-end  ">
                  <div className="flex">
                    {item?.staffs_with_permission?.map((item, id) => (
                      id < 6 ?
                      <div
                        key={id}
                        style={{background: avatarColors[id]}}
                        className="border-2 ml-[-10px] border-white h-9 w-9 py-[9.5px] px-[12.6px] flex justify-center rounded-full items-center"
                      >
                        <h2 className="text-white text-sm font-semibold">
                          {item?.first_name?.[0]}
                        </h2>
                      </div>
                      : null
                    ))}
                  </div>

                  <Active getSp={getSp} sp={item} spStatus={item?.is_active} spID={item?.id} />
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Sp Cards */}
      </div>
    </div>
  );
};
