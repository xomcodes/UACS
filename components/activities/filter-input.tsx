import { SearchNormal1 } from 'iconsax-react'
import React from 'react'
import { FilterIcon } from './filter-icon'

export const FilterInput = () => {
  return (
    <div className='flex '>
    <div className='pl-4  pr-7 py-2 bg-white flex gap-4 items-center w-[clamp(11rem,23vw,22rem)]  rounded-tl-lg  rounded-bl-lg'>
        <div className=''>
        <SearchNormal1 size="16" color="#C1C2C6" variant="Outline"/>
        </div>
        <input type="search" placeholder='filter by search' className='outline-none w-full' /> 
    </div>

    <div className='px-2 bg-[#DADADD] flex rounded-tr-lg items-center  rounded-br-lg '>
      <FilterIcon className=' justify-self-center'/>
    </div>
</div>
  )
}
