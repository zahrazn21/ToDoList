import "react";
import BoxMenu from "../boxes/BoxMenu";
// import { IoIosHelpCircle } from "react-icons/io";
import { IoMdSettings } from "react-icons/io";
// import { LuListCollapse } from "react-icons/lu";
import { BsClipboardCheck } from "react-icons/bs";
import { IoAlertOutline } from "react-icons/io5";
import { RiDashboardHorizontalFill } from "react-icons/ri";
import { CiLogout } from "react-icons/ci";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAuth } from "../../hooks/AppContext";

export default function Menubar() {
   const { setText } = useAuth();
  const data = [
    {
      nikName: "Dash board",
      text: "Dashboard",
      link: "dashboard",
      icon: <RiDashboardHorizontalFill />,
    },
    {
      nikName: "To- Do",
      text: "Vital Task",
      link: "vitaltask",
      icon: <IoAlertOutline />,
    },
    {
      nikName: "To- Do",
      text: "My Task",
      link: "mytask",
      icon: <BsClipboardCheck />,
    },
    // {
    //   nikName: "Set ting",
    //   text: "Task Categories",
    //   link: "taskcategory",
    //   icon: <LuListCollapse />,
    // },
    {
      nikName: "Set ting",
      text: "Settings",
      link: "setting",
      icon: <IoMdSettings />,
    },
    // {
    //   nikName: "Dash board",
    //   text: "Help",
    //   link: "help",
    //   icon: <IoIosHelpCircle />,
    // },
  ];

  // const { userId } = useAuth();
  const [user, setUser] = useState<{ name: string; email: string }>({
    name: "",
    email: "",
  });
  // const nameAndemail = async () => {
  //   try {
  //     const res = await axios.get(`http://localhost:3001/signUp/${userId}`);
  //     const data = res.data;
  //     console.log(data);
  //     setUser({
  //       name: data.UserName,
  //       email: data.Email,
  //     });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  useEffect(() => {
    // nameAndemail();
    const storedData = localStorage.getItem("userInform");
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      setUser({
        name: parsedData.name,
        email: parsedData.email,
      });
    }
  }, []);
 
  return (
    <div className="hidden md:block xl:block lg:block">
      {/* <div className="h-full w-[340px]  "></div> */}
      <div className="top-32 bottom-0 px-3  bg-[#FF6767] drop-shadow-[1px_0px_4px_rgba(0,0,0,0.25)] shadow-black w-[340px]  rounded-r-[10px] absolute">
        <div className="my-12 mb-2  place-content-center place-items-center relative text-white">
          <p>{user?.name}</p>
          <p>{user?.email}</p>
        </div>
        <div className="">
          {data.map((res, index) => (
            <Link
              key={index}
              to={res.link}
              onClick={() => setText(res.nikName)}
            >
              <BoxMenu icon={res.icon} text={res.text}></BoxMenu>
            </Link>
          ))}
        </div>
        <div className="bottom-4 absolute">
          <Link to="/">
            <BoxMenu icon={<CiLogout></CiLogout>} text="gout"></BoxMenu>
          </Link>
        </div>
      </div>
      <div className="rounded-full bg-white size-[80px] top-22 left-33 place-content-center place-items-center absolute bg-[url(/src/assets/images/image.jpg)] bg-cover "></div>
    </div>
  );
}
