import React from 'react'

export const Button = ({text} : {text:string}) => {
  return (
    <button className="px-[16px] py-[8px] bg-uacs-ared-7 text-white rounded-md max-w-fit flex font-medium leading-[150%] font-[Switzer] h-fit">
              {text}
              </button>
  )
}
