import { Button } from "@/shared";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { InactiveDot } from "./inactive-dot";
import AccessManagement from "../../pages/access-management";
import { EmptyState } from "@/access-management";
import { Copy, Edit2 } from "iconsax-react";
import { Modal, Switch } from "@mantine/core";
import { SpOverviewTable } from "./sp-overview-table";
import { AddMember } from "@/modals";

export const SpOverviewEmpty = () => {
  const [opened, setOpened] = useState(false);
  return (
    <div className="flex flex-col gap-10 flex-1">
      <section className="px-[clamp(0.75rem,1.6vw,1.5rem)] py-[30px] flex flex-col gap-[13px]">
        <div className="bg-white justify-center items-center py-8 rounded-lg grid  grid-cols-[auto,1fr] gap-8 card-shadow px-6">
          <div className="border-2 border-[#F5F5F6] flex  justify-center w-[191px] rounded-lg">
            <Image width={152} height={152} alt="comX" src="/comX.png" />
          </div>

          <div className="grid grid-cols-[repeat(4,1fr)] gap-10">
            <div className="flex flex-col gap-10 justify-between">
              <div className="flex-col flex gap-3">
                <h4 className=" text-uacs-primary-70 font-normal text-base">
                  Name
                </h4>
                <p className="text-base font-semibold text-[#535362]">
                  ComX Admin
                </p>
              </div>

              <div className="flex-col flex gap-3">
                <h2 className=" text-uacs-primary-70 font-normal text-base">
                  Date created
                </h2>
                <p className="text-base font-semibold text-[#535362]">
                  23 May 2023
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-10 justify-between">
              <div className="flex-col flex gap-3">
                <h4 className=" text-uacs-primary-70 font-normal text-base">
                  Website URL
                </h4>
                <a
                  target="_blank"
                  style={{ wordWrap: "break-word" }}
                  className="underline max-w-[200px]"
                  href="https://www.comxadmin.afexnigeria.com"
                >
                  <p className="text-[#535362] text-base font-semibold ">
                    https://www.comxadmin.afexnigeria.com
                  </p>
                </a>
              </div>

              <div className="flex-col flex gap-3">
                <h2 className=" text-uacs-primary-70 font-normal text-base">
                  Status
                </h2>
                <div className="flex gap-1 px-2 rounded-lg bg-[#E7F9F0] items-center max-w-fit">
                  <InactiveDot color="#0DBF66" />
                  <p className="text-[#076D3A] text-sm font-normal">Active</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-10 justify-between">
              <div className="flex-col flex gap-3">
                <h4 className=" text-uacs-primary-70 font-normal text-base">
                  Staff with permission
                </h4>

                <p className="text-[#535362] text-base font-semibold ">250</p>
              </div>

              <div className="flex gap-5">
                <span className="gap-2 border border-uacs-eneutral-6 bg-uacs-eneutral-3 edit-shadow px-4 py-2 flex justify-center items-center rounded-lg max-w-fit ">
                  <Edit2 size="20" color="#4A4C58" />
                  <h4 className="text-base text-uacs-eneutral-9 font-normal">
                    Edit
                  </h4>
                </span>

                <span className="gap-2 border border-[#EBEEFC] edit-shadow px-4 py-2 flex justify-center items-center rounded-lg  max-w-fit">
                  <h4 className="text-base text-uacs-ablue-5 font-normal whitespace-nowrap">
                    API Key
                  </h4>
                  <Copy size="16" color="#5C70E3" />
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-10 justify-between">
              <div className="flex-col flex gap-3">
                <Switch />
              </div>

              <span className="gap-2   bg-uacs-ared-1 cursor-pointer edit-shadow px-4 py-2 flex justify-center items-center rounded-lg max-w-fit ">
                <h4 className="text-base whitespace-nowrap text-uacs-ared-7 font-normal">
                  Secret Key
                </h4>
                <Copy size="16" color="#BF2018" />
              </span>
            </div>
          </div>
        </div>
      </section>

      <div className="flex justify-center items-center flex-1">
        <div>
          {/* <SpOverviewTable/> */}

          <EmptyState
            onClick={() => setOpened(true)}
            btnText="Add a Staff"
            className="!bg-transparent "
          />
        </div>
      </div>
      <AddMember opened={opened} setOpened={setOpened} />
    </div>
  );
};
