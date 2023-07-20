import React from "react";
import { Button } from "@mantine/core";
import { useRouter } from "next/router";
import { motion, useTime, useTransform } from "framer-motion";

import { CardIcon, DataIcon, FilesIcon, FingerIcon } from "@/landing-page";
import { Logo } from "@/shared/logo";


export default function Home() {
  const { push } = useRouter();
  const time = useTime();
  const rotate = useTransform(time, [0, 4000], [0, -360], { clamp: false });
  const container = useTransform(time, [0, 4000], [0, 360], {
    clamp: false,
  });
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
          <div className="flex items-center w-full justify-between gap-3">
            <div className="">
              <div className="grid justify-items-center  ">
                <motion.div
                  style={{ gridArea: "1/1", rotate: container }}
                  className=" relative border border-dashed border-black w-[450px] h-[450px] rounded-full  grid-area"
                >
                  <motion.span
                    style={{ rotate }}
                    className="absolute w-[7w] max-w-[86px] top-[40px] left-0"
                  >
                    <CardIcon />
                  </motion.span>
                  <motion.span
                    style={{ rotate }}
                    className="absolute w-[7w] max-w-[86px] bottom-[40px] left-0"
                  >
                    <FilesIcon />
                  </motion.span>
                  <motion.span
                    style={{ rotate }}
                    className="absolute w-[7w] max-w-[86px] top-[40px] right-0"
                  >
                    <DataIcon />
                  </motion.span>
                  <motion.span
                    style={{ rotate }}
                    className="absolute w-[7w] max-w-[86px] bottom-[40px] right-0"
                  >
                    <FingerIcon />
                  </motion.span>
                </motion.div>
                <img
                  style={{ gridArea: "1/1" }}
                  className="h-[250px] w-[250px] self-center"
                  src="/landing-page/security-key.png"
                  alt=""
                />
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

              {/* <Button text="Take Control" type='primary' size="sm"/> */}

              <Button
                onClick={() => {
                  push("/sign-in");
                }}
                className="bg-uacs-ared-7 hover:bg-red-800  h-10 text-base font-medium text-white w-fit rounded-lg"
              >
                {" "}
                Take Control
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
