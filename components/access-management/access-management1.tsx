import React, { useEffect, useState } from "react";
import { SearchNormal1 } from "iconsax-react";
import { Button, LoadingOverlay } from "@mantine/core";
import axios from "axios";
import Image from "next/image";

import { AccessTable1 } from "./accesstable1";
import { GrantAccess } from "@/modals";
import { EmptyState } from "./empty-state";
import { handleError } from "../../utils/error-handler";

export interface IAccessManager {
  first_name: string;
  last_name: string;
  email: string;
  full_designation: string;
  providers_with_access: string[];
  id: number;
}

export const AccessManagement1 = () => {
  const [opened, setOpened] = useState(false);
  const [accessManager, setAccessManager] = useState<IAccessManager[]>([]);
  const [loading, setLoading] = useState(false);

  const getStaff = async () => {
    const accessToken = JSON.parse(
      localStorage.getItem("login-user") as string
    )?.access;

    try {
      setLoading(true);
      const { data } = await axios({
        url: `${process.env.NEXT_PUBLIC_BASE_URL}staffs/all/`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      setLoading(false);
      setAccessManager(data.results);
    } catch (error: any) {
      handleError(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getStaff();
  }, []);
  return (
    <div className="pt-8 overflow-auto flex-1 px-[clamp(0.75rem,1.6vw,1.5rem)] flex flex-col gap-10">
      <div className="flex flex-col gap-10">
        <div className="flex justify-between items-center ">
          <h3 className="text-base font-semibold text-uacs-eneutral-11">
            Staff with access ({accessManager.length})
          </h3>

          <div className="flex gap-4">
            <div className="flex ">
              <div className="pl-4  pr-7 py-2 bg-white flex gap-4 items-center w-[clamp(11rem,23vw,22rem)]  rounded-lg  ">
                <div className="">
                  <SearchNormal1 size="16" color="#C1C2C6" variant="Outline" />
                </div>
                <input
                  type="search"
                  placeholder="filter by search"
                  className="outline-none w-full"
                />
              </div>
            </div>

            <Button
              onClick={() => setOpened(true)}
              leftIcon={
                <Image
                  src="/dashboard/plus.png"
                  width="20"
                  height="20"
                  alt="plus"
                />
              }
              className="bg-uacs-ared-7 rounded-lg hover:bg-red-800 h-10 w-[162px] "
            >
              Grant Access
            </Button>
          </div>

          {opened ? (
            <GrantAccess
              getStaff={getStaff}
              opened={opened}
              setOpened={setOpened}
            />
          ) : null}
        </div>
      </div>
      {accessManager?.length ? (
        <AccessTable1 accessManager={accessManager} />
      ) : (
        <section className="px-[clamp(0.75rem,1.6vw,1.5rem)] py-[30px] flex-1">
          <EmptyState
            getStaff={getStaff}
            onClick={() => setOpened(true)}
            btnText="Grant Access"
            className="bg-white "
          />
        </section>
      )}
      <LoadingOverlay visible={loading} />
    </div>
  );
};
