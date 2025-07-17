import "react";
import { HiOutlineBellAlert } from "react-icons/hi2";
import BoxHeader from "./BoxHeader";
import { LuCalendarDays } from "react-icons/lu";
import { BiSearchAlt2 } from "react-icons/bi";
import { useAuth } from "../../hooks/AppContext";

export default function Header() {
  const { text } = useAuth();
  const result = text?.split(" ");
  
  return (
    <div className="h-[80px] flex  absolute mb-1 drop-shadow-[0px_0px_8px_rgba(0,0,0,0.15)] bg-[#F8F8F8] w-full">
      <div dir="rtl" className="flex w-full   items-center justify-between">
        <div className="flex w-[20%] items-center justify-around">
          <div className="place-items-center">
            <p>date</p>
            <p className="text-[#3ABEFF]">12/12/2025</p>
          </div>
          <div dir="ltr" className="flex gap-2">
            <BoxHeader>
              <HiOutlineBellAlert />
            </BoxHeader>
            <BoxHeader>
              <LuCalendarDays />
            </BoxHeader>
          </div>
        </div>
        <div>
          <BoxHeader className="absolute top-[24%]">
            <BiSearchAlt2 />
          </BoxHeader>
          <div
            dir="ltr"
            className="px-5 flex items-center rounded-[8px] shadow-2xs h-[40px] bg-[#F5F8FF] w-[695px]"
          >
            <input
              placeholder="Search your task here..."
              className="outline-0 text-[16px] w-full"
              type="text"
            />
          </div>
        </div>
        <div className="text-[30px] w-[15%] font-bold place-items-center ">
          <span className="text-[#FF6767]">{result&&result[0]}</span>{result&&result[1]}
        </div>
      </div>
    </div>
  );
}
