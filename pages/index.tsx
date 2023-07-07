import React from "react";

import { CardIcon, DataIcon, FilesIcon, FingerIcon } from "@/landing-page";
import { Logo } from "@/shared/logo";
import { Button } from "@/shared";

export default function Home() {
  return (
    <section
      className="bg-cover bg-[top-center] bg-no-repeat h-screen"
      style={{ backgroundImage: "url('/landing-page/bg-home.png')" }}
    >
      <div className="mx-auto w-[clamp(600px,90vw,1778px)] max-w-[1199px]  flex flex-col  flex-1 h-full">
        <header className="pt-12">

        <Logo />
        </header>

        <div className="flex flex-1 items-center ">
          <div className="flex items-center w-full justify-between">
            <div className="">
              <div className="flex flex-col items-center ">
                <div className=" relative border border-dashed border-black w-[450px] h-[450px] rounded-full  grid-area">
                  <CardIcon />
                  <FilesIcon />
                  <DataIcon />
                  <FingerIcon />
                </div>
              </div>
            </div>
            <div className=" grid gap-14 max-w-[515px]">
              <div className="grid gap-4">
                <h2 className="text-[60px] font-bold font-[Switzer] text-uacs-eneutral-11">
                  Unified Access Control System
                </h2>
                <p className="text-[16px] font-normal leading-[150%] font-[Switzer] text-uacs-eneutral-8">
                  Manage all access control needs from one centralised platform.
                  Take control of security with the unified access control
                  system platform.{" "}
                </p>
              </div>
             <Button text="Take Control" type='primary' size="sm" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
