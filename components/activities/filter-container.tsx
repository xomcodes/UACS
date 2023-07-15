import React from 'react'
import { useRouter } from 'next/router'
import { ArrowLeft2, SearchNormal1 } from 'iconsax-react'


import { FilterIcon } from './filter-icon'

export const FilterContainer = () => {

  const {back} = useRouter()

  return (
   
    <div className='flex justify-between'>
    <div onClick={() => back()} className='flex gap-[18px] items-center cursor-pointer'>
    <ArrowLeft2 size="24" color="#292D32" variant="Outline"/>
        <h3  className='text-sm font-semibold text-uacs-eneutral-11 cursor-pointer'>Back</h3>
    </div>

<div className='flex '>
    <div className='pl-4  pr-7 py-2 bg-white flex gap-4 items-center w-[clamp(11rem,23vw,22rem)]  rounded-tl-lg  rounded-bl-lg'>
        <div className=''>
        <SearchNormal1 size="16" color="#C1C2C6" variant="Outline"/>
        </div>
        <input type="search" placeholder='filter by search' className='outline-none w-full' /> 
    </div>

    <div className='px-2 bg-[#DADADD] flex rounded-tr-lg items-center  rounded-br-lg '>
      <FilterIcon />
    </div>
</div>

    
    
    </div>
   
    
  )
}
