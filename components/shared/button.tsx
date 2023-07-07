import React from "react";
import { clsx } from "@mantine/core";

export const Button = ({
  text,
  type,
  size,
  className,
  btntext
}: {
  text?: string;
  type: "primary" | "outline";
  size: "sm" | "md" | "lg";
  className?: 'string';
  btntext? : any

}) => {
  return (
    <button
      className={clsx(
        type === "primary"
          ? " bg-uacs-ared-7 text-white text-sm font-medium hover:bg-red-600"
          : " text-uacs-eneutral-7  bg-transparent border-[1px]  border-[#8F9198] ",
        size === "sm"
          ? "py-2 px-4"
          : size === "md"
          ? "py-[10px] px-[14px]"
          : "p-3 px-5",
        "rounded-lg font-medium font-[Swizer] max-w-fit ", {className}
      )}
    >
      {text} {btntext}
    </button>
  );
};
