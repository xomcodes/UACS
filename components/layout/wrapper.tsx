import { DashboardAside, DashboardHeader } from '@/dashboard'
import { ArrowDown2 } from 'iconsax-react'
import React from 'react'

export const Wrapper = ({children, pages, text, icon}:{children?: React.ReactNode,pages?: string,  text:string , icon?:React.ReactNode }) => {
  return (
    <section className=' grid grid-cols-[270px,1fr] overflow-auto h-screen'>
       <DashboardAside/>
       <DashboardHeader pages={pages} text={text} icon={icon}>
        {children}
       </DashboardHeader>
       
       </section>
  )
}