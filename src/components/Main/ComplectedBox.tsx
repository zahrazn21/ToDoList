import "react";
import { FaRegCircle } from "react-icons/fa6";
import { PiDotsThreeOutlineThin } from "react-icons/pi";
import img from "../../assets/images/Sign_Up.jpg";
interface type {
  status: string;
}
export default function ComplectedBox({ status }: type) {
  return (
    <div
      dir="rtl"
      className="border-1  border-[#] rounded-[20px] py-1 px-3"
    >
      <div className="flex justify-between">
        <div className="w-[40%]  place-content-center">
          <div className="dots text-[#A1A3AB] text-[25px]">
            <PiDotsThreeOutlineThin></PiDotsThreeOutlineThin>
          </div>
          <div className="w-[108px] h-[108px] rounded-[20px]">
            <img className="rounded-[20px]" src={img} alt="" />
          </div>
        </div>
        <div dir="ltr" className="w-[80%] gap-1 grid">
          <p className="text-[20px]">Walk the dog</p>
          <p className="text-[#747474] leading-5">
            Take the dog to the park and bring treats as well.
          </p>
          {status === "Complected" && (
            <>
              <p className="text-[12px] flex items-center">
                Status: <span className="text-[#05A301] ">Completed</span>
              </p>
              <p className="text-[#747474]">date</p>
            </>
          )}
        </div>
        <div>
          <div className={`${status=="Complected"?"text-[#05A301] ":status=="Not Started"?"text-[#F21E1E] ":"text-[#0225FF] "}text-xl mr-2 my-1`}>
            <FaRegCircle />
          </div>
        </div>
      </div>

      <div dir="ltr">
        {(status==="Not Started" || status==="In Progress") && (
          <>
            <div className="flex w-full justify-between items-center">
              <p className="text-[12px] flex items-center">
                Priority: <span className="text-[#42ADE2] mx-1">Moderate</span>
              </p>
              <p className="text-[12px] flex items-center">
                Status:{" "}
                <span
                  className={`${
                    status === "Not Started"
                      ? "text-[#F21E1E]"
                      : "text-[#0225FF]"
                  } mx-1` }
                >
                  {status}
                </span>
              </p>
              <p className="text-[#747474] text-[12px]">Created on: date</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
