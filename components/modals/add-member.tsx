import React, { useState, useEffect } from "react";
import { Button, Loader, Modal, Select, TextInput } from "@mantine/core";
import axios from "axios";

import {ToastContainer, toast } from "react-toastify";
import { useRouter } from "next/router";


import { Close } from "./icons";
import useAddMember from "../../hooks/use-add-member";

interface IAddMember {
  opened: boolean;
  setOpened: React.Dispatch<React.SetStateAction<boolean>>;
  spID?: number
  getSp: () => void
}

export function AddMember({
  opened,
  setOpened,
  spID,
  getSp
}: IAddMember) {



  const [loading, setLoading] = useState(false);
  const { add } = useAddMember();
  const { query } = useRouter();

  // state that will hold the value of what i selected from my select dropdown
  // This state has to hold the name of the person and the id of the person so
  const [selected, setSelected] = useState<{ name: string; id: number }[]>([]);

  const handleSubmit = async () => {
    setLoading(true)
    const accessToken = JSON.parse(
      localStorage.getItem("login-user") as string
    )?.access;

    try {
      const { data: resData } = await axios({
        url: `${process.env.NEXT_PUBLIC_BASE_URL}permission_set/`,
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        data: {
          staff_list: selected.map((item) => item.id),
          sp_list: [spID ? spID : query?.id],
        },
      });
      toast.success("Adding Staff", {
        theme: "colored",
      });
      getSp()
      setOpened(false);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return (
    // <ToastContainer toastClassName={"CustomToast"}>
    <Modal
      centered
      size="44vw"
      opened={opened}
      onClose={() => setOpened(false)}
      title="Add Staff"
      classNames={{
        header: "px-6 pt-8 pb-2",
        body: "px-6 pb-8 flex-1  ",
        content: "h-[600px] flex flex-col rounded-[20px]",
        title: "text-[#54565B] font-medium text-xl ",
      }}
    >
      <div className="flex flex-col justify-between h-full">
        <div className="flex flex-col gap-6">
          <p className="border-b border-b-[#F3F3F3] pb-8 text-uacs-primary-60 text-sm font-normal  ">
            Give staff access to service provider
          </p>
          <div className=" flex flex-col gap-4">
            <Select
              label="Search staff"
              placeholder="Type Member Name"
              classNames={{
                input:
                  "w-full h-12 placeholder:text-sm font-normal text-uacs-eneutral-6",
                label: " text-uacs-eneutral-9 text-base font-medium",
                root: "flex flex-col gap-4 ",
              }}
              data={add}
              onChange={(val) => {
                const filtered = selected.filter(
                  (el) => el.id !== JSON.parse(val as string).id
                );
                setSelected([...filtered, JSON.parse(val as string)]);
              }}
            />
            <div className="flex flex-wrap gap-3">
              {selected.map((item) => (
                <span
                  key={item.id}
                  className="flex gap-1 p-2 border-[0.5px]  bg-uacs-primary-0 rounded-lg whitespace-nowrap items-center "
                >
                  <p className="text-sm font-medium text-[#4A4C58]">
                    {item.name}
                  </p>
                  <Close
                    onClick={() => {
                      const filtered = selected.filter(
                        (el) => el.id !== item.id
                      );
                      setSelected(filtered);
                    }}
                    color="#C1C2C6"
                    size="8"
                  />
                </span>
              ))}
            </div>
          </div>
        </div>
        <Button
          onClick={handleSubmit}
          disabled={loading ? true : false}
          className="bg-uacs-ared-7 text-white rounded-lg text-base font-medium hover:bg-red-800 h-12"
        >
          {loading ? (
            <span className="flex gap-1 items-center">
              Loading <Loader size="sm" />
            </span>
          ) : (
            "Add Staff"
          )}
        </Button>
      </div>
    </Modal>
    // </ToastContainer>
  );
}
