import "react";
import { useEffect, useState } from "react";
import { useAuth } from "../hooks/AppContext";
import type { typeRes } from "../types/TypeRes";
import TaskAndDetails from "../components/Tasks/TaskAndDetails";
import { tasks } from "../api/auth";

export default function MyTask() {
  const { id } = useAuth();
  // const [index,setIndex]=useState(0)
  const [data, setData] = useState<typeRes[]>([])
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
      const filter = data.filter((k) => k.id === id);
      setData(res.data);
      setShowData(filter[0])
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    showTask();
  }, [id]);






  return (
       <TaskAndDetails data={data} showData={showData} title="My"></TaskAndDetails>
   
  );
}
