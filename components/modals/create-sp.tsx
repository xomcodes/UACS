import { Button, FileInput, Modal, TextInput } from "@mantine/core";
import { Gallery } from "iconsax-react";
import { url } from "inspector";
import React, { useState } from "react";
import { Close } from "./icons/close";
import { SpInfoIcon } from "./icons";
import { usePortal } from "@ibnlanre/portal";

export const CreateSp = ({
  opened,
  setOpened,
}: {
  opened: boolean;
  setOpened: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [inner, setInner] = useState(true);
  return (
    <Modal
      centered
      opened={opened}
      onClose={() => setOpened(false)}
      size="44vw"
      title="Create Service Provider"
      classNames={{
        header: "px-6 pt-8 pb-2",
        body: "px-6 pb-8 flex-1 flex",
        title: "text-[#54565B] font-medium text-xl",
        content: "rounded-[20px] flex flex-col",
      }}
    >
      <div className="flex flex-col  h-full flex-1">
        <p className="border-b border-b-[#F3F3F3] pb-8 text-uacs-primary-60 text-sm font-normal ">
          Add new service provider
        </p>

        <div className=" flex flex-col gap-4 justify-between flex-1 pt-6">
          {inner ? (
            <div className="grid grid-cols-[auto,1fr] gap-4 rounded-lg  items-center pl-5  pb-[27px] pt-5 pr-[25px] border-[1.82px] border-[#0089C8] sp-info-bg sp-info-shadow sp-info-filter ">
              <SpInfoIcon />
              <div className="flex flex-col gap-2 ">
                <div className="flex justify-between">
                  <p className="text-uacs-primary-90 text-sm font-medium">
                    Service Provider Info
                  </p>
                  <Close
                    onClick={() => {
                      setInner(false);
                    }}
                  />
                </div>

                <p className="text-uacs-primary-90 text-sm font-normal">
                  Create a service provider with attached permissions endpoint
                  and assign members of your organisation to the permissions.
                  Members will automatically gain access to the platforms based
                  on assigned permission.
                </p>
              </div>
            </div>
          ) : null}
          <div className="flex flex-col gap-4">
            <h2 className="">Add Picture/Logo</h2>
            <label
              className="w-full rounded-lg h-12 flex justify-center border placeholder:text-sm placeholder:font-normal placeholder:text-uacs-eneutral-6 border-uacs-eneutral-5"
              htmlFor="file-input"
            >
              <span className="flex items-center gap-2">
                <span>Select Image</span>
                <Gallery />
                <FileInput id="file-input" hidden />
              </span>
            </label>
          </div>

          <TextInput
            required
            label="Service Providers Name"
            placeholder="Enter Service Providers Name "
            classNames={{
              input:
                "w-full h-12 placeholder:text-sm font-normal text-uacs-eneutral-6  rounded-lg",
              label: "text-uacs-eneutral-9 text-base font-medium ",
              root: "flex flex-col gap-4 ",
            }}
          />

          <TextInput
            required
            label="Website Url"
            placeholder="Enter URL "
            classNames={{
              input:
                "w-full h-12 placeholder:text-sm font-normal text-uacs-eneutral-6 rounded-lg ",
              label: "text-uacs-eneutral-9 text-base font-medium ",
              root: "flex flex-col gap-4 ",
            }}
          />

          <Button className="bg-uacs-ared-7 text-white rounded-lg text-base font-medium hover:bg-red-800 h-12 w-full">
            Create Service Provider
          </Button>
        </div>
      </div>
    </Modal>
  );
};
