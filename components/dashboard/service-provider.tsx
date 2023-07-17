import { Dots } from "@/service-provider";
import React from "react";
import { LoadingOverlay } from "@mantine/core";
import { ArrowRight2 } from "iconsax-react";
import Link from "next/link";


import useDashboardSp from "../../hooks/use-dashboard-sp";



  // A preview of my list of Service providers on the dashboard

export const ServiceProvider = () => {

 const {sp, loading} = useDashboardSp()

  return (
    <section className="bg-white py-8 px-4 flex flex-col gap-4 overflow-auto rounded-lg card-shadow">
      <div className="flex flex-col gap-3">
        <div className="flex justify-between items-center">
          <h2 className=" text-uacs-gray-900 text-base font-semibold">
            Service Providers
          </h2>
          <div className="flex gap-2">
            <Link href="/service-provider">
              <h3 className="text-xs font-medium text-uacs-ared-7">View all</h3>
            </Link>
            <ArrowRight2 size={14} color="#BF2018" />
          </div>
        </div>

        <p className="text-xs font-medium text-uacs-gray-500 ">
          List of recent service providers on the platform
        </p>
      </div>

      <div className="scroll-bar-hidden overflow-auto flex flex-col gap-4">
        {sp?.map((item) => (
          <div
            key={item.name}
            className="border-b border-b-[#DADADD] px-4 py-3"
          >
            <div className="flex flex-col gap-1">
              <div className="flex justify-between ">
                <h2 className="text-sm text-uacs-eneutral-11 font-semibold">
                  {item.name}
                </h2>
                <span className=" rotate-90">
                <Dots  />
                </span>
              
              </div>
              <p className="text-xs font-normal text-uacs-eneutral-8 ">
               {item.url}
              </p>
            </div>
          </div>
        ))}
      </div>
      <LoadingOverlay visible={loading}/>
    </section>
  );
};
