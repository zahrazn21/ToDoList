// import "react";
// import ComplectedBox from "../components/Main/ComplectedBox";
// import TaskShow from "../components/Tasks/TaskShow";

// export default function VitalTasks() {
//   return (
//      <div className="fixed bottom-0 left-100 w-[70%]  h-[88%] grid md:block">
//        <div
//          dir="rtl"
//          className="h-[99%] flex justify-between items-end gap-10 px-15 py-3    my-1 rounded-[1px]"
//        >
//            <TaskShow></TaskShow>
//          <div
//            dir="ltr"
//            className="w-[60%] px-5 rounded-2xl border-1 h-full border-[#A1A3AB] shadow-xl"
//          >
//            <p className="my-3">
//              <span className="border-b-3  border-[#F24E1E]">Vital </span>Tasks
//            </p>
//            <div className="gap-2 grid">
//              <ComplectedBox status="Not Started"></ComplectedBox>
//              <ComplectedBox status="Not Started"></ComplectedBox>
//            </div>
//          </div>
//        </div>
//      </div>
//    );
// }

import "react";
import { useEffect, useState } from "react";
import { useAuth } from "../hooks/AppContext";
import type { typeRes } from "../types/TypeRes";
import TaskAndDetails from "../components/Tasks/TaskAndDetails";
import { tasks } from "../api/auth";

export default function VitalTasks() {
  const { id } = useAuth();
  // const [index,setIndex]=useState(0)
  const [data, setData] = useState<typeRes[]>([
    {
      id: "",
      title: "",
      description: "",
      date: "",
      priority: "",
      status: "",
      url: "",
      vital:false
    },
  ]);
  const [showData, setShowData] = useState<typeRes>({
    id: "",
    title: "",
    description: "",
    date: "",
    priority: "",
    status: "",
    url: "",
          vital:false

    
  });

  const showTask = async () => {
    try {
      const res = await tasks;
      console.log("res22", res);
      const datas = res.data;
      const filter = datas.filter((k:typeRes) => k.vital === true);

      const filterShow = filter.filter((k:typeRes) => k.id === id);
      setData(filter);
      setShowData(filterShow[0]);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    showTask();
  }, [id]);
  return (
    <TaskAndDetails data={data} showData={showData} title="Vital"></TaskAndDetails>
  );
}
