import "react";
import DonatChart from "../components/Main/DonatChart";
import { LuCalendarCheck2 } from "react-icons/lu";
import { LuCalendarCheck } from "react-icons/lu";
import TextBox from "../components/boxes/TextBox";
import ComplectedBox from "../components/Main/ComplectedBox";
import { FaPlus } from "react-icons/fa6";
import { TbCalendarTime } from "react-icons/tb";
import AddTask from "./AddTask";
import { useAuth } from "../hooks/AppContext";
import { useEffect, useState } from "react";
import type { typeRes } from "../types/TypeRes";
import { tasks } from "../api/auth";

export default function Dashboard() {
  const { isOpen, setIsOpen } = useAuth();
  const [percentage, setPercentage] = useState<{
    perComplecated: number;
    perNotCoplecated: number;
    perInProcess: number;
  }>({
    perComplecated: 0,
    perNotCoplecated: 0,
    perInProcess: 0,
  });
  const [data, setData] = useState<typeRes[]>([]);
  const [dataComplected, setDataComplected] = useState<typeRes[]>([]);

  const fetchData = async () => {
    try {
      const res = await tasks;
      console.log(res.data);
      const datas = res.data;
      const completed = datas.filter((d: typeRes) => d.status == "Complected");
      const notStarded = datas.filter(
        (d: typeRes) => d.status == "Not Started"
      );
      const inProgress = datas.filter((d: typeRes) => d.status == "In Progress");
      const inProgressNotStarded = datas.filter((d: typeRes) => d.status == "In Progress" || d.status == "Not Started");
      const cost =(inProgress.length + notStarded.length + completed.length) / 100;
      setData(inProgressNotStarded);
      setDataComplected(completed);
      setPercentage({
        perComplecated: completed.length / cost,
        perInProcess: inProgress.length / cost,
        perNotCoplecated: notStarded.length / cost,
      });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const dataChart = [
    { number: Number(percentage.perNotCoplecated.toFixed(2)), name: "Not Started", },
    { number: Number(percentage.perInProcess.toFixed(2)), name: "In Progress" },
    { number: Number(percentage.perComplecated.toFixed(2)), name: "Completed" },
  ];
  return (
    <div className="mt-25 overflow-y-scroll overflow-x-hidden lg:mx-10 lg:overflow-hidden lg:w-[1100px]">
      <div>
        <p className="text-[25px]">Welcome back👋</p>
      </div>

      <div
        dir="rtl"
        className="h-[92%] md:flex xl:flex w-auto md:mx-5 lg:flex block justify-between items-end gap-10  py-3 border-1   lg:shadow-md lg:shadow-[#D9D9D9] border-none shadow-none lg:border-[#D9D9D9] my-1 rounded-[1px]"
      >
        <div className="gap-6 bottom-0 end-0 grid ">
          <div
            dir="ltr"
            className="md:w-[480px] xl:w-[480px] lg:w-[480px] w-[380px] px-5 rounded-b-2xl h-auto  shadow-xl/5 "
          >
            <TextBox
              text="Task Status"
              icon={<LuCalendarCheck2></LuCalendarCheck2>}
            ></TextBox>
            <div dir="rtl" className="block xl:flex md:flex lg:flex items-center justify-between">
              {dataChart.map((res,i)=>(
                <DonatChart
                key={i}
                name={res.name}
                number={res.number}
              ></DonatChart>
              ))}
            </div>
          </div>
          <div
            dir="ltr"
            className="md:w-[480px] xl:w-[480px] lg:w-[480px] w-[360px] relative  lg:px-5 rounded-b-2xl h-[342px]  lg:shadow-xl/5"
          >
            <TextBox
              text="Complected Task"
              icon={<LuCalendarCheck></LuCalendarCheck>}
            ></TextBox>
            <div className="grid gap-2 mt-3 justify-center">
              {dataComplected?.map(
                (res, index) =>
                  (index == dataComplected.length - 2 ||
                    index == dataComplected.length - 1) && (
                    <div className="relative">
                      <ComplectedBox data={res}></ComplectedBox>
                    </div>
                  )
              )}
            </div>
          </div>
        </div>
        <div
          dir="ltr"
          className="md:w-[480px] xl:w-[480px] lg:w-[480px] w-[360px] rounded-b-2xl h-[570px]  lg:shadow-xl/5"
        >
          <div className="lg:px-5">
            <div className="flex justify-between">
              <TextBox
                text="To-Do"
                icon={<TbCalendarTime></TbCalendarTime>}
              ></TextBox>
              <div className="flex cursor-pointer gap-2 items-center">
                <div onClick={() => setIsOpen(1)} className="text-[#F24E1E]">
                  <FaPlus></FaPlus>
                </div>

                <p className="text-[#A1A3AB] text-[15px] mr-2">Add task</p>
              </div>
            </div>
            <div className="gap-4 grid mt-4 justify-center">
              {data?.slice(-2).map((res, index) => (
                // (index == data.length - 2 || index == data.length - 1) && (
                <ComplectedBox data={res} key={index}></ComplectedBox>
              ))}
            </div>
          </div>

          <div className="bottom-0  relative place-items-center">
            <p className="w-full border-b-1 opacity-[44%] border-[#A1A3AB] my-3"></p>
            <div className="">
              {data?.map(
                (res, index) =>
                  index == data.length - 3 && (
                    <ComplectedBox data={res} key={index}></ComplectedBox>
                  )
              )}{" "}
            </div>
          </div>
        </div>
      </div>
      {isOpen == 1 && (
        <div className="fixed place-content-center place-items-center w-screen h-screen z-30 bg-[#2222229e] left-0 top-0 ">
          <AddTask></AddTask>
        </div>
      )}
    </div>
  );
}
