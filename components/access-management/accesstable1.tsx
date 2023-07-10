import { Table, clsx } from "@mantine/core";
import { ArrowDown, ArrowDown2, ArrowUp } from "iconsax-react";

export function AccessTable1() {
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
         
          <span className=" underline !text-[#E1891C] text-sm font-normal cursor-pointer">Modify</span>
         <ArrowDown2 size='18' color='#E1891C' />
          <span className="!text-[#ED5556] underline text-sm font-normal cursor-pointer">Reset Account</span>
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
    </Table>
  );
}


// text-[#514747] text-sm font-normal 