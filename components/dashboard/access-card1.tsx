import React, { useEffect } from "react";

import Image from "next/image";

import { Level, People } from "iconsax-react";
import axios from "axios";
import { usePortal } from "@ibnlanre/portal";

export const AccessCard1 = () => {
  const [staffAccess, setStaffAccess] = usePortal<{inactive_sps:number}>('sp-access')
  const [totalSp, setTotalSp] = usePortal<number>('total-sp')
// console.log(totalSp)

//  Function to get inactive sp's
  const getCount = async () => {
    const accessToken = JSON.parse(
      localStorage.getItem("login-user") as string
    )?.access;

    try {
      const { data } = await axios({
        url: `${process.env.NEXT_PUBLIC_BASE_URL}count/`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
     setStaffAccess(data)
    } catch (error) {
      console.log(error);
    }
  };






  useEffect(() => {
    getCount();
  }, []);

  return (
    <div
      className="flex-1  rounded-lg p-6    bg-no-repeat bg-[top_center] "
      style={{ backgroundImage: "url('/dashboard/card-bg.png')" }}
    >
      <div className="flex justify-between flex-col h-[202px]">
        <div className="flex justify-between items-center   ">
          <div className="flex flex-col gap-1.5 ">
            <h2 className="font-[Switzer] font-bold text-[clamp(1.25rem,3vw,2.5rem)] text-white">
              {totalSp}
            </h2>
            <p className="font-[Switzer] font-medium text-sm text-white ">
              Service Providers
            </p>
          </div>

          <Image
            src="/dashboard/sp-icon.png"
            width={40}
            height={40}
            alt="sp-icon"
          />
        </div>

        <div className="flex gap-[6.9px] items-center ">
          <figure className=" w-10 h-10 rounded-full flex items-center justify-center p-2 bg-uacs-ared-5">
            <Level size="32" color="#FFFFFF" variant="Outline" />
          </figure>

          <p className="font-[Switzer] font-semibold text-sm text-white">
            Inactive SPs:
          </p>
          <p className="text-white font-semibold text-sm">{staffAccess?.inactive_sps}</p>
        </div>
      </div>
    </div>
  );
};
