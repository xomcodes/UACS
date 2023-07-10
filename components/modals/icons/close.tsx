import React from 'react'

export const Close = ({onClick,color,}: {onClick?:React.MouseEventHandler<SVGSVGElement>, color?: string, size?: string}) => {
  return (
    <svg className='cursor-pointer'  onClick={onClick} width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.75 5.89478L5.25 16.3948" stroke={color ||'#0089C8'} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5.25 5.89478L15.75 16.3948" stroke={color ||'#0089C8'} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>


  )
}
