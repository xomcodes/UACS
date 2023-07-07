import { Table, clsx } from "@mantine/core";
import { ArrowDown, ArrowUp } from "iconsax-react";


export function SecurityLog() {
  const elements = [
    {
      action: "Attempted login to ryusuf@afexnigeria.com ",
      result: "Failed",
      serviceProvider: "ComX Admin",
      timestamp: ["Apr. 28, 2016", "07.13pm"],
      location: ["Egbede, Lagos", "IP !92.168.0.1"],
    },
    {
      action: "Attempted login to jsimire@afexnigeria.com",
      result: "Success",
      serviceProvider: "ECN",
      timestamp: ["May6. 2012", "06:32 pm"],
      location: ["Ibadan, Oyo", "IP !92.168.0.1"],
    },
    {
      action: "Attempted login to aadebowale@afexnigeria.com ",
      result: "Success",
      serviceProvider: "ComX Admin",
      timestamp: ["Aug. 24, 2013", "02;30 pm"],
      location: ["Egbede, Lagos", "IP !92.168.0.1"],
    },
    {
      action: "Attempted login to esmart@afexnigeria.com ",
      result: "Failed",
      serviceProvider: "BankX",
      timestamp: ["Aug. 24, 2013", "02;30 pm"],
      location: ["Ibadan, Oyo", "IP !92.168.0.1"],
    },
    {
      action: "Attempted login to ryusuf@afexnigeria.com ",
      result: "Failed",
      serviceProvider: "ComX Admin",
      timestamp: ["May6. 2012", "06:32 pm"],
      location: ["Egbede, Lagos", "IP !92.168.0.1"],
    },
    {
      action: "Attempted login to jsimire@afexnigeria.com",
      result: "Success",
      serviceProvider: "ECN",
      timestamp:["May6. 2012", "06:32 pm"],
      location: ["Ibadan, Oyo", "IP !92.168.0.1"],
    },
  ];

  const rows = elements.map((element) => (
    <tr key={element.action} className=" ">
      <td className="td-name  ">Attempted login to <span className="font-bold">{element.action}</span></td>
      <td className={clsx('td-name', element.result === 'Failed' ? ' text-uacs-ared-6' : 'text-uacs-agreen-7')}>{element.result}</td>
      <td className="td-name ">{element.serviceProvider}</td>
      <td className="td-name"><span className="flex flex-col gap-1">
        {element.timestamp.map((item, index) => (
           <span key={index} className={clsx(index === 0 ? ' text-uacs-eneutral-8' : ' text-uacs-eneutral-6')}>{item}</span> 
        ))}
        </span></td>
      <td className="td-name">
        <span className="flex flex-col gap-1">
        {element.location.map((item, index) => (
            <span key={index} className={clsx(index === 0 ? ' text-uacs-eneutral-7 font-normal text-xs': "text-uacs-eneutral-9 font-bold text-sm" )}>{item}</span>
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
    </Table>
  );
}
