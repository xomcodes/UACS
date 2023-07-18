import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import {
  Button,
  Loader,
  LoadingOverlay,
  Modal,
  Select,
  Stepper,
} from "@mantine/core";
import { ArrowLeft2 } from "iconsax-react";
import { toast } from "react-toastify";

import { Close } from "./icons";
import useAddMember from "../../hooks/use-add-member";
import useServiceProviders from "../../hooks/use-service-providers";
import { handleError } from "../../utils/error-handler";

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

interface IGrantAccess {
  opened: boolean;
  setOpened: React.Dispatch<React.SetStateAction<boolean>>;
  getStaff: () => void;
}

export const GrantAccess = ({ opened, getStaff, setOpened }: IGrantAccess) => {
  const [active, setActive] = useState(0);
  const [requestLoading, setRequestLoading] = useState(false);
  const nextStep = () =>
    setActive((current) => (current < 2 ? current + 1 : current));
  const prevStep = () =>
    setActive((current) => (current > 0 ? current - 1 : current));

  //  Get request
  const { add } = useAddMember();

  const [selectedMembers, setSelectedMembers] = useState<
    { name: string; id: number }[]
  >([]);
  const [selectedSP, setSelectedSP] = useState<{ name: string; id: number }[]>(
    []
  );

  const { sp, loading } = useServiceProviders();
  const [spList, setSpList] = useState([]);

  useEffect(() => {
    if (sp) {
      setSpList(
        sp?.reduce((acc: any, curr) => {
          acc.push({
            label: `${curr.name}`,
            value: JSON.stringify({ name: curr.name, id: curr.id }),
          });
          return acc;
        }, [])
      );
    }
  }, [sp]);

  const grantAccess = async () => {
    setRequestLoading(true);
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
          staff_list: selectedMembers.map((item) => item.id),
          sp_list: selectedSP.map((item) => item.id),
        },
      });
      toast.success("Adding Staff", {
        theme: "colored",
      });
      getStaff();
      setOpened(false);
      setRequestLoading(false);
    } catch (error: any) {
      handleError(error);
      setRequestLoading(false);
    }
  };

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
                    const filtered = selectedMembers.filter(
                      (el) => el.id !== JSON.parse(val as string).id
                    );
                    setSelectedMembers([
                      ...filtered,
                      JSON.parse(val as string),
                    ]);
                  }}
                />
                <div className=" flex gap-2 overflow-auto flex-wrap">
                  {selectedMembers.map((item) => (
                    <span
                      key={item.id}
                      className="flex gap-1 p-2 border-[0.5px]  bg-uacs-primary-0 rounded-lg whitespace-nowrap items-center "
                    >
                      <p className="text-sm font-medium text-[#4A4C58]">
                        {item.name}
                      </p>
                      <Close
                        onClick={() => {
                          const filtered = selectedMembers.filter(
                            (el: any) => el.id !== item.id
                          );
                          setSelectedMembers(filtered);
                        }}
                        color="#C1C2C6"
                        size="8"
                      />
                    </span>
                  ))}
                </div>
              </div>

              {/* Select sp modal */}
            </Stepper.Step>
            <Stepper.Step completedIcon={2}>
              <div className="flex flex-col h-full gap-4 overflow-auto">
                <Select
                  label="Search Provider"
                  placeholder="Search Service Provider"
                  classNames={{
                    input:
                      "w-full h-12 placeholder:text-sm font-normal text-uacs-eneutral-6",
                    label: " text-uacs-eneutral-9 text-base font-medium",
                    root: "flex flex-col gap-4 ",
                  }}
                  data={spList}
                  onChange={(val) => {
                    const filtered = selectedSP.filter(
                      (el: any) => el.id !== JSON.parse(val as string).id
                    );
                    setSelectedSP([...filtered, JSON.parse(val as string)]);
                  }}
                />
                <div className=" flex gap-2 overflow-auto flex-wrap">
                  {selectedSP.map((item: any) => (
                    <span
                      key={item.id}
                      className="flex gap-1 p-2 border-[0.5px]  bg-uacs-primary-0 rounded-lg whitespace-nowrap items-center "
                    >
                      <p className="text-sm font-medium text-[#4A4C58]">
                        {item.name}
                      </p>
                      <Close
                        onClick={() => {
                          const filtered = selectedSP.filter(
                            (el: any) => el.id !== item.id
                          );
                          setSelectedSP(filtered);
                        }}
                        color="#C1C2C6"
                        size="8"
                      />
                    </span>
                  ))}
                </div>
              </div>
            </Stepper.Step>

            {/* Confirm sp modal */}
            <Stepper.Step completedIcon={3}>
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <p>Selected Staff</p>
                  <div className=" flex gap-2 overflow-auto flex-wrap">
                    {selectedMembers.map((item) => (
                      <span
                        key={item.id}
                        className="flex gap-1 p-2 border-[0.5px]  bg-uacs-primary-0 rounded-lg whitespace-nowrap items-center "
                      >
                        <p className="text-sm font-medium text-[#4A4C58]">
                          {item.name}
                        </p>
                        <Close
                          onClick={() => {
                            const filtered = selectedMembers.filter(
                              (el: any) => el.id !== item.id
                            );
                            setSelectedMembers(filtered);
                          }}
                          color="#C1C2C6"
                          size="8"
                        />
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <p>Selected Service Providers</p>
                  <div className=" flex gap-2 overflow-auto flex-wrap">
                    {selectedSP.map((item: any) => (
                      <span
                        key={item.id}
                        className="flex gap-1 p-2 border-[0.5px]  bg-uacs-primary-0 rounded-lg whitespace-nowrap items-center "
                      >
                        <p className="text-sm font-medium text-[#4A4C58]">
                          {item.name}
                        </p>
                        <Close
                          onClick={() => {
                            const filtered = selectedSP.filter(
                              (el: any) => el.id !== item.id
                            );
                            setSelectedSP(filtered);
                          }}
                          color="#C1C2C6"
                          size="8"
                        />
                      </span>
                    ))}
                  </div>
                </div>
              </div>
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
          <Button
            onClick={active === 2 ? grantAccess : nextStep}
            disabled={requestLoading}
            rightIcon={
              <ArrowLeft2 color="#ffffff" size={16} className="rotate-180" />
            }
            className="bg-uacs-ared-7 text-sm rounded-lg hover:bg-red-800 h-10 w-fit"
            classNames={{
              inner: "gap-[8px] ",
            }}
          >
            {active === 2 ? (
              requestLoading ? (
                <span className="flex text-white items-center gap-1">
                  Please wait... <Loader size="sm" />
                </span>
              ) : (
                "Proceed"
              )
            ) : (
              "Next"
            )}
          </Button>
        </div>
      </div>
      <LoadingOverlay visible={loading} />
    </Modal>
  );
};
