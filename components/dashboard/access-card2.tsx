import React from 'react'

import { People } from 'iconsax-react'
import { ArrowRightIcon } from './arrow-right-icon'
import Link from 'next/link'


export const AccessCard2 = () => {
  return (
    <div className='flex-1  card-shadow rounded-lg bg-white p-6'>
         <div className='flex justify-between flex-col h-[202px]'>
         <div className='flex justify-between'>
            <div className='flex flex-col gap-1.5'>
              <h2 className='font-[Switzer] font-bold text-[clamp(1.25rem,3vw,2.5rem)] text-uacs-wneutral-10' >1009</h2>
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
        </div>
  )
}
