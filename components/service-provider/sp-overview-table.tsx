import { Switch, Table } from "@mantine/core";
import { ArrowDown, ArrowUp } from "iconsax-react";

import { InactiveDot } from "./inactive-dot";
import { FilterContainer } from "@/activities";

export function SpOverviewTable({ elements }: { elements: any[] }) {
  const rows = elements.map((element) => (
    <tr key={element.name} className=" ">
      <td className="td-name ">{element.first_name}</td>
      <td className="td-name">{element.email}</td>
      <td className="td-name ">{element.squad}</td>
      <td className="td-name  ">{element.tribe}</td>
      <td className="td-name  ">
        {element.status ? (
          <span className="flex gap-1 px-2 rounded-lg bg-[#E7F9F0] items-center max-w-fit">
            <InactiveDot color="#0DBF66" />
            <p className="text-[#076D3A] text-sm font-normal">Active</p>
          </span>
        ) : (
          <span className="flex gap-1 px-2 rounded-lg bg-[#FDEEEE] items-center max-w-fit">
            <InactiveDot color="#ED5556" />
            <p className="text-[#873031] text-sm font-normal">Inactive</p>
          </span>
        )}
      </td>
      <td className="td-name">
        <Switch />
      </td>
    </tr>
  ));

  return (
 <>
 {/* <FilterContainer/> */}
 
 <div className="p-7">
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

            <th className=" th-sp">
              <span className="flex gap-2 items-center">
                <span>Squad</span>
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

            <th className=" th-sp">
              <span className="flex gap-2 items-center">
                <span>Tribe</span>
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

            <th className=" th-sp">
              <span className="flex gap-2 items-center">
                <span>Status</span>
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

            <th className=" th-sp">Access Control</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
    </div>

 </>
   
    
  );
}
