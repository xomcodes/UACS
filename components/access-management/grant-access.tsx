import { Button } from '@/shared'
import { clsx } from '@mantine/core'
import Image from 'next/image'
import React from 'react'

export const GrantAccess = ({className, btntext}: {className?: string, btntext?: string } ) => {
  return (
   

    
    <div className={clsx('  flex justify-center items-center bg-white h-[85vh] rounded-lg', className)}>
          {/* Pasing classname as prop is having issues here. So i am suppoesed to to remove px-[clamp(....so it doesnt issues for othe pages)] bg white  h-85 */}
            <div className='flex flex-col gap-8 items-center'>
            <Image src='/access-m-images/nostaff.png' width='176' height='176' alt='nostaff'/>
            <div className='flex flex-col items-center justify-center gap-1'>
                <h3 className='text-xl font-semibold text-uacs-primary-90 '>No Staff with Access</h3>
                <p className='text-sm font-normal  max-w-[308px] text-uacs-cneutral-7 text-center'>A list of staff with access to service providers will appear here</p>
            </div>
            <Button  btntext='Add a Staff' type='primary' size='lg'   />
            </div>
        </div>
  
  )
}
