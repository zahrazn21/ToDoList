import "react";
import ComplectedBox from "../components/Main/ComplectedBox";
import TaskShow from "../components/Tasks/TaskShow";

export default function MyTask() {
  return (
    <div className="fixed bottom-0 left-100 w-[70%]  h-[88%] grid md:block">
      <div
        dir="rtl"
        className="h-[99%] flex justify-between items-end gap-10 px-15 py-3    my-1 rounded-[1px]"
      >
        <div dir="ltr" className="px-5 py-2 w-[60%] rounded-2xl border-1 h-full border-[#A1A3AB] shadow-xl">
          <TaskShow></TaskShow>
        </div>
        <div
          dir="ltr"
          className="w-[60%] px-5 rounded-2xl border-1 h-full border-[#A1A3AB] shadow-xl"
        >
          <p className="my-3">
            <span className="border-b-3  border-[#F24E1E]">My</span>Task
          </p>
          <div className="gap-2 grid">
            <ComplectedBox status="Not Started"></ComplectedBox>
            <ComplectedBox status="Not Started"></ComplectedBox>
          </div>
        </div>
      </div>
    </div>
  );
}
