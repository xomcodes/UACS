import { BtnwithIcon } from "@/shared";
import Image from "next/image";
import React from "react";
import { Mobile } from "./mobile";
import { Button } from "@mantine/core";

export const ProfilePage = () => {
  return (
    <div className="bg-white px-20 pt-14 pb-20  flex flex-col gap-14 ">
      <div className="flex justify-between">
        <div className="flex gap-10">
          <Image
            src="/profile-img/image 2.svg"
            width={200}
            height={200}
            alt="profile-img"
            className="rounded-full"
          />

          <div className="flex flex-col gap-2 justify-center">
            <h2 className="text-[32px] font-medium text-uacs-eneutral-10">
              Joshua Simire
            </h2>
            <p className=" text-eneutral-7 text-base font-medium">
              {" "}
              Analyst, MIS
            </p>
          </div>
        </div>

        <Button
              leftIcon={
                <Mobile/>
              } className="bg-uacs-ared-7 rounded-lg hover:bg-red-800 h-[38px]  "
            > Connect to mobile</Button>
      </div>

      <div className="flex flex-col gap-10">
        <h2>Personal Information</h2>

        <div className="flex flex-col gap-10">   

        <div className="flex gap-20">
          <div className="flex flex-col gap-4">
            <h3>First Name</h3>
            <input
              type="text"
              placeholder="firstname"
              className="  w-[clamp(15rem,31vw,30rem)] p-4 border border-uacs-eneutral-5 bg-uacs-eneutral-3 rounded-lg outline-none"
            />
          </div>
          
          <div className="flex flex-col gap-4">
            <h3>Last Name</h3>
            <input
              type="text"
              placeholder="lastname"
              className="w-[clamp(15rem,31vw,30rem)] p-4 border border-uacs-eneutral-5 bg-uacs-eneutral-3 outline-none rounded-lg"
            />
          </div>
          

        </div>

        <div className="flex gap-20">
          <div className="flex flex-col gap-4">
            <h3 className=" text-uacs-eneutral-9 text-base font-medium">Phone Number</h3>
            <input
              type="text"
              placeholder="08106545067"
              className="  w-[clamp(15rem,31vw,30rem)] p-4 border border-uacs-eneutral-5 bg-uacs-eneutral-3 rounded-lg outline-none"
            />
          </div>
          
          <div className="flex flex-col gap-4">
            <h3 className=" text-uacs-eneutral-9 text-base font-medium">Email Address</h3>
            <input
              type="text"
              placeholder="@afexnigeria.com"
              className="w-[clamp(15rem,31vw,30rem)] p-4 border border-uacs-eneutral-5 bg-uacs-eneutral-3 rounded-lg outline-none"
            />
          </div>
          

        </div>

        <div className="flex gap-20">
          <div className="flex flex-col gap-4">
            <h3 className=" text-uacs-eneutral-9 text-base font-medium">Tribe</h3>
            <input
              type="text"
              placeholder="Innovation & Technology"
              className="  w-[clamp(15rem,31vw,30rem)] p-4 border border-uacs-eneutral-5 bg-uacs-eneutral-3  outline-none rounded-lg"
            />
          </div>
          
          <div className="flex flex-col gap-4">
            <h3 className=" text-uacs-eneutral-9 text-base font-medium">Squad</h3>
            <input
              type="text"
              placeholder="Devops & Security"
              className="w-[clamp(15rem,31vw,30rem)] p-4 border border-uacs-eneutral-5 bg-uacs-eneutral-3  outline-none rounded-lg"
            />
          </div>
          

        </div>

        <div className="flex gap-20">
         
          
          <div className="">
            <h3 className=" text-uacs-eneutral-9 text-base font-medium">Designation</h3>
            <input
              type="text"
              placeholder="Analyst, MIS"
              className="w-[clamp(30rem,64vw,65rem)] p-4 border border-uacs-eneutral-5 bg-uacs-eneutral-3 outline-none rounded-lg"
            />
          </div>
          

        </div>

      </div>
    </div>
    </div>
  );
};
