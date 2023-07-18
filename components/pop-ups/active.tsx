import React, { useState } from "react";
import { LoadingOverlay, Menu, Text } from "@mantine/core";
import axios from "axios";
import { Add, Edit, Eye, Trash } from "iconsax-react";
import Link from "next/link";
import { modals } from "@mantine/modals";

import { Activate } from "./icons";
import { IServiceProvider } from "@/service-provider/sp-list1";
import { AddMember, CreateSp } from "@/modals";
import { handleError } from "../../utils/error-handler";
import { Dots } from "@/service-provider";
import { Deactivate } from "./icons/deactivate";

interface iActive {
  spID: number;
  getSp: () => void;
  spStatus: boolean;
  sp: IServiceProvider;
}

export const Active = ({ spID, getSp, spStatus, sp }: iActive) => {
  const [addMemberopened, setAddMemberOpened] = useState(false);
  const [updateOpened, setUpdateOpened] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleToggleStatus = async () => {
    setLoading(true);
    const accessToken = JSON.parse(
      localStorage.getItem("login-user") as string
    )?.access;
    const formData = new FormData();
    formData.append("is_active", String(!sp.is_active));

    try {
      const { data } = await axios({
        url: `${process.env.NEXT_PUBLIC_BASE_URL}service_providers/${spID}/status_toggle/`,
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        data: formData,
      });
      setLoading(false);
      getSp();
    } catch (error: any) {
      handleError(error);
      setLoading(false);
    }
  };

  const openDeactivateModal = () =>
    modals.openConfirmModal({
      title: "Delete Service Provider",
      centered: true,
      children: (
        <Text size="sm">
          Are you sure you want to {spStatus ? "Deactivate" : "Activate"} this
          Service Provider?.
        </Text>
      ),
      labels: {
        confirm: `Yes, ${spStatus ? "Deactivate" : "Activate"}`,
        cancel: `No, Don't ${spStatus ? "Deactivate" : "Activate"}`,
      },
      confirmProps: {
        color: sp?.is_active ? "red" : "green",
        className: sp?.is_active ? "bg-uacs-ared-7" : "bg-uacs-success",
      },
      onCancel: () => {},
      onConfirm: () => handleToggleStatus(),
    });

  return (
    <Menu
      classNames={{
        dropdown: "rounded-lg p-0 !w-fit pop-shadow left-[145px]",
      }}
      styles={{
        item: {
          "&:hover": {
            background: "transparent",
          },
        },
      }}
    >
      <Menu.Target>
        <div className="cursor-pointer">
          <Dots />
        </div>
      </Menu.Target>
      <Menu.Dropdown>
        <Menu.Item>
          <div className="flex flex-col cursor-pointer rounded-lg ">
            <div
              onClick={() => {
                setUpdateOpened(true);
              }}
              className=" flex gap-2 py-[10px] px-4"
            >
              <Edit size="16" color="#5E606A" variant="Outline" />
              <h2 className=" text-uacs-eneutral-8 text-xs font-medium">
                Update
              </h2>
            </div>

            <Link
              href={`/service-provider/${spID}`}
              className=" flex gap-2 py-[10px] px-4"
            >
              <Eye size="16" color="#8F9198" variant="Outline" />
              <h2 className="text-uacs-eneutral-8 text-xs font-medium">View</h2>
            </Link>

            <div
              onClick={() => setAddMemberOpened(true)}
              className=" flex gap-2 py-[10px] px-4"
            >
              <Add size="16" color="#8F9198" variant="Bold" />
              <h2 className="text-uacs-eneutral-8 whitespace-nowrap text-xs font-medium">
                Add memebers
              </h2>
            </div>

            <div
              onClick={openDeactivateModal}
              className=" flex gap-2 py-[10px] px-4"
            >
              {spStatus ? (
                <>
                  <Deactivate />
                  <h2 className="text-uacs-ared-7 text-xs font-medium">
                    Deactivate
                  </h2>
                </>
              ) : (
                <>
                  <Activate />
                  <h2 className="text-uacs-success  text-xs font-bold">
                    Activate
                  </h2>
                </>
              )}
            </div>
            <div
             
              className=" flex gap-2 py-[10px] px-4"
            >
              <Trash size="16" color="#BF2018" variant="Bold" />
              <h2 className="text-uacs-ared-7 text-xs font-medium">Delete</h2>
            </div>
          </div>
        </Menu.Item>
      </Menu.Dropdown>
      {addMemberopened ? (
        <AddMember
          getSp={getSp}
          spID={spID}
          opened={addMemberopened}
          setOpened={setAddMemberOpened}
        />
      ) : null}
      {updateOpened ? (
        <CreateSp
          id={spID}
          opened={updateOpened}
          setOpened={setUpdateOpened}
          getSp={getSp}
        />
      ) : null}
      <LoadingOverlay visible={loading} />
    </Menu>
  );
};
