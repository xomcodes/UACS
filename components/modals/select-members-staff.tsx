import { TextInput } from '@mantine/core'
import React from 'react'
import { Close } from './icons'


const providerList = [
    "Ayodele Emmanuel Davies",
  "Ojo Muhammed Ayodele",
  " Akinyinka Akintunde",
  "Ayodeji Balogun",
  " Ojo Muhammed Ayodele",
  "  Akinyinka Akintunde",
  "  Raheem Yusuf",
  "Ayodeji Balogun"
  ];



export function SelectMemebersStaff() {
  return (
    <div className="flex flex-col h-full gap-4 overflow-auto">
    <TextInput
      label="Search Provider"
      placeholder="Search Service Provider"
      classNames={{
        input:
          "w-full h-12 placeholder:text-sm font-normal text-uacs-eneutral-6",
        label: " text-uacs-eneutral-9 text-base font-medium",
        root: "flex flex-col gap-4 ",
      }}
    />
    <div className=" flex gap-2 overflow-auto flex-wrap">
      {providerList.map((item) => (
        <span
          key={item}
          className="flex gap-1 p-2 border-[0.5px]  bg-uacs-primary-0 rounded-lg whitespace-nowrap items-center  "
        >
          <p className="text-sm font-medium text-[#4A4C58]">
            {item}
          </p>
          <Close color="#C1C2C6" size="8" />
        </span>
      ))}
    </div>
  </div>
  )
}

export default SelectMemebersStaff