import React from 'react'
import ComplectedBox from '../Main/ComplectedBox'
import type { typeRes } from '../../types/TypeRes'
import TaskShow from './TaskShow'

interface types{
    data:typeRes[]
    showData:typeRes
    title:string
}
export default function TaskAndDetails({title,data,showData}:types) {
  return (
      <div className="fixed bottom-0 left-100 w-[70%]  h-[88%] grid md:block ">
         <div
           dir="rtl"
           className="h-[99%] flex justify-between items-end gap-10 px-15 py-3    my-1 rounded-[1px]"
         >
           <TaskShow dataShow={showData}></TaskShow>
   
           <div
             dir="ltr"
             className="w-[60%] px-5 rounded-2xl border-1 h-full border-[#A1A3AB] shadow-xl"
           >
             <p className="my-3">
               <span className="border-b-3  border-[#F24E1E]">{title} </span>Tasks
             </p>
             <div
               className="gap-2 grid overflow-y-auto  justify-center
                   [&::-webkit-scrollbar]:w-1   h-[550px] 
             "
             >
               {data?.map((res, index) => (
                 <ComplectedBox key={index} data={res}></ComplectedBox>
               ))}
             </div>
           </div>
         </div>
       </div>
  )
}
