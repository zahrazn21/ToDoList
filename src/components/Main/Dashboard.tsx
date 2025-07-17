import "react";
import DonatChart from "./DonatChart";
import { LuCalendarCheck2 } from "react-icons/lu";
import { LuCalendarCheck } from "react-icons/lu";
import TextBox from "./TextBox";
import ComplectedBox from "./ComplectedBox";
import { FaPlus } from "react-icons/fa6";
import { TbCalendarTime } from "react-icons/tb";

export default function Dashboard() {
  return (
    <div className="fixed bottom-0 left-100 w-[70%]  h-[88%] grid md:block">
      <div>
        <p className="text-[25px]">Welcome back, Sundar👋</p>
      </div>

      <div
        dir="rtl"
        className="h-[92%] flex justify-between items-end gap-10 px-15 py-3 border-1  shadow-md shadow-[#D9D9D9] border-[#D9D9D9] my-1 rounded-[1px]"
      >
        <div className="gap-6 bottom-0 end-0 grid">
          <div
            dir="ltr"
            className="w-[480px] px-5 rounded-b-2xl h-[200px]  shadow-xl/5 "
          >
            <TextBox
              text="Task Status"
              icon={<LuCalendarCheck2></LuCalendarCheck2>}
            ></TextBox>
            <div dir="rtl" className="flex items-center justify-between">
              <DonatChart number={30} name="Not Started"></DonatChart>
              <DonatChart number={50} name="In Progress"></DonatChart>
              <DonatChart number={84} name="Completed"></DonatChart>
            </div>
          </div>
          <div
            dir="ltr"
            className="w-[480px]  px-5 rounded-b-2xl h-[342px]  shadow-xl/5"
          >
            <TextBox
              text="Complected Task"
              icon={<LuCalendarCheck></LuCalendarCheck>}
            ></TextBox>
            <div className="grid gap-2 mt-3">
              <ComplectedBox status="Complected"></ComplectedBox>
              <ComplectedBox status="Complected"></ComplectedBox>
            </div>
          </div>
        </div>
        <div
          dir="ltr"
          className=" w-[480px] rounded-b-2xl h-[570px]  shadow-xl/5"
        >
          <div className="px-5">
            <div className="flex justify-between">
              <TextBox
                text="To-Do"
                icon={<TbCalendarTime></TbCalendarTime>}
              ></TextBox>
              <div className="flex gap-2 items-center">
                <div className="text-[#F24E1E]">
                  <FaPlus></FaPlus>
                </div>

                <p className="text-[#A1A3AB] text-[15px]">Add task</p>
              </div>
            </div>
            <div className="gap-2 grid mt-4">
              <ComplectedBox status="Not Started"></ComplectedBox>
              <ComplectedBox status="In Progress"></ComplectedBox>
            </div>
          </div>

          <div className="bottom-0  relative">
            <p className="w-full border-b-1 opacity-[44%] border-[#A1A3AB] my-3"></p>
            <div className="px-5">
              <ComplectedBox status="In Progress"></ComplectedBox>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
