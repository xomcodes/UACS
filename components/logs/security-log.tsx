import { useEffect, useState } from "react";
import axios from "axios";
import { LoadingOverlay, Table, clsx } from "@mantine/core";

import { handleError } from "../../utils/error-handler";

export function SecurityLog() {
  const [security, setSecurity] = useState<
    {
      action: string;
      result: string;
      serviceProvider: string;
      timestamp: string[];
      location: string[];
      id: number;
    }[]
  >([]);
  const [loading, setLoading] = useState(false);

  // Send  a Get request
  const getSecurity = async () => {
    const accessToken = JSON.parse(
      localStorage.getItem("login-user") as string
    )?.access;
    setLoading(true);
    try {
      const { data } = await axios({
        url: `${process.env.NEXT_PUBLIC_BASE_URL}security_log/`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      setLoading(false);

      setSecurity(
        data.results.reduce((acc: any, curr: any) => {
          acc.push({
            action: curr?.activity,
            result: curr?.status,
            serviceProvider: curr?.service_provider,
            timestamp: [curr?.date, curr?.time],
            location: [curr?.location, curr?.ip_address],
          });
          return acc;
        }, [])
      );
    } catch (error: any) {
      handleError(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getSecurity();
  }, []);

  const rows = security.map((element) => (
    <tr key={element?.id}>
      <td className="td-name  ">{element?.action}</td>
      <td
        className={clsx(
          element.result === "Success" ? "!text-[#30AD74]" : "text-[#BF2018]",
          "!font-[Switzer] !font-normal !border-t !border-[#f5f5f5] !text-[0.875rem]"
        )}
      >
        {element?.result}
      </td>
      <td className="td-name ">{element?.serviceProvider}</td>
      <td className="td-name">
        <span className="flex flex-col gap-1">
          {element?.timestamp?.map((item, index) => (
            <span
              key={index}
              className={clsx(
                index === 0 ? " text-uacs-eneutral-8" : " text-uacs-eneutral-6"
              )}
            >
              {item}
            </span>
          ))}
        </span>
      </td>
      <td className="td-name">
        <span className="flex flex-col gap-1">
          {element?.location?.map((item, index) => (
            <span
              key={index}
              className={clsx(
                index === 0
                  ? " text-uacs-eneutral-7 font-normal text-xs"
                  : "text-uacs-eneutral-9 font-bold text-sm"
              )}
            >
              {item}
            </span>
          ))}
        </span>
      </td>
    </tr>
  ));

  return (
    <Table
      verticalSpacing="sm"
      horizontalSpacing="xs"
      className="bg-white rounded-lg card-shadow"
    >
      <thead className="!rounded-t-lg">
        <tr className=" bg-uacs-gray-50 ">
          <th className=" th-name">Action</th>
          <th className="th-name">Result</th>
          <th className="th-name">Service Provider</th>
          <th className="th-name">Timestamp</th>
          <th className="th-name">Location</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
      <LoadingOverlay visible={loading} />
    </Table>
  );
}
