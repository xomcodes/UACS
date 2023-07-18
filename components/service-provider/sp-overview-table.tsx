import { Button, Switch, Table } from "@mantine/core";
import { ArrowDown, ArrowUp, SearchNormal1 } from "iconsax-react";

import { InactiveDot } from "./inactive-dot";
import { FilterIcon } from "@/activities";
import Image from "next/image";

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
        <Switch
          classNames={{
            thumb: "bg-white h-5 w-5 ",
            track: "h-6 w-11 bg-[#DADADD]",
          }}
        />
      </td>
    </tr>
  ));

  return (
    <>
      {/* <FilterContainer/> */}
      <div className="flex justify-between  px-[clamp(0.75rem,1.6vw,1.5rem)] pb-1 items-center">
        <h3 className="px-[10px] text-uacs-eneutral-11 font-semibold text-sm ">
          Staff with access(50)
        </h3>
        <div className="flex gap-4">
          <div className="pl-4  pr-7 py-2 bg-white flex gap-4 items-center w-[clamp(11rem,23vw,22rem)]  rounded-[6px]">
            <div className="">
              <SearchNormal1 size="16" color="#C1C2C6" variant="Outline" />
            </div>
            <input
              type="search"
              placeholder={"filter by search"}
              className="outline-none w-full placeholder:text-xs placeholder:font-medium text-uacs-eneutral-6  "
            />
          </div>

          <Button
            leftIcon={<FilterIcon color="#BF2018" />}
            className="border-uacs-ared-7  hover:bg-transparent text-sm rounded-lg  h-10 w-[125px] text-uacs-ared-7 font-[Inter] "
            classNames={{
              inner: "gap-[8px]",
              leftIcon: "mr-0",
            }}
          >
            Filter
          </Button>

          <Button
            leftIcon={
              <Image
                src="/dashboard/plus.png"
                width="18"
                height="18"
                alt="plus"
              />
            }
            className="bg-uacs-ared-7 text-sm rounded-lg hover:bg-red-800 h-10 w-[162px] text-white"
            classNames={{
              inner: "gap-[10px]",
            }}
          >
            Add Staff
          </Button>
        </div>
      </div>

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
