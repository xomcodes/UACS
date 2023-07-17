import { useState, useEffect } from "react";
import LocalizedFormat from "dayjs/plugin/localizedFormat";
import { LoadingOverlay, Table } from "@mantine/core";
import { ArrowDown, ArrowUp } from "iconsax-react";
import dayjs from "dayjs";
import axios from "axios";
import { errorNotification } from "../../utils/notification";
import { handleError } from "../../utils/error-handler";


interface IActivitiesTable {
  activity: "string";
  actor_name: "string";
  date: "string";
  time: "string";
  id: number;
}

export function ActivitiesTable() {
  dayjs.extend(LocalizedFormat);

  const [activity, setActivity] = useState<IActivitiesTable[]>([]);
  const [loading, setLoading] = useState(false);

  const getActivities = async () => {
    const accessToken = JSON.parse(
      localStorage.getItem("login-user") as string
    )?.access;

    setLoading(true);
    try {
      const { data } = await axios({
        url: `${process.env.NEXT_PUBLIC_BASE_URL}activity_log/`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      setActivity(data.results);
      setLoading(false);
    } catch (error: any) {
      handleError(error)
      setLoading(false);
    }
  };

  useEffect(() => {
    getActivities();
  }, []);


  const rows = activity.map((element) => (
    <tr key={element.id} className=" ">
      <td className="td-name  ">{element.actor_name}</td>
      <td className="td-name  ">{element.activity}</td>
      <td className="td-name ">{element.date}</td>
      <td className="td-name">{element.time}</td>
      {/* <td className="td-name">
        {element.time ? dayjs(element.time).format("h:mm A") : "--"}
      </td> */}
    </tr>
  ));

  return (
    <Table verticalSpacing="md" className="bg-white rounded-lg card-shadow">
      <thead className="!rounded-t-lg">
        <tr className=" bg-uacs-gray-50 ">
          <th className=" th-name">User</th>
          <th className="th-name">Action</th>
          <th className=" th-name flex gap-2 items-center">
            Date
            <span className="flex">
              <ArrowUp size="12" color="#5D5B60" variant="Outline" />
              <ArrowDown
                size="12"
                color="#5D5B60"
                variant="Outline"
                className="-ml-1"
              />
            </span>
          </th>
          <th className="th-name">Time</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
      <LoadingOverlay visible={loading} />
    </Table>
  );
}
