import React from 'react'
import Link from 'next/link'

import { ArrowRight2, FolderAdd, UserCirlceAdd } from 'iconsax-react'
import clsx from 'clsx'


 const activitiesList = [
    {
        img: <FolderAdd size="16" color="#E08100" variant="Bold"/>,
        text: 'Updated Rayeem Yusufs Permission for ComX',
        editor: 'Gloria Eromonsele',
        time: '11m ago',
        figure: 'bg-[#EBFAF3] p-2 rounded-lg'
    },

    {
        img: <UserCirlceAdd size="16" color="#1D925D" variant="Outline"/>,
        text: 'Created a service provider, WorkBench',
        editor: 'By Goodness Iko-Oji',
        time: '11m ago',
        figure: 'bg-[#EBFAF3] p-2 rounded-lg'
    },

    {
        img: <FolderAdd size="16" color="#E08100" variant="Bold"/>,
        text: 'Updated Rayeem Yusufs Permission for ComX',
        editor: 'Gloria Eromonsele',
        time: '11m ago',
        figure: 'bg-[#FCF3E8] p-2 rounded-lg'
    },

    {
        img: <UserCirlceAdd size="16" color="#1D925D" variant="Outline"/>,
        text: 'Created a service provider, WorkBench',
        editor: 'By Goodness Iko-Oji',
        time: '11m ago',
        figure: 'bg-[#EBFAF3] p-2 rounded-lg'
    },


    {
        img: <FolderAdd size="16" color="#E08100" variant="Bold"/>,
        text: 'Updated Rayeem Yusufs Permission for ComX',
        editor: 'Gloria Eromonsele',
        time: '11m ago',
        figure: 'bg-[#FCF3E8] p-2 rounded-lg'
    },

    {
        img: <UserCirlceAdd size="16" color="#1D925D" variant="Outline"/>,
        text: 'Created a service provider, WorkBench',
        editor: 'By Goodness Iko-Oji',
        time: '11m ago',
        figure: 'bg-[#EBFAF3] p-2 rounded-lg'
    },



    
 ]

export const DashboardActivities = () => {
  return (
    <div className="flex flex-col gap-4 mt-7 bg-white card-shadow rounded-lg">
    <div className="p-6">
    <div className="flex justify-between p-6 items-center">
      <div >
        <h3 className="text-base font-semibold text-eneutral-10  ">Activities</h3>
        <p className="text-xs font-normal text-uacs-eneutral-7  ">Showing last 10 activities</p>
      </div>

      <div className="flex gap-2">
        <h3 className="text-xs font-medium text-uacs-ared-7 ">
          View all activities
        </h3>
        <ArrowRight2 size={14} color="#BF2018" />
      </div>
    </div>

   

    {activitiesList.map((item) => (
         <div className=" flex justify-between items-center py-4 border-b">
         <div className="flex gap-2 items-center ">
         <figure className= {clsx(item.figure)} >
         {item.img}
         </figure>
           <div className="flex flex-col gap-2">
               <h3 className="text-xs font-semibold text-uacs-eneutral-11">{item.text}</h3>
               <p className="text-uacs-eneutral-8 font-normal text-xs">By <Link href='' className=" underline decoration-inherit ">{item.editor}</Link></p>
           </div>
         </div>
           <p className="text-xs font-medium text-uacs-eneutral-7">{item.time}</p>
     
     
         </div>
    ))}

    </div>
  </div>
  )
}

// border-b border-b-[bg-[#FCF3E8]]
// pb-2