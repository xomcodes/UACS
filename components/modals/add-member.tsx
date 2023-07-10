import { Button, Modal, TextInput } from "@mantine/core";
import React from "react";

export function AddMember({
  opened,
  setOpened,
}: {
  opened: boolean;
  setOpened: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <Modal
      centered
      size="44vw"
      opened={opened}
      onClose={() => setOpened(false)}
      title="Add Staff"
      classNames={{
        header: "px-6 pt-8 pb-2",
        body: "px-6 pb-8 flex-1  ",
        content: 'h-[600px] flex flex-col rounded-[20px]',
        title: 'text-[#54565B] font-medium text-xl '
      }}
    >
      <div className="flex flex-col justify-between h-full">
        <div className="flex flex-col gap-6">
          <p className="border-b border-b-[#F3F3F3] pb-8 text-uacs-primary-60 text-sm font-normal  ">
            Give staff access to service provider
          </p>
          <div className=" flex flex-col gap-4">
            <TextInput label='Search staff' placeholder="Type Member Name" classNames={{
                input: 'w-full h-12 placeholder:text-sm font-normal text-uacs-eneutral-6',
                label: ' text-uacs-eneutral-9 text-base font-medium',
                root:'flex flex-col gap-4 '

            }}/>

          </div>

         
        </div>
        <Button className="bg-uacs-ared-7 text-white rounded-lg text-base font-medium hover:bg-red-800 h-12">Add Staff</Button>
      </div>
    </Modal>
  );
}
