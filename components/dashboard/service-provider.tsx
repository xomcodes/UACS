import { ArrowRight2 } from 'iconsax-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


const providerArr = [
  {
    provider : 'ComX',
    img:'/dashboard/dots-horizontal.png',
    text: 'https://www.comx.afexnigeria.com',
},

{
  provider : 'ATS Admin',
  img:'/dashboard/dots-horizontal.png',
  text: 'https://www.admin.afexats.com',
},

{
  provider : 'Talent Management',
  img:'/dashboard/dots-horizontal.png',
  text: 'https://www.talentmanagement.afexnigeria.com',
},

{
provider : 'HR Portal',
img:'/dashboard/dots-horizontal.png',
text: 'hhttps://www.hr.afexnigeria.com',
},

{
provider : 'WorkBench',
img:'/dashboard/dots-horizontal.png',
text: 'https://www.comx.afexnigeria.com',
},


{
  provider : 'WorkBench',
  img:'/dashboard/dots-horizontal.png',
  text: 'https://www.comx.afexnigeria.com',
  },

  {
    provider : 'WorkBench',
    img:'/dashboard/dots-horizontal.png',
    text: 'https://www.comx.afexnigeria.com',
    },

    {
      provider : 'WorkBench',
      img:'/dashboard/dots-horizontal.png',
      text: 'https://www.comx.afexnigeria.com',
      },
]
  


export const ServiceProvider = () => {
  return (
    <section className="bg-white rounded-lg card-shadow">
    <div className="py-8 px-4 flex flex-col gap-4">
    <div className=" flex flex-col gap-3">
       <div className="flex justify-between items-center">
         <h2 className=" text-uacs-gray-900 text-base font-semibold">Service Providers</h2>
         <div className="flex gap-2">
          <Link href='./service-provider-con/sp-create'><h3 className="text-xs font-medium text-uacs-ared-7">View all</h3></Link>
           <ArrowRight2 size={14} color="#BF2018" />
         </div>
       </div>

       <p className="text-xs font-medium text-uacs-gray-500 ">List of recent service providers on the platform</p>
     </div>


     { providerArr.map((item) => (
        <div key={item.provider} className="border-b border-b-[#DADADD] px-4 py-3">
        <div className="flex flex-col gap-1">
            <div className="flex justify-between ">
                <h2 className="text-sm text-uacs-eneutral-11 font-semibold">{item.provider}</h2>
                <Image src={item.img} width={24} height={24} alt={item.provider}/>
            </div>
            <p className="text-xs font-normal text-uacs-eneutral-8 ">https://www.comx.afexnigeria.com</p>
        </div>

    </div>
     ))}

     

    
    </div>
   </section>
  )
}
