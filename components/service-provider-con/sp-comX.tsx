import { Button } from "@/shared";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { InactiveDot } from "./inactive-dot";
import AccessManagement from "../../pages/access-management";
import { GrantAccess } from "@/access-management";
import { Copy, Edit2 } from "iconsax-react";

export const SpComX = () => {
  return (
    <div className="flex flex-col gap-10">
      <section className="px-[clamp(0.75rem,1.6vw,1.5rem)] py-[30px]">
        <div className="bg-white justify-center items-center h-[20vh] rounded-lg grid  grid-cols-[300px,1fr] gap-8 card-shadow px-6">
          <div className="border-2 border-[#F5F5F6] flex  justify-center w-[191px] rounded-lg">
            <Image width={152} height={152} alt="comX" src="/comX.png" />
          </div>

          <div className=" grid gap-10">
            <div className="flex gap-10">
              <span className="grid gap-2">
                <h2 className="text-base font-normal text-uacs-primary-90">
                  Name
                </h2>
                <p className="text-[#535362] text-base font-semibold ">
                  ComX Admin
                </p>
              </span>

              <span className="grid gap-2">
                <h2 className="text-base font-normal text-uacs-primary-90">
                  Website URL
                </h2>
                <Link href="https://www.comxadmin.afexnigeria.com">
                  <p className="text-[#535362] text-base font-semibold ">
                    https://www.comxadmin.afexnigeria.com
                  </p>
                </Link>
              </span>

              <span className="grid gap-2">
                <h2 className="text-base font-normal text-uacs-primary-90">
                  Staff with permission
                </h2>

                <p className="text-[#535362] text-base font-semibold ">250</p>
              </span>
            </div>

            {/* Second div */}
            <div className="flex gap-20">
              <span className="flex-col flex gap-3">
                <h2 className="text-base font-normal text-uacs-primary-90">
                  Date Created
                </h2>
                <p className="text-[#535362] text-base font-semibold">
                  23 May 2021
                </p>
              </span>

              <span className="flex-col flex gap-3 items-center">
                <h2 className="text-base font-normal text-uacs-primary-90">
                  Status
                </h2>
                <div className="flex gap-1 px-2 rounded-lg bg-[#FDEEEE] items-center">
                  <InactiveDot />
                  <p className="text-[#873031] text-sm font-normal">Inactive</p>
                </div>
              </span>

              <div className=" flex gap-10">
                <span className="gap-2 border border-uacs-eneutral-6 bg-uacs-eneutral-3 edit-shadow px-4 py-2 flex justify-center items-center rounded-lg ">
                  <Edit2 size="20" color="#4A4C58" />
                  <h4 className="text-base text-uacs-eneutral-9 font-normal">
                    Edit
                  </h4>
                </span>

                <div className="flex gap-6">
                  <span className="gap-2 border border-[#EBEEFC] edit-shadow px-4 py-2 flex justify-center items-center rounded-lg ">
                    <h4 className="text-base text-uacs-ablue-5 font-normal">
                      API Key
                    </h4>
                    <Copy size="16" color="#5C70E3" />
                  </span>

                  <span className="gap-2   bg-uacs-ared-1  edit-shadow px-4 py-2 flex justify-center items-center rounded-lg ">
                    <h4 className="text-base text-uacs-ared-7 font-normal">
                      Secret Key
                    </h4>
                    <Copy size="16" color="#BF2018" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="flex justify-center items-center">
        <GrantAccess className="!bg-transparent !h-[59vh]" />
      </div>
    </div>
  );
};
