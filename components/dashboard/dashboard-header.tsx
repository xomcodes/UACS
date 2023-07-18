import React from "react";
import { NotificationBing } from "iconsax-react";
import { usePortal } from "@ibnlanre/portal";

import { IAuthUser } from "../../pages/sign-in";
import { ProfilePopUp } from "@/pop-ups";

interface iDashboardHeader {
  children: React.ReactNode;
  pages?: string;
  text: string;
  icon?: React.ReactNode;
}

export const DashboardHeader = ({
  children,
  pages,
  text,
  icon,
}: iDashboardHeader) => {
  // I have already declared the initial value of the portal state in the sign-in page
  // and I have set it to the data i received from my login request. Here I am getting the value
  // with the key (login-user) and it should give me the value I set after my successful login request
  // i.e i should now have a first_name, last_name, profile_picture and so on saved in this authUser state
  // and also in my localStorage
  const [authUser] = usePortal.local<IAuthUser>("login-user");

  return (
    <div className=" bg-uacs-eneutral-3 overflow-auto flex flex-col">
      <div className=" flex justify-between bg-white  px-8 border-l border-l-[#EAEAEA] ">
        <div className="flex gap-3 p-[18px] ">
          <h4 className="border-r-2 border-[#E64D45] pr-2 text-base font-semibold font-[Switzer] ">
            Unified Access Control System
          </h4>
          <div className="flex gap-3">
            <h4 className=" font-medium font-[Switzer]  text-base text-uacs-eneutral-7">
              {text}
            </h4>
            <div className="-rotate-90">{icon}</div>
          </div>
          <h4 className=" font-medium font-[Switzer]  text-base text-uacs-eneutral-7">
            {pages}
          </h4>
        </div>

        <div className="flex gap-8  border-l border-l-[#EAEAEA] pl-[3.5rem] items-center ">
          <div className="relative">
            <NotificationBing size="30" color="#8F8E91" variant="Outline" />
            <div className=" bg-[#C81107] absolute w-2 h-2 rounded-full right-0 top-[2px] left-5 "></div>
          </div>

          <div className="flex relative gap-4 items-center ">
            <img
              src={authUser?.profile_picture}
              alt="profile-pix"
              className="h-[52px] object-cover w-[52px] rounded-full"
            />
            <div className="flex flex-col gap-1">
              <h3 className="font-[Switzer] text-sm font-semibold text-uacs-eneutral-11">
                {authUser?.first_name} {authUser?.last_name}
              </h3>
              <p className="font-[Switzer] text-xs text-uacs-eneutral-7 font-normal">
                Admin
              </p>
            </div>
            <ProfilePopUp />
          </div>
        </div>
      </div>
      {/* Inner */}
      {children}
    </div>
  );
};
