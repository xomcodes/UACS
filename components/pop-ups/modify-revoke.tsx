import { ModifyAccess, ReVokeAccess, ResetAccount } from "@/modals";
import { Menu, Popover } from "@mantine/core";
import { ArrowDown2, CloseCircle, Edit } from "iconsax-react";
import { useState } from "react";

export function ModifyRevoke() {
  const [opened, setOpened] = useState(false);
  const [revokeOpened, setRevokeOpened] = useState(false);
  return (
    <Menu
      position="bottom"
      classNames={{
        dropdown: "rounded-lg p-0 !w-fit pop-shadow",
      }}
      styles={{
        item: {
          "&:hover": {
            background: "transparent",
          },
        },
      }}
    >
      <Menu.Target>
        <span className="flex items-center gap-1">
          <span className=" underline !text-[#E1891C] text-sm font-normal cursor-pointer">
            Modify
          </span>
          <ArrowDown2 size="18" color="#E1891C" />
        </span>
      </Menu.Target>
      <Menu.Dropdown>
        <Menu.Item>
          <div className="flex flex-col cursor-pointer">
            <div
              className=" flex gap-2 py-2 px-4"
              onClick={() => setOpened(true)}
            >
              <Edit size="12" color="#4A4C58" variant="Outline" />
              <h2 className=" text-uacs-eneutral-9 text-xs font-medium">
                Modify Access
              </h2>
            </div>

            <div
              className=" flex gap-2 py-2 px-4"
              onClick={() => setRevokeOpened(true)}
            >
              <CloseCircle size="12" color="#ED5556" variant="Outline" />
              <h2 className="text-[#ED5556] text-xs font-medium">
                Revoke Access
              </h2>
            </div>
          </div>
        </Menu.Item>
      </Menu.Dropdown>
      {/* <ResetAccount  /> */}
      <ReVokeAccess revokeopened={revokeOpened} setRevokeOpened={setRevokeOpened}/>
      <ModifyAccess opened={opened} setOpened={setOpened} />
    </Menu>
  );
}
