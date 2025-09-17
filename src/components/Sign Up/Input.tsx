import  'react'
import type { ReactNode, Ref } from 'react';
interface dataType{
    name?:string
    type:string
    logo:ReactNode
    ref:Ref<HTMLInputElement>
    // width?:number
}
export default function Input({name,type,logo, ref}:dataType) {
  return (
    <div className={`flex px-2 items-center border-[1px] border-[#565454] rounded-[8px]  w-auto h-[60px]`}>
      <div className='text-[#212427] mr-8 text-[20px] mx-1'>
       {logo}    
    </div>    
      <input  ref={ref} className='w-full outline-0 text-[18px]' type={type} placeholder={`Enter ${name}`}/>
    </div>
  )
}
