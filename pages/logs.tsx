import { FilterContainer } from '@/activities'
import { Wrapper } from '@/layout'
import { SecurityLog } from '@/logs'
import { ArrowDown2 } from 'iconsax-react'
import React from 'react'

function Logs() {
  return (
    <Wrapper text='Logs' pages='Security' icon={<ArrowDown2 size="16" color='#292D32'/>}>
        <div className='pt-8 px-[clamp(0.75rem,1.6vw,1.5rem)] flex flex-col gap-10'>
    <FilterContainer/>
    <SecurityLog/>
    </div> 
    </Wrapper>
  )
}

export default Logs