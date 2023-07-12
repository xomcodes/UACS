import { Button, Group, Image, Modal, Stepper, TextInput } from "@mantine/core";
import React from "react";
import { useState } from "react";
import { Close } from "./icons";
import { ArrowLeft2 } from "iconsax-react";

import SelectMemebersStaff from "./select-members-staff";
import { SelectSp } from "./select-sp";

const staffList = [
  "Ayodele Emmanuel Davies",
  "Ojo Muhammed Ayodele",
  " Akinyinka Akintunde",
  "Ayodeji Balogun",
  " Ojo Muhammed Ayodele",
  "  Akinyinka Akintunde",
  "  Raheem Yusuf",
  "Ayodeji Balogun",
];

export const GrantAccess = ({
  opened,
  setOpened,
}: {
  opened: boolean;
  setOpened: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [active, setActive] = useState(0);
  const nextStep = () =>
    setActive((current) => (current < 2 ? current + 1 : current));
  const prevStep = () =>
    setActive((current) => (current > 0 ? current - 1 : current));
  return (
    <Modal
      centered
      size="44vw"
      opened={opened}
      onClose={() => setOpened(false)}
      title="Grant Access"
      classNames={{
        header: " px-6 pt-8 pb-2",
        body: "px-6 pb-8 flex-1 overflow-auto",
        content: "flex flex-col overflow-auto h-[551px] rounded-[20px]",
        title: "text-uacs-eneutral-9 font-medium text-xl ",
      }}
    >
      <div className="flex flex-col h-full overflow-auto justify-between">
        <div className="flex overflow-auto flex-col gap-6 h-full ">
          <div className="flex flex-col gap-8">
            <p className="text-sm font-normal text-uacs-eneutral-7  ">
              Select members of staff
            </p>
          </div>

          <Stepper
            active={active}
            onStepClick={setActive}
            color="#C81107"
            classNames={{
              stepIcon: "flex items-center text-black",
              separatorActive: "h-[5px] rounded-[34px]",
              separator: "h-[5px] rounded-[34px]",
              steps: " border-b border-b-[#F3F3F3] pb-8",
              root: "overflow-auto h-full flex flex-col",
              content: "overflow-auto flex-1 scroll-bar-hidden",
            }}
          >
            <Stepper.Step completedIcon={1}>
              <div className="flex flex-col h-full gap-4 overflow-auto">
                <TextInput
                  label="Search staff"
                  placeholder="Type Member Name"
                  classNames={{
                    input:
                      "w-full h-12 placeholder:text-sm font-normal text-uacs-eneutral-6",
                    label: " text-uacs-eneutral-9 text-base font-medium",
                    root: "flex flex-col gap-4 ",
                  }}
                />
                <div className=" flex gap-2 overflow-auto flex-wrap">
                  {staffList.map((item) => (
                    <span
                      key={item}
                      className="flex gap-1 p-2 border-[0.5px]  bg-uacs-primary-0 rounded-lg whitespace-nowrap items-center "
                    >
                      <p className="text-sm font-medium text-[#4A4C58]">
                        {item}
                      </p>
                      <Close color="#C1C2C6" size="8" />
                    </span>
                  ))}
                </div>
              </div>

              {/* Select sp modal */}
            </Stepper.Step>
            <Stepper.Step completedIcon={2}>
              <SelectSp/>
            </Stepper.Step>

            {/* Confirm sp modal */}
            <Stepper.Step completedIcon={3}>
              <SelectMemebersStaff/>
              <SelectSp/>
            </Stepper.Step>
          </Stepper>
        </div>

        <div className="flex justify-between">
          <Button
            onClick={prevStep}
            leftIcon={<ArrowLeft2 color="#C1C2C6" size="16" />}
            className="bg-transparent border border-[#DADADD] text-sm rounded-lg h-10 w-fit btn-shadow text-[#C1C2C6]"
            classNames={{
              inner: "gap-[8px]",
            }}
          >
            Prev
          </Button>
          {/* <Button variant="default" onClick={prevStep}>Back</Button>
        <Button onClick={nextStep}>Next step</Button> */}

          <Button
            onClick={nextStep}
            rightIcon={
              <ArrowLeft2 color="#ffffff" size={16} className="rotate-180" />
            }
            className="bg-uacs-ared-7 text-sm rounded-lg hover:bg-red-800 h-10 w-fit"
            classNames={{
              inner: "gap-[8px] ",
            }}
          >
            
           { active === 2 ? 'Proceed' : 'Next'}
          </Button>
        </div>
      </div>
    </Modal>
  );
};
