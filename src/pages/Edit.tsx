import "react";
import InputEdit from "../components/edit/InputEdit";
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import type { typeRegister } from "../types/TypeRes";
import { useAuth } from "../hooks/AppContext";

export default function Edit() {
  const FirstNameRef = useRef<HTMLInputElement>(null);
  const LastNameRef = useRef<HTMLInputElement>(null);
  const EmailRef = useRef<HTMLInputElement>(null);
  const numberRef = useRef<HTMLInputElement>(null);
  const positionRef = useRef<HTMLInputElement>(null);

  // const data = [
  //   {
  //     ref: FirstNameRef,
  //     name: "First Name",
  //     type: "text",
  //   },
  //   {
  //     ref: LastNameRef,
  //     name: "Last Name",
  //     type: "text",
  //   },
  //   { ref: EmailRef, name: "Email", type: "text" },
  //   { ref: numberRef, name: "Number", type: "text" },

  //   { ref: positionRef, name: "Ppsition", type: "text" },
  // ];
  const [preview, setPreview] = useState<string | null>(null);

  const [showData, setShowData] = useState<typeRegister>({
    id: "",
    FirstName: "",
    LastName: "",
    UserName: "",
    Email: "",
    password: "",
    Confirmpassword: "",
    Number: "",
    Position: "",
    url:""
  });

  const { userId } = useAuth();
  const datas = async () => {
    try {
      const res = await axios.get(`http://localhost:3001/signUp/${userId}`);
      console.log(res);
      const data = res.data;
      console.log(data);

      setShowData((prev) => ({
        ...prev,
        FirstName: data.FirstName,
        LastName: data.LastName,
        Email: data.Email,
      }));
    } catch (error) {
      console.log(error);
    }
  };
  const editData = async () => {
    try {
      const res = await axios.patch(`http://localhost:3001/signUp/${userId}`, {
        FirstName: FirstNameRef.current?.value,
        LastName: LastNameRef.current?.value,
        Email: EmailRef.current?.value,
        Number: numberRef.current?.value,
        Position: positionRef.current?.value,
        url:preview
      });
      console.log(res);
      const data = res.data;
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  const [user, setUser] = useState<{ name: string; email: string }>({
    name: "",
    email: "",
  });
  useEffect(() => {
    datas();
    const storedData = localStorage.getItem("userInform");
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      setUser({
        name: parsedData.name,
        email: parsedData.email,
      });
    }
  }, []);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        setPreview(base64String); 
      };
      reader.onerror = (err) => {
        console.error("FileReader error:", err);
      };
      reader.readAsDataURL(file);
    }
  };
  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };
  return (
    <div className="fixed  bottom-0 left-100 w-[70%]  h-[87%] grid md:block ">
      <div className="h-[97%] g gap-2 px-15 py-1 border-1  shadow-md shadow-[#D9D9D9]  border-[#D9D9D9] my-1 rounded-[20px]">
        <span className="relative text-[21px]">
          Account Information
          <p className="w-[128px] border-b-3 absolute left-0  border-[#F24E1E]"></p>
        </span>

        <div className="flex items-center gap-2 my-3">
          <div className="w-[90px] h-[90px] rounded-full bg-cover bg-[url(/src/assets/images/work_pattern.jpg)]"
          style={{
              backgroundImage: `url(${
                preview ? preview : showData.url? showData.url: "/src/assets/images/default5.png"
              })`,
            }}
         ></div>
          <div>
            <p className="text-[18px] font-bold">{user.name}</p>
            <p className="text-[15px]">{user.email}</p>
            <div
              onClick={handleButtonClick}
              className="px-4 py-2 z-20 text-blue-600 "
            >
              Browse
            </div>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleFileChange}
            />{" "}
          </div>
        </div>
        <div className="rounded-xl px-10 py-2 relative gap-19 border-2 grid h-[73%] border-[#D9D9D9] ">
          <InputEdit
            className="text-blue-600"
            defaultValue={showData.FirstName}
            ref={FirstNameRef}
            label="First Name"
          ></InputEdit>
          <InputEdit
            className="text-blue-600"
            defaultValue={showData.LastName}
            ref={LastNameRef}
            label="Last Name"
          ></InputEdit>
          <InputEdit
            className="text-blue-600"
            defaultValue={showData.Email}
            ref={EmailRef}
            label="Email"
          ></InputEdit>
          <InputEdit ref={numberRef} label="Number"></InputEdit>
          <InputEdit ref={positionRef} label="Position"></InputEdit>
          {/* {data.map((res, i) => (
            <InputEdit key={i} label={res.name} ref={res.ref}></InputEdit>
          ))} */}
          <div className=" bottom-0 right-10 flex justify-around w-[30%]">
            <button
              onClick={editData}
              className="my-2 h-10 bg-[#F24E1E] text-white text-center text-[16px]"
            >
              update{" "}
            </button>{" "}
            <button className="my-2 h-10 bg-[#F24E1E] text-white text-center text-[16px]">
              cancle{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
