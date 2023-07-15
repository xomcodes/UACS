import { ModifyAccess } from "@/modals/modify-access";
import { ResetAccount } from "@/modals/reset-account";
import { Active } from "@/pop-ups";
import { ModifyRevoke } from "@/pop-ups/modify-revoke";
import { usePortal } from "@ibnlanre/portal";
import { Popover, Table, clsx } from "@mantine/core";
import axios from "axios";
import { ArrowDown, ArrowDown2, ArrowUp } from "iconsax-react";
import { useEffect, useState } from "react";

interface IAccessManager {
 first_name: string;
 last_name: string;
  email: string;
  full_designation: string;
  providers_with_access: string[];
  id: number;
}
export function AccessTable1() {
  const [opened, setOpened] = useState(false);
  const [accessOpened, setAccessOpened] = useState(false);
  const [accessManager, setAccessManager] = useState<IAccessManager[]>([]);
  const [permission, setPermission] = usePortal('staff_permission', 0)

  // const [opened, setOpened] = useState(false);
  const elements = [
    {
      name: "Raheem Yusuf ",
      emailAddress: "@devis@gmail.com",
      designation: "VP, Innovation & Technology",
      serviceprovider: "WorkBench, ECN, ComX Admin, +5",
      accesscontrol: ["Modify", "icon", "Reset Account"],
    },
    {
      name: " Yusuf  Oguntola",
      emailAddress: "@devis@gmail.com",
      designation: "VP, Innovation & Technology",
      serviceprovider: "WorkBench, ECN, ComX Admin, +5",
      accesscontrol: ["Modify", "icon", "Reset Account"],
    },

    {
      name: " Cynthia Chi",
      emailAddress: "@devis@gmail.com",
      designation: "VP, Innovation & Technology",
      serviceprovider: "WorkBench, ECN, ComX Admin, +5",
      accesscontrol: ["Modify", "icon", "Reset Account"],
    },

    {
      name: " babatubde",
      emailAddress: "@devis@gmail.com",
      designation: "VP, Innovation & Technology",
      serviceprovider: "WorkBench, ECN, ComX Admin, +5",
      accesscontrol: ["Modify", "icon", "Reset Account"],
    },
  ];

  const getStaff = async () => {
    const accessToken = JSON.parse(
      localStorage.getItem("login-user") as string
    )?.access;

    try {
      const { data } = await axios({
        url: `${process.env.NEXT_PUBLIC_BASE_URL}staffs/all/`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      console.log(data)
    setAccessManager(data.results)
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getStaff();
  }, []);

  const rows = accessManager?.map((element) => (
    <tr key={element.id} className=" ">
      <td className="td-name ">{`${element.first_name} ${element.last_name}`}</td>
      <td className="td-name">{element.email}</td>
      <td className="td-name ">{element.full_designation}</td>
      <td   className="td-name  ">{element.providers_with_access.map((item, id) => (
        <span key={id}>
             {item.split( ,)}
        </span>
        
      ))}</td>
      <td className="td-name">
        <span className="flex items-center gap-2">
          {/* <ArrowDown2 size='18' color='#E1891C' /> */}
          {/* A pop-up(modify/Revoke) */}
          <ModifyRevoke setOpened={setAccessOpened} />
          {/* <Active/> */}

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
      <ModifyAccess opened={accessOpened} setOpened={setAccessOpened} />
    </Table>
  );
}
