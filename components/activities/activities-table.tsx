import { Table } from "@mantine/core";
import axios from "axios";
import { ArrowDown, ArrowUp } from "iconsax-react";
import { useState, useEffect } from "react";
import dayjs from "dayjs";
import LocalizedFormat from 'dayjs/plugin/localizedFormat'


export function ActivitiesTable() {

  dayjs.extend(LocalizedFormat)


  const [activity, setActivity] = useState<
    {
      activity: "string";
      actor_name: "string";
      date: "string";
      time: "string";
      id : number
    }[]
  >([]);



  const getActivities = async () => {
    const accessToken = JSON.parse(
      localStorage.getItem("login-user") as string
    )?.access;

    try {
      const { data } = await axios({
        url: `${process.env.NEXT_PUBLIC_BASE_URL}activity_log`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      setActivity(data.results);
      // console.log(data)
    } catch (error) {
      console.log(error);
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
      {/* <td className="td-name">{element.time?  dayjs(element.time).format('h:mm A') : '--'}</td> */}
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
            <div className="flex">
              <ArrowUp size="12" color="#5D5B60" variant="Outline" />
              <ArrowDown
                size="12"
                color="#5D5B60"
                variant="Outline"
                className="-ml-1"
              />
            </div>
          </th>
          <th className="th-name">Time</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </Table>
  );
}
