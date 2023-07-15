import { Popover } from "@mantine/core";
import { ArrowDown2, Eye, LogoutCurve } from "iconsax-react";
import React, { useContext } from "react";
import { useState } from "react";
import { useRouter } from "next/router";
import { AuthContext, UserType } from "@/context/auth-provider";

export const ProfilePopUp = () => {
  const [opened, setOpened] = useState(false);
  const { push } = useRouter();
  const { setIsLoggedIn } = useContext(AuthContext) as UserType;

  return (
    <Popover
      position="bottom"
      classNames={{
        dropdown: "rounded-lg py-2 w-[137px] pop-shadow  absolute ",
      }}
    >
      <Popover.Target>
        <ArrowDown2
          className="cursor-pointer "
          color="#8F8E91"
          size="18"
          onClick={() => setOpened(true)}
        />
      </Popover.Target>
      <Popover.Dropdown>
        <div
          onClick={() => push("/profile")}
          className="flex flex-col cursor-pointer gap-1"
        >
          <div className=" flex gap-[10px] py-2 px-4">
            <Eye size="16" color="#8F9198" variant="Outline" />
            <h2 className="text-uacs-eneutral-8 text-xs font-medium">
              View Profile
            </h2>
          </div>

          <div
            onClick={() => {
              localStorage.removeItem("login-user");
              setIsLoggedIn(false);
              push("/");
            }}
            className=" flex gap-2 py-2 px-4 cursor-pointer"
          >
            <LogoutCurve size={16} color="#BF2018" className=" rotate-180" />
            <h2 className="text-[#BF2018] text-xs font-medium">Logout</h2>
          </div>
        </div>
      </Popover.Dropdown>
    </Popover>
  );
};
