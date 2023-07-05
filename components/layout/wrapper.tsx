import { DashboardAside, DashboardHeader } from '@/dashboard'
import React from 'react'

export const Wrapper = ({children}:{children: React.ReactNode}) => {
  return (
    <section className=' grid grid-cols-[270px,1fr] h-[100vh]'>
       <DashboardAside/>
       <DashboardHeader>
        {children}
       </DashboardHeader>
       
       </section>
  )
}