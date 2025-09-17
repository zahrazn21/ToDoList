import "react";
import type { ReactNode, Ref } from "react";
import { useAuth } from "../../hooks/AppContext";
interface type {
  label: string;
  ref?: Ref<HTMLInputElement>;
  icon?: ReactNode;
  value?:string
  defaultValue?:string
  className?:string
}
export default function InputEdit({className,value, label, ref, icon , defaultValue }: type) {
  const {setCalendarOpen}=useAuth()
  
  return (
    <div className="grid h-0 w-full gap-1">
      <label htmlFor="" className="font-bold">
        {label}
      </label>
      <div 
                className="text-[20px] flex items-center justify-between px-2 py-1 w-[60%] rounded-[5px] border-2 outline-0 border-[#a1a3ab51] "

      >
        <input
        defaultValue={defaultValue}
          ref={ref}
          type="text"
          value={value}
          className={`outline-0 w-[95%] ${className}`}
        />
        {icon && 
        <div 
        onClick={()=>(setCalendarOpen(true))}
        className="text-[#a1a3abab]">
          {icon}
        </div>
        }
      </div>
    </div>
  );
}
