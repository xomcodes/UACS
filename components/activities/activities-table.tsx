import { Table } from '@mantine/core';
import { ArrowDown, ArrowUp } from 'iconsax-react';

export function ActivitiesTable() {
    const elements = [
        { user: 'Babatunde Adebowale', action: 'Updated Raheem Yusuf’s permission for ComX ', date: '20 February, 2023', time: '10:03 AM' },
        { user: 'Joshua Simire', action: 'Updated Raheem Yusuf’s permission for ComX ', date: '20 February, 2023', time: '10:03 AM' },
        { user: 'Ayodele Davies', action: 'Updated Raheem Yusuf’s permission for ComX ', date: '20 February, 2023', time: '10:03 AM' },
        { user: 'Toluwanimi Smith Ogunbiyi', action: 'Updated Raheem Yusuf’s permission for ComX ', date: '20 February, 2023', time: '10:03 AM' },
        { user: 'Toyyib Olalekan Oladejo', action: 'Updated Raheem Yusuf’s permission for ComX ', date: '20 February, 2023', time: '10:03 AM' },
      ];

  const rows = elements.map((element) => (
    <tr key={element.user} className=' '>
      <td className='td-name  '>{element.user}</td>
      <td className='td-name  '>{element.action}</td>
      <td className='td-name '>{element.date}</td>
      <td className='td-name'>{element.time}</td>
    </tr>
  ));

  return (
    <Table  verticalSpacing="md" className='bg-white rounded-lg card-shadow'>
      <thead className='!rounded-t-lg'>
        <tr className=' bg-uacs-gray-50 '>
          <th className=' th-name'>User</th>
          <th className='th-name'>Action</th>
          <th className=' th-name flex gap-2 items-center'>Date
          <div className='flex'>
         <ArrowUp size="12" color="#5D5B60" variant="Outline"/>
          <ArrowDown size="12" color="#5D5B60" variant="Outline"  className='-ml-1'  />
          </div>
          </th>
          <th className='th-name'>Time</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </Table>
  );
}