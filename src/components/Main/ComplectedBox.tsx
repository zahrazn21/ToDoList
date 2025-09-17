import "react";
import { FaRegCircle } from "react-icons/fa6";
import { PiDotsThreeOutlineThin } from "react-icons/pi";
// import img from "../../assets/images/Sign_Up.jpg";
import { useAuth } from "../../hooks/AppContext";
import type { typeRes } from "../../types/TypeRes";
import { useEffect, useState } from "react";
import axios from "axios";

interface typeProp {
  data: typeRes;
}
export default function ComplectedBox({ data }: typeProp) {
  const { setId, id } = useAuth();

  const isOpen = () => {
    setDots(!dots);
  };
  const [selectedValue, setSelectedValue] = useState("");

  const updateVital = async (id: string, vital: boolean) => {
    try {
      const response = await axios.patch(
        `http://localhost:3001/AddTask/${id}`,
        {
          vital: vital,
        }
      );
      console.log("Updated task:", response.data);
    } catch (error) {
      console.error("Update failed:", error);
    }
  };
  const updateComplected = async (id: string) => {
    try {
      const response = await axios.patch(
        `http://localhost:3001/AddTask/${id}`,
        {
          status: "Complected",
        }
      );
      console.log("Updated task to complected:", response.data);
    } catch (error) {
      console.error("Update failed:", error);
    }
  };

   const deletTask = async (id: string) => {
    try {
      const response = await axios.delete(
        `http://localhost:3001/AddTask/${id}`);
      console.log("delet task:", response.data);
    } catch (error) {
      console.error("delet failed:", error);
    }
  };

  const handleChange = (e: string) => {
    setSelectedValue(e);
    isOpen();
  };

  useEffect(() => {
    console.log("selectedValue", selectedValue);

    if (selectedValue === "vital") {
      updateVital(id, true);
    }
    if (selectedValue === "finish") {
      updateComplected(id);
    }
    if (selectedValue === "delet") {
      deletTask(id);
    }
  }, [selectedValue]);

  const [dots, setDots] = useState(false);

  const dataOption = [
    { title: "vital" },
    { title: "finish" },
    { title: "delet" },
  ];
  return (
    <div
      onClick={() => setId(data?.id)}
      dir="rtl"
      className="border-1 hover:cursor-pointer  hover:bg-[#9eb3b33e] max-h-[160px] max-w-[650px]   rounded-[20px] py-1 px-3 "
    >
      <div className="flex justify-between">
        <div className="w-[45%] lg:w-[70%] place-content-center">
          <div className="dots relative cursor-pointer text-[#A1A3AB] text-[25px]">
            <div onClick={isOpen}>
              <PiDotsThreeOutlineThin></PiDotsThreeOutlineThin>
            </div>
            {dots && (
              <div className="absolute top-5  ">
                <div className=" bg-white cursor-pointer text-[16px] relative   w-[90px] text-center rounded-[5px] border-2 border-[#5555554d]">
                  {dataOption.map((res , i)=>(
                    <div
                    onClick={()=>handleChange(res.title)}
                    key={i}>{res.title}</div>
                  ))}
                </div>
              </div>
            )}
          </div>
          <div
            className={`w-[108px] h-[108px] bg-cover rounded-[20px] bg-center `}
            style={{
              backgroundImage: `url(${
                data?.url ? data.url : "/src/assets/images/default5.png"
              })`,
            }}
          >
            {/* <img className="rounded-[20px] w-[108px] h-[108px]" src={data?.url} alt="" /> */}
          </div>
        </div>
        <div dir="ltr" className="w-[55%] grid ">
          <p className="text-[20px]">{data?.title}</p>
          <p className="text-[#747474] text-[15px]     w-[200px] leading-5">
            {data?.description}
          </p>
          {data?.status === "Complected" && (
            <>
              <p className="text-[12px] flex items-center">
                Status: <span className="text-[#05A301] ">Copleted</span>
              </p>
              <p className="text-[#747474]">date:{data?.date}</p>
            </>
          )}
        </div>
        <div>
          <div
            className={`${
              data?.status == "Complected"
                ? "text-[#05A301] "
                : data?.status == "Not Started"
                ? "text-[#F21E1E] "
                : "text-[#0225FF] "
            }text-xl mr-2 my-1`}
          >
            <FaRegCircle />
          </div>
        </div>
      </div>

      <div dir="ltr">
        {(data?.status === "Not Started" || data?.status === "In Progress") && (
          <>
            <div className="flex w-full justify-between items-center">
              <p className="text-[12px] flex items-center">
                Priority:{" "}
                <span className="text-[#42ADE2] mx-1">{data?.priority}</span>
              </p>
              <p className="text-[12px] flex items-center">
                Status:{" "}
                <span
                  className={`${
                    data?.status === "Not Started"
                      ? "text-[#F21E1E]"
                      : "text-[#0225FF]"
                  } mx-1`}
                >
                  {data?.status}
                </span>
              </p>
              <p className="text-[#747474] text-[12px]">
                Created on: {data?.date}
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
