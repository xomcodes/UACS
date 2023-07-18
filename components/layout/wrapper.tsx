import React from "react";

import { DashboardAside, DashboardHeader } from "@/dashboard";


interface IWrapper {
  children?: React.ReactNode;
  pages?: string;
  text: string;
  icon?: React.ReactNode;
} 

export const Wrapper = ({
  children,
  pages,
  text,
  icon,
}: IWrapper) => {
  return (
    <section className=" grid grid-cols-[270px,1fr] overflow-auto h-screen">
      <DashboardAside />
      <DashboardHeader pages={pages} text={text} icon={icon}>
        {children}
      </DashboardHeader>
    </section>
  );
};
