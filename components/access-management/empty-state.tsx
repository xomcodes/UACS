import React, { useState } from "react";
import { clsx } from "@mantine/core";
import Image from "next/image";
import { Button } from "@mantine/core";

import { GrantAccess } from "@/modals";

interface IEmpty {
  className?: string;
  btnText: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  getStaff?: any;
}

export const EmptyState = ({
  className,
  btnText,
  onClick,
  getStaff,
}: IEmpty) => {
  const [opened, setOpened] = useState(false);

  return (
    <div
      className={clsx(
        "flex justify-center items-center bg-white h-full rounded-lg",
        className
      )}
    >
      <div className="flex flex-col gap-8 items-center">
        <Image
          src="/access-m-images/Vector.png"
          width="176"
          height="176"
          alt="nostaff"
        />
        <div className="flex flex-col items-center justify-center gap-1">
          <h3 className="text-xl font-semibold text-uacs-primary-90 ">
            No Staff with Access
          </h3>
          <p className="text-sm font-normal  max-w-[308px] text-uacs-cneutral-7 text-center">
            A list of staff with access to service providers will appear here
          </p>
        </div>
        <Button
          onClick={onClick}
          className="!bg-uacs-ared-7 !rounded-lg hover:!bg-red-800 !h-[46px]  !text-white !text-sm  !w-fit "
        >
          {btnText}
        </Button>
        {opened ? (
          <GrantAccess
            getStaff={getStaff}
            opened={opened}
            setOpened={setOpened}
          />
        ) : null}
      </div>
    </div>
  );
};
