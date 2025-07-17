import 'react'
import type { ReactNode } from 'react'
interface type{
    text:string
    icon:ReactNode

}
export default function BoxMenu({icon,text}:type) {
  return (
    <div className='w-[288px] gap-2 h-[59px] items-center text-white hover:text-[#FF6767] flex px-4  hover:bg-white hover:rounded-[10px]'>
      <div className='text-[25px]'>
        {icon}
      </div>
      <div className='text-[16px]'>
      {text}
      </div>
    </div>
  )
}
