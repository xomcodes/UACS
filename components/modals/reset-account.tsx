import React from "react";
import { Button, Modal } from "@mantine/core";
import Image from "next/image";

export const ResetAccount = ({
  opened,
  setOpened,
}: {
  opened: boolean;
  setOpened: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <Modal
    
      centered
      //   size="44vw"
      opened={opened}
      onClose={() => setOpened(false)}
      title=""
      classNames={{
        header: "px-6 pb-2",
        body: "px-6 pb-10 flex-1  ",
        content: "h-[426px] flex flex-col rounded-[20px]  ",
      }}
    >
      <div className="flex-flex-col  flex-1 gap-3 ">
        <div className="flex items-center justify-center"> 
        <Image
          width={170}
          height={170}
          src="/access-m-images/info-avatar.png"
          alt="" className="item-center justify-center"
        /> 
        </div>
        

        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-2 items-center">
            <h2 className=" text-uacs-eneutral-9 text-xl font-semibold "> Reset Access?</h2>
            <p className=" text-uacs-eneutral-7 text-sm font-normal text-center">
            Resetting member’s account will give their blocked account access to the various platforms
            </p>
          </div>

          <div className="flex gap-6">
            <Button className="h-[46px] w-[179px] hover:bg-transparent border border-uacs-eneutral-7  text-uacs-eneutral-7 font-medium text-sm rounded-lg">Cancel</Button>
            <Button className="h-[46px] w-[179px]  bg-uacs-ared-7 hover:bg-red-800 text-white rounded-lg font-medium text-sm "> Reset account</Button>
          </div>
        </div>
      </div>
    </Modal>
  );
};
