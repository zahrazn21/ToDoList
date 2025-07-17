import  { type ReactNode } from 'react'
interface type{
    text:string
    icon:ReactNode
}
export default function TextBox({text,icon}:type) {
  return (
      <p   className="text-[#FF6767] flex gap-2 items-center">
                  <div className="text-[#A1A3AB] text-[30px] ">
                   {icon}
                  </div> 
                  {text}  
                </p>
  )
}
