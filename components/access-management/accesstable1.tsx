import { ModifyAccess } from "@/modals/modify-access";
import { ResetAccount } from "@/modals/reset-account";
import { Active } from "@/pop-ups";
import { ModifyRevoke } from "@/pop-ups/modify-revoke";
import { Popover, Table, clsx } from "@mantine/core";
import { ArrowDown, ArrowDown2, ArrowUp } from "iconsax-react";
import {useState} from 'react'

export function AccessTable1() {
  
  const [opened, setOpened] = useState(false);
  const [accessOpened, setAccessOpened] = useState(false);
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

  const rows = elements.map((element) => (
    <tr key={element.name} className=" ">
      <td className="td-name ">{element.name}</td>
      <td className="td-name">{element.emailAddress}</td>
      <td className="td-name ">{element.designation}</td>
      <td className="td-name  ">{element.serviceprovider}</td>
      <td className="td-name">
        <span className="flex items-center gap-2">
         
          

          
          {/* <ArrowDown2 size='18' color='#E1891C' /> */}
          {/* A pop-up(modify/Revoke) */}
          <ModifyRevoke setOpened={setAccessOpened}/>
          {/* <Active/> */}
          
        
          <span onClick={() => setOpened(true)}   className="!text-[#ED5556] underline text-sm font-normal cursor-pointer">Reset Account</span>
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

          <th className=" th-sp">
           Access Control
          </th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
      {/* On Click on Modify on this day leads to Modify access modal */}
      {/* <ModifyAccess opened={opened} setOpened={setOpened}/> */}
      <ResetAccount opened={opened} setOpened={setOpened}/>
    <ModifyAccess opened={accessOpened} setOpened={setAccessOpened}/>

    </Table>
  );
}


// text-[#514747] text-sm font-normal 