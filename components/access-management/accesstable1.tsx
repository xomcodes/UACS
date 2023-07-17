
import {  useState } from "react";
import { LoadingOverlay, Popover, Table, clsx } from "@mantine/core";
import { ArrowDown, ArrowDown2, ArrowUp } from "iconsax-react";

import { ResetAccount } from "@/modals/reset-account";
import { ModifyRevoke } from "@/pop-ups/modify-revoke";
import { IAccessManager } from "./access-management1";



export function AccessTable1({
  accessManager,
}: {
  accessManager: IAccessManager[];
}) {
  const [opened, setOpened] = useState(false);

  const rows = accessManager?.map((element) => (
    <tr key={element.id} className=" ">
      <td className="td-name ">{`${element.first_name} ${element.last_name}`}</td>
      <td className="td-name">{element.email}</td>
      <td className="td-name ">{element.full_designation}</td>
      <td className="td-name  ">
        {element.providers_with_access.map((item, id, array) => (
          <>
            {id < 3 ? (
              <span key={id}>
                {id === array.length - 1 ? item : `${item}, `}
              </span>
            ) : null}
          </>
        ))}
        {element.providers_with_access.length > 3
          ? `+${element.providers_with_access.length - 3}`
          : ""}
      </td>
      <td className="td-name">
        <span className="flex items-center gap-2">
          {/* A pop-up(modify/Revoke) */}
          <ModifyRevoke />

          <span
            onClick={() => setOpened(true)}
            className="!text-[#ED5556] underline text-sm font-normal cursor-pointer"
          >
            Reset Account
          </span>
        </span>
      </td>
    </tr>
  ));

  return (
    <Table
      verticalSpacing="sm"
      horizontalSpacing="xs"
      className="bg-white rounded-lg card-shadow"
    >
      <thead className="!rounded-t-lg">
        <tr className=" bg-uacs-gray-50 ">
          <th className=" th-sp">
            <span className="flex gap-2 items-center">
              <span>Name</span>
              <span className="flex">
                <ArrowUp size="12" color="#5D5B60" variant="Outline" />
                <ArrowDown
                  size="12"
                  color="#5D5B60"
                  variant="Outline"
                  className="-ml-1"
                />
              </span>
            </span>
          </th>

          <th className="th-sp ">
            <span className="flex gap-2 items-center">
              <span>Email Address</span>
              <span className="flex">
                <ArrowUp size="12" color="#BF2018" variant="Outline" />
                <ArrowDown
                  size="12"
                  color="#BF2018"
                  variant="Outline"
                  className="-ml-1"
                />
              </span>
            </span>
          </th>
          <th className="th-sp ">Designation</th>
          <th className="th-sp">Service Provider</th>

          <th className=" th-sp">Access Control</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
      {/* On Click on Modify on this day leads to Modify access modal */}
      {/* <ModifyAccess opened={opened} setOpened={setOpened}/> */}
      <ResetAccount opened={opened} setOpened={setOpened} />
    </Table>
  );
}
