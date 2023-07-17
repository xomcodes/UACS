import React, { useEffect, useState } from 'react'
import { usePortal } from '@ibnlanre/portal'
import { LoadingOverlay } from '@mantine/core'
import { People } from 'iconsax-react'
import Link from 'next/link'
import axios from 'axios'


import { ArrowRightIcon } from './arrow-right-icon'
import { errorNotification } from '../../utils/notification'
import { handleError } from '../../utils/error-handler'


export const AccessCard2 = () => {
  
  const [staffAccess, setStaffAccess] = usePortal<{staff_with_access:number} | null>('sp-access',null)
  const [loading, setLoading] = useState(false)

  const getCount = async () => {
    const accessToken = JSON.parse(
      localStorage.getItem("login-user") as string
    )?.access;
    
    setLoading(true)

    try {
      const { data } = await axios({
        url: `${process.env.NEXT_PUBLIC_BASE_URL}count/`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      setLoading(false)
      setStaffAccess(data)
    } catch (error: any) {
      handleError(error)
      setLoading(false)
    }
  };


  useEffect(() => {
    getCount();
  }, []);


  return (
    <div className='flex-1  card-shadow rounded-lg bg-white p-6'>
         <div className='flex justify-between flex-col h-[202px]'>
         <div className='flex justify-between items-center'>
            <div className='flex flex-col gap-1.5'>
              <h2 className='font-[Switzer] font-bold text-[clamp(1.25rem,3vw,2.5rem)] text-uacs-wneutral-10' >{staffAccess?.staff_with_access}</h2>
              <p className='font-[Switzer] font-medium text-sm text-uacs-wneutral-10 '> Staff with access</p>
            </div>
            <figure className=' w-10 h-10 rounded-full flex items-center justify-center p-2 bg-uacs-ared-5'>
            <People size="32" color="#FFFFFF" variant="Bold"/>
            </figure>
          </div>

          <Link href="/access-management" className='flex gap-2.5 items-center '>
            <p className='font-[Switzer] font-semibold text-sm text-uacs-ared-7'>View staff list</p>
            <ArrowRightIcon/>
          </Link>
         </div>
         <LoadingOverlay visible={loading} />
        </div>
  )
}
