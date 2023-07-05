import React from 'react'
import { DashboardAside } from './dashboard-aside'
import { DashboardHeader } from './dashboard-header'

export const DashboardContainer = ({children}:{children: React.ReactNode}) => {
  return (
    <section className=' grid grid-cols-[270px,1fr] h-[100vh]'>
       <DashboardAside/>
       <DashboardHeader>
        {children}
       </DashboardHeader>
       
       </section>
  )
}
