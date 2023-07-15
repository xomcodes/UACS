import React from "react";
import { Button, Modal, Switch, TextInput } from "@mantine/core";

const spList = [
  {
    sp: "ComX Admin",
    actionAccess: <Switch />,
  },

  {
    sp: "WorkBench",
    actionAccess: <Switch />,
  },

  {
    sp: "ECN",
    actionAccess: <Switch />,
  },

  {
    sp: "Cuddie Admin",
    actionAccess: <Switch />,
  },

  {
    sp: "Xpert Business Card",
    actionAccess: <Switch />,
  },
];

export function ModifyAccess({
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
      title="Modify Access"
      classNames={{
        header: "px-6 pt-8 pb-2",
        body: "px-6 pb-8 flex-1  ",
        content: "h-[600px] flex flex-col rounded-[20px]  ",
        title: "text-[#54565B] font-medium text-xl ",
      }}
    >
      <div className="flex flex-col h-full justify-between">
        <div className="flex flex-col gap-8">
        <p className="text-[#7C827D] text-sm">
          Confirm entries for
          <span className=" font-semibold text-sm">
            {" "}
            Ayodele Emmanuel Davies
          </span>
        </p>
        <div className="flex flex-col ">
          <div className="flex gap-[11px]">
            <span className="bg-[#F9FAFB] rounded-lg border-b border-b-[#F5F5F5] py-3 px-6 flex-1 ">
              <h2 className="text-sm font-normal text-uacs-neutral-9">
                Service Provider
              </h2>
            </span>
            <span className="bg-[#F9FAFB] rounded-lg border-b border-b-[#F5F5F5] py-3 px-6 flex-1">
              <h2 className="text-sm font-normal text-uacs-neutral-9">
                Access Action
              </h2>
            </span>
          </div>

          {spList.map((item) => (
            <div key={item.sp} className=" flex items-center gap-8">
              <div className=" border-b border-b-[#F5F5F5] flex-1 px-6 py-4">
                <h2 className="text-sm  text-uacs-neutral-9  font-semibold ">
                  {item.sp}
                </h2>
              </div>

              <div className="   flex-1">{item.actionAccess}</div>
            </div>
          ))}
        </div>
        </div>

        <Button className="bg-uacs-ared-7 text-white rounded-lg text-sm font-medium hover:bg-red-800 h-10">
          Submit
        </Button>
      </div>
    </Modal>
  );
}
