import React from "react";
import { clsx } from "@mantine/core";
import Image from "next/image";

export const BtnwithIcon = ({
  text,
  className,
  icon,
}: {
  text: string;
  className?: string;
  icon: string;
}) => {
  return (
    <button
      className={clsx(
        "flex gap-3 px-3 py-2 max-fit bg-uacs-ared-7 items-center h-fit rounded-lg justify-center",
        className
      )}
    >
      <Image src={icon} width="20" height="20" alt="plus" />
      <p className="whitespace-nowrap text-white">{text}</p>
    </button>
  );
};
