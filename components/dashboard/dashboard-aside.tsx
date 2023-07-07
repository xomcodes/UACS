import Image from "next/image";
import React from "react";

import { BtnwithIcon, Logo } from "@/shared";

import {
  Briefcase,
  Home3,
  LoginCurve,
  LogoutCurve,
  People,
  UserEdit,
} from "iconsax-react";
import { LogIcon } from "@/logs";

const asideList = [
  {
    img: <Home3 size="20" color="#BF2018" variant="Bold" />,
    name: "Dashboard Overview",
  },
  {
    img: <Briefcase size="20" color="#4A4C58" variant="Outline" />,
    name: "Service Provider",
  },
  {
    img: <People size="20" color="#4A4C58" variant="Outline" />,
    name: "Access Management",
  },

  {
    img: <LogIcon color="#4A4C58" size="20"  variant="Outline"/>,
    name: "Logs",
    children: ["Security Log", "Activity Log"],
  },
];



const downList = [
  {
    img: <UserEdit size="20" color="#4A4C58" variant="Outline" />,
    name: "Profile",
  },

  {
    img: (
      <LogoutCurve
        size="20"
        color="#4A4C58"
        variant="Outline"
        className="rotate-180"
      />
    ),
    name: "Logout",
  },
];

export const DashboardAside = () => {
  return (
    <aside className=" py-5 px-[clamp(1rem,2.5vw,2.06rem)] flex flex-col gap-14">
      <Logo />
      <div className="grid gap-8">
        <BtnwithIcon text="Service Provider"   icon="/dashboard/plus.png"/>

        <div className="flex flex-col gap-6">
          <div className=" flex flex-col gap-6">
            {/* Map 1 */}
            {asideList.map((item) =>
              !item.children ? (
                <>
                  <div className="flex gap-3 items-center">
                    <div className=""> {item.img} </div>
                    <h2 className=" text-uacs-eneutral-9 hover:text-uacs-ared-7 font-medium font-[Switzer] text-[0.9rem]">
                      {item.name}
                    </h2>
                  </div>
                </>
              ) : (
                <div className="flex flex-col gap-2 ">
                  <div className="flex gap-3 items-center ">
                    <div className=""> {item.img} </div>
                    <h2 className=" text-uacs-eneutral-9 hover:text-uacs-ared-7 font-medium font-[Switzer] text-[0.9rem]">
                      {item.name}
                    </h2>
                  </div>

                  <div className="flex flex-col gap-4 border-l  border-l-[#DADADD] ml-6" >
                    {item.children.map((ele) => (
                     <div className="  pl-3">
                         <h3 className="text-xs font-medium text-uacs-eneutral-7">{ele}</h3>
                     </div>
                    ))}
                  </div>
                </div>
              )
            )}
          </div>
          <div className="flex flex-col gap-6">
            <h2 className=" text-uacs-eneutral-7 font-light font-[Switzer] text-[0.9rem]">
              ADMIN
            </h2>
            <div className=" flex flex-col gap-6">
              {/* Map 2 */}
              {downList.map((item) => (
                <div className="flex gap-3 items-center">
                  {item.img}
                  <h2 className=" text-uacs-eneutral-9 hover:text-uacs-ared-7 font-medium font-[Switzer] text-[0.9rem]">
                    {item.name}
                  </h2>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};
