import "react";
import type { ReactNode } from "react";
interface Type{
    children:ReactNode
    className?:string
}
export default function BoxHeader({children,className}:Type) {
  return (
    <div className={`w-[40px] text-white place-items-center place-content-center text-[22px] h-[40px] bg-[#FF6767] rounded-[9px] ${className}`}>
       {children}
    </div>
  );
}
