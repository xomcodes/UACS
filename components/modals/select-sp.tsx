import React, { useEffect, useState } from "react";

import { Select, TextInput } from "@mantine/core";

import { Close } from "./icons";
import useServiceProviders from "../../hooks/use-service-providers";

const providerList = [
  "ComX Admin",
  "WorkBench",
  " ECN",
  "Cuddie Admin",
  "Bank X",
  " UACS",
  "  Xpert Card",
  "AFEX ATS",
];

export function SelectSp({ setSelectedSP, selectedSP }: any) {
  const { sp } = useServiceProviders();
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

  return (
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
            <p className="text-sm font-medium text-[#4A4C58]">{item.name}</p>
            <Close
              onClick={() => {
                const filtered = setSelectedSP.filter((el: any) => el.id !== item.id);
                setSelectedSP(filtered);
              }}
              color="#C1C2C6"
              size="8"
            />
          </span>
        ))}
      </div>
    </div>
  );
}
