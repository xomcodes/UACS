import Link from "next/link";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { ArrowRight2, FolderAdd, UserCirlceAdd } from "iconsax-react";
import clsx from "clsx";
import { LoadingOverlay } from "@mantine/core";

import useDashboardActivities from "../../hooks/use-dashboard-activities";

export const DashboardActivities = () => {
  dayjs.extend(relativeTime);

  const { activity, loading } = useDashboardActivities();

  return (
    <div className="flex flex-col gap-4 p-6 bg-white card-shadow rounded-lg flex-1 overflow-auto">
      <div className="flex justify-between p-6 items-center">
        <div>
          <h3 className="text-base font-semibold text-eneutral-10  ">
            Activities
          </h3>
          <p className="text-xs font-normal text-uacs-eneutral-7  ">
            Showing last 10 activities
          </p>
        </div>

        <div className="flex gap-2">
          <Link href="/logs/activities">
            <h3 className="text-xs font-medium text-uacs-ared-7 cursor-pointer ">
              View all activities
            </h3>
          </Link>

          <ArrowRight2 size={14} color="#BF2018" />
        </div>
      </div>
      <div className="flex flex-col overflow-auto scroll-bar-hidden gap-4">
        {activity.map((item, index) => (
          <div
            key={item.id}
            className=" flex justify-between items-center py-4 border-b"
          >
            <div className="flex gap-2 items-center ">
              {index % 2 === 0 ? (
                <figure className={clsx("bg-[#FCF3E8] p-2 rounded-lg")}>
                  <FolderAdd size="16" color="#E08100" variant="Bold" />
                </figure>
              ) : (
                <figure className={clsx("bg-[#EBFAF3] p-2 rounded-lg")}>
                  <UserCirlceAdd size="16" color="#1D925D" variant="Outline" />
                </figure>
              )}
              <div className="flex flex-col gap-2">
                <h3 className="text-xs font-semibold text-uacs-eneutral-11">
                  {item.activity}
                </h3>

                <p className="text-uacs-eneutral-8 font-normal text-xs">
                  By{" "}
                  <span className=" underline decoration-inherit ">
                    {item.actor_name}
                  </span>
                </p>
              </div>
            </div>
            <p className="text-xs font-medium text-uacs-eneutral-7">
              {dayjs(item.action_time).fromNow()}
            </p>
          </div>
        ))}
      </div>
      <LoadingOverlay visible={loading} />
    </div>
  );
};
