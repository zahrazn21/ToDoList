import "react";
import { Link } from "react-router-dom";
import InputEdit from "../components/edit/InputEdit";
import { LuImageUp } from "react-icons/lu";
import { useEffect, useRef, useState } from "react";
import { useAuth } from "../hooks/AppContext";
import axios from "axios";
import { IoCalendarOutline } from "react-icons/io5";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import dayjs, { Dayjs } from "dayjs";
import type { typeRes } from "../types/TypeRes";

export default function AddTask() {
  const [showData, setShowData] = useState<typeRes>({
    id: "",
    title: "",
    description: "",
    date: "",
    priority: "",
    status: "",
    url: "",
    vital: false,
  });

  const { isOpen, id } = useAuth();

  const titleRef = useRef<HTMLInputElement>(null);
  const dateRef = useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLTextAreaElement>(null);
  // const PriorityRef = useRef<HTMLTextAreaElement>(null);
  const [priority, setPriority] = useState("");
  const [status, setStatuse] = useState("");

  const [dateEdit, setDateEdit] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPriority(e.target.value);
  };
  const handleChangeStatus = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStatuse(e.target.value);
  };

  const addTask = async (e?: React.MouseEvent<HTMLDivElement>) => {
    e?.preventDefault(); // جلوی رفتار پیش‌فرض کلیک یا فرم رو می‌گیره

    const data = {
      id: Math.random,
      priority: priority,
      title: titleRef.current?.value,
      date: dateRef.current?.value,
      description: descriptionRef.current?.value,
      url: preview,
      status: status,
    };

    try {
      if (
        titleRef.current?.value !== "" &&
        dateRef.current?.value !== "" &&
        descriptionRef.current?.value !== "" &&
        status !== "" &&
        priority !== ""
      ) {
        const res = await axios.post("http://localhost:3001/AddTask", data);
        console.log("res post", res);
      } else {
        alert("همه فیلد هارا پر کنید");
      }
    } catch (error) {
      console.log(error);
    }
  };
  const showTask = async () => {
    try {
      const res = await axios.get("http://localhost:3000/AddTask");
      console.log("res22", res);
      const datas = res.data;
      // const filter = datas.filter((k: typeRes) => k.vital === true);

      const filterShow = datas.filter((k: typeRes) => k.id === id);
      setShowData(filterShow[0]);
    } catch (error) {
      console.log(error);
    }
  };
  const data = [
    { title: "Extrime", color: "#" },
    { title: "Moderate", color: "#" },
    { title: "Low", color: "#" },
  ];
  const dataStatus = [
    { title: "Complected", color: "#05A301" },
    { title: "Not Started", color: "#F21E1E" },
    { title: "In Progress", color: "#0225FF" },
  ];

  const { setIsOpen, calendarOpen, setCalendarOpen } = useAuth();

  const fileInputRef = useRef<HTMLInputElement>(null);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [fileName, setFileName] = useState("");
  const [preview, setPreview] = useState<string | null>(null);
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        setPreview(base64String); // ذخیره برای پیش‌نمایش یا آپلود
      };
      reader.onerror = (err) => {
        console.error("FileReader error:", err);
      };
      reader.readAsDataURL(file); // <- اینجا باید فایل باشه، نه چیز دیگه‌ای
    }
  };

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  console.log("preview", preview);

  const [selectedDate, setSelectedDate] = useState<Dayjs | null>(dayjs());

  const handleDateChange = (newValue: Dayjs | null) => {
    setSelectedDate(newValue);
    if (newValue && newValue.isValid()) {
      setDateEdit(newValue.format("YYYY-MM-DD"));
    }
    setCalendarOpen(false);
  };

  useEffect(() => {
    showTask();
  }, []);

  const editTask = async () => {
    try {
      const res = await axios.patch(`http://localhost:3001/AddTask/${id}`, {
        description: descriptionRef.current?.value,
        title: titleRef.current?.value,
        date: dateRef.current?.value,
        status:status,
        priority: priority

      });
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-[900px] h-[680px] border-2 border-[#D9D9D9] bg-white place-items-center rounded-2xl px-10 py-5  ">
      <div className="flex  justify-between my-5 w-[700px] ">
        <div className="font-bold relative">
          {isOpen == 1 ? "Add New Task" : "Edit Task"}
          <p
            className={`${
              isOpen == 1 ? "w-[80px]" : "w-[40px]"
            } border-b-2 border-b-[#F24E1E] absolute`}
          ></p>
        </div>
        {isOpen == 1 ? (
          <Link to={"/mainpage/dashboard"}>
            <p onClick={() => setIsOpen(2)}>Go Back</p>
          </Link>
        ) : isOpen == 3 ? (
          <Link to={"/mainpage/mytask"}>
            <p onClick={() => setIsOpen(4)}>Go Back</p>
          </Link>
        ) : (
          ""
        )}
      </div>
      <div className="w-[700px] bg-white border-[#D9D9D9] grid gap-5 h-[530px] px-3 py-2 border-1  rounded-[5px]">
        <div className="h-30 gap-2 grid">
          <InputEdit
            className={`${isOpen == 3 && "text-blue-600"}`}
            defaultValue={isOpen == 3 ? showData.title : ""}
            ref={titleRef}
            label="Title"
          ></InputEdit>

          {isOpen === 3 ? (
            <InputEdit
              defaultValue={dateEdit !== "" ? dateEdit : showData.date}
              className={`${isOpen == 3 && "text-blue-600"}`}
              ref={dateRef}
              label="Date"
              icon={<IoCalendarOutline />}
              // value={selectedDate?.format("YYYY-MM-D")}
            ></InputEdit>
          ) : (
            <InputEdit
              // defaultValue={isOpen===3?showData.date:""}
              className={`${isOpen == 3 && "text-blue-600"}`}
              ref={dateRef}
              label="Date"
              icon={<IoCalendarOutline />}
              value={selectedDate?.format("YYYY-MM-D")}
            ></InputEdit>
          )}
        </div>

        <div>
          Priority
          <div className="flex items-center justify-around">
            {data.map((item, index) => (
              <div className=" flex items-center gap-1" key={index}>
                <input
                  onChange={handleChange}
                  type="radio"
                  name="priority"
                  value={item.title}
                  id=""
                />
                <p className="text-[15px]">{item.title}</p>
                <p
                  className={`w-[8px] h-[8px] rounded-full `}
                  style={{ background: item?.color }}
                ></p>
              </div>
            ))}
          </div>
        </div>
        <div>
          Status
          <div className="flex items-center justify-around">
            {dataStatus.map((item, index) => (
              <div className=" flex items-center gap-1" key={index}>
                <input
                  onChange={handleChangeStatus}
                  type="radio"
                  name="status"
                  value={item.title}
                  id=""
                />
                <p className="text-[15px]">{item.title}</p>
                <p
                  className={`w-[8px] h-[8px] rounded-full `}
                  style={{ background: item?.color }}
                ></p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex gap-2 justify-between items-center w-full">
          <div className="-[100%] ">
            <p>Task Description</p>
            {/* <input
              type="text"
              className="outline-0 rounded-[15px] border-2 border-[#] h-[200px] w-[400px]"
              placeholder="Start writing here....."
            /> */}

            <textarea
              // value={showData?.description}
              ref={descriptionRef}
              defaultValue={isOpen === 3 ? showData.description : ""}
              className={`${
                isOpen == 3 && "text-blue-600"
              } outline-0 px-3 mt-2 py-2 rounded-[15px] border-2 border-[#D9D9D9] h-[200px] w-[400px]`}
              placeholder="Start writing here....."
              name=""
              id=""
            ></textarea>
          </div>
          <div className="-[100%] ">
            <p>Upload Image</p>
            <div
              className={`outline-0  relative place-items-center place-content-center text-[#D9D9D9] rounded-[15px] mt-2 border-2 border-[#D9D9D9] h-[200px]  w-[200px]`}
            >
              <p className="text-[50px] ">
                <LuImageUp></LuImageUp>
              </p>
              <p></p>
              {/* <button className=" border-1 border-blue-600 text-blue-600 z-20">
                
              </button> */}
              <div className="flex  flex-col gap-4 items-center">
                <button
                  type="button"
                  onClick={handleButtonClick}
                  className="px-4 py-2 z-20 bg-blue-500 my-4 text-white rounded-md hover:bg-blue-600"
                >
                  Browse
                </button>

                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleFileChange}
                />

                {preview && (
                  <img
                    src={preview}
                    alt="Preview"
                    className="top-0 w-[200px] h-[200px] absolute object-cover rounded-[15px]"
                  />
                )}
              </div>
            </div>
          </div>
        </div>
        {isOpen == 1 && (
          <div
            className="rounded-2xl py-1 w-[70px] place-content-center text-center text-white font-bold text-[20px] px-3 bg-[#F24E1E] cursor-pointer"
            onClick={(e) => addTask(e)}
          >
            save
          </div>
        )}
        {isOpen == 3 && (
          <div
            className="rounded-2xl py-1 w-[70px] place-content-center text-center text-white font-bold text-[20px] px-3 bg-[#F24E1E] cursor-pointer"
            onClick={editTask}
          >
            save
          </div>
        )}
        {calendarOpen && (
          <div className="fixed place-content-center place-items-center w-screen h-screen z-30 bg-[#2222229e] left-0 top-0 ">
            <div className=" bg-white ">
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateCalendar
                  value={selectedDate}
                  onChange={handleDateChange}
                />{" "}
              </LocalizationProvider>
            </div>{" "}
          </div>
        )}
      </div>
    </div>
  );
}
