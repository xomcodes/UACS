import React, { useState } from "react";
import { Briefcase, Home3, LogoutCurve, People, UserEdit } from "iconsax-react";

// import { BtnwithIcon } from "@/shared";
import { LogIcon } from "@/logs";
import LogoSmall from "@/shared/logo-small";
import Link from "next/link";
import { Button, clsx } from "@mantine/core";
import Image from "next/image";
import { useRouter } from "next/router";
import { CreateSp } from "@/modals";

export const DashboardAside = () => {
  const { pathname, push } = useRouter();
  const asideList = [
    {
      img: (
        <Home3
          size="20"
          variant={pathname.includes("dashboard") ? "Bold" : "Outline"}
        />
      ),
      name: "Dashboard Overview",
      link: "/dashboard",
    },
    {
      img: (
        <Briefcase
          size="20"
          variant={pathname.includes("service-provider") ? "Bold" : "Outline"}
        />
      ),
      name: "Service Provider",
      link: "/service-provider",
    },
    {
      img: (
        <People
          size="20"
          variant={pathname.includes("access-management") ? "Bold" : "Outline"}
        />
      ),
      name: "Access Management",
      link: "/access-management",
    },

    {
      img: (
        <LogIcon
          size="20"
          variant={pathname.includes("logs") ? "Bold" : "Outline"}
        />
      ),
      name: "Logs",
      children: [
        { name: "Security Log", link: "/logs/security" },
        { name: "Activity Log", link: "/logs/activities" },
      ],
    },
  ];

  const downList = [
    {
      img: (
        <UserEdit
          size="20"
          variant={pathname.includes("profile") ? "Bold" : "Outline"}
        />
      ),
      name: "Profile",
      link: "/profile",
    },

    {
      img: (
        <LogoutCurve
          size="20"
          color="#4A4C58"
          variant="Outline"
          className="rotate-180"
        />
      ),
      name: "Logout",
      action: () => {
        push("/");
      },
    },
  ];

  const [opened, setOpened] = useState(false);
  return (
    <aside className=" py-5 px-[clamp(1rem,2.5vw,2.06rem)] flex flex-col gap-14">
      <Link href="/dashboard">
        <LogoSmall />
      </Link>
      <div className="grid gap-8">
        <Button
          leftIcon={
            <Image
              src="/dashboard/plus.png"
              width="18"
              height="18"
              alt="plus"
            />
          }
          className="bg-uacs-ared-7 text-sm rounded-lg hover:bg-red-800 h-10 w-fit text-white"
          classNames={{
            inner: "gap-[10px]",
          }}
          onClick={() => setOpened(true)}
        >
          Service Provider
        </Button>

        <div className="flex flex-col gap-6">
          <div className=" flex flex-col gap-6">
            {/* Map 1 */}
            {asideList.map((item) =>
              !item.children ? (
                <Link href={item.link} key={item.name}>
                  <div
                    key={item.name}
                    className={clsx(
                      pathname.includes(item.link)
                        ? "text-uacs-ared-7"
                        : "text-uacs-eneutral-9",
                      "flex gap-3 items-center"
                    )}
                  >
                    <div className=""> {item.img} </div>
                    <h2 className="  hover:text-uacs-ared-7 font-medium font-[Switzer] text-[0.9rem]">
                      {item.name}
                    </h2>
                  </div>
                </Link>
              ) : (
                <div className="flex flex-col gap-2 ">
                  <div className="flex gap-3 items-center ">
                    <div className=""> {item.img} </div>
                    <h2 className=" text-uacs-eneutral-9 hover:text-uacs-ared-7 font-medium font-[Switzer] text-[0.9rem]">
                      {item.name}
                    </h2>
                  </div>

                  <div className="flex flex-col gap-4 border-l  border-l-[#DADADD] ml-6">
                    {item.children.map((ele) => (
                      <Link href={ele.link} className="  pl-3">
                        <h3
                          className={clsx(
                            pathname.includes(ele.link)
                              ? " bg-uacs-eneutral-5 py-[2px]  border-l border-l-[#5E606A] pl-2 text-uacs-eneutral-8 text-xs font-medium rounded-r-lg "
                              : "text-xs font-medium text-uacs-eneutral-7"
                          )}
                        >
                          {ele.name}
                        </h3>
                      </Link>
                    ))}
                  </div>
                </div>
              )
            )}
          </div>
          <div className="flex flex-col gap-6">
            <h2 className=" text-uacs-eneutral-7 font-light font-[Switzer] text-[0.9rem]">
              ADMIN
            </h2>
            <div className=" flex flex-col gap-6">
              {/* Map 2 */}
              {downList.map((item) =>
                item.link ? (
                  <Link
                    href={item.link}
                    key={item.name}
                    className={clsx(
                      pathname.includes(item.link)
                        ? "text-uacs-ared-7"
                        : "text-uacs-eneutral-9",
                      "flex gap-3 items-center"
                    )}
                  >
                    {item.img}
                    <h2 className="  hover:text-uacs-ared-7 font-medium font-[Switzer] text-[0.9rem]">
                      {item.name}
                    </h2>
                  </Link>
                ) : (
                  <div
                    onClick={item.action}
                    key={item.name}
                    className="flex gap-3 items-center cursor-pointer "
                  >
                    {item.img}
                    <h2 className=" text-uacs-eneutral-9 hover:text-uacs-ared-7 font-medium font-[Switzer] text-[0.9rem]">
                      {item.name}
                    </h2>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
      <CreateSp opened={opened} setOpened={setOpened} />
    </aside>
  );
};
