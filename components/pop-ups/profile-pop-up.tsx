import { Popover } from '@mantine/core';
import { ArrowDown2, CloseCircle, Edit, Eye, LogoutCurve } from 'iconsax-react';
import React from 'react'
import { DropDown } from '@/dashboard';
import {useState} from 'react'
import { useRouter } from 'next/router';

export const ProfilePopUp = () => {
  const [opened, setOpened] = useState(false);
  const {push} = useRouter()


  return (
    <Popover position="bottom" classNames={{
        dropdown: 'rounded-lg py-2 w-[137px] pop-shadow  absolute '

    }} >
      <Popover.Target >
      <ArrowDown2  className='cursor-pointer ' color="#8F8E91"  size='18' onClick={() => setOpened(true)}/>
      </Popover.Target>
      <Popover.Dropdown>
        
      <div onClick={() => (push("/profile"))}  className="flex flex-col cursor-pointer gap-1">
      <div className=" flex gap-[10px] py-2 px-4">
        <Eye size="16" color="#8F9198" variant="Outline"/>
          <h2 className="text-uacs-eneutral-8 text-xs font-medium">
          View Profile
          </h2>
        </div>


          <div onClick={() => (push("/"))} className=" flex gap-2 py-2 px-4 cursor-pointer">
            <LogoutCurve size={16} color='#BF2018' className=' rotate-180' />
            <h2 className="text-[#BF2018] text-xs font-medium">
           Logout
            </h2>
          </div>
        </div>
      </Popover.Dropdown>
    </Popover>
  );
}
 
