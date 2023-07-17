
import { FilterContainer } from '@/activities'
import { ActivitiesTable } from '@/activities/activities-table'
import { Wrapper } from '@/layout'
import { ArrowDown2 } from 'iconsax-react'
import Head from 'next/head'
import React from 'react'

function Activities() {
    
  return (
  
   <>
   <Head>
   <title>UACS | Activity Log</title>
   </Head>
   <Wrapper text='Logs' pages='Activities' icon={<ArrowDown2 size="16" color='#292D32'/>}>
    <div className='pt-8 px-[clamp(0.75rem,1.6vw,1.5rem)] flex flex-col gap-10'>
    <FilterContainer/>
    <ActivitiesTable/>
    </div>  
   </Wrapper>
   </>

  
  )
}

export default Activities