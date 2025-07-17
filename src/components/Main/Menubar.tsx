import "react";
import BoxMenu from "./BoxMenu";
import { IoIosHelpCircle } from "react-icons/io";
import { IoMdSettings } from "react-icons/io";
import { LuListCollapse } from "react-icons/lu";
import { BsClipboardCheck } from "react-icons/bs";
import { IoAlertOutline } from "react-icons/io5";
import { RiDashboardHorizontalFill } from "react-icons/ri";
import { CiLogout } from "react-icons/ci";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/AppContext";

export default function Menubar() {
  const {setText}=useAuth()
  const data = [
    {
      nikName:"Dash board",text: "Dashboard",
      link: "dashboard",
      icon: <RiDashboardHorizontalFill />,
    },
    { nikName:"",text: "Vital Task", link: "vitaltask", icon: <IoAlertOutline /> },
    { nikName:"To- Do",text: "My Task", link: "mytask", icon: <BsClipboardCheck /> },
    { nikName:"Dash board",text: "Task Categories", link: "taskcategory", icon: <LuListCollapse /> },
    { nikName:"Dash board",text: "Settings", link: "setting", icon: <IoMdSettings /> },
    { nikName:"Dash board",text: "Help", link: "help", icon: <IoIosHelpCircle /> },
  ];
  return (
    <div className="relative  ">
      {/* <div className="h-full w-[340px]  "></div> */}
      <div className="top-32 bottom-0 px-3  bg-[#FF6767] drop-shadow-[1px_0px_4px_rgba(0,0,0,0.25)] shadow-black w-[340px]  rounded-r-[10px] absolute">
        <div className="mt-12 mb-2 left-30 relative text-white">
          <p>name</p>
          <p>email</p>
        </div>
        <div className="">
          {data.map((res) => (
            <Link to={res.link} onClick={()=>(setText(res.nikName))}>
              <BoxMenu icon={res.icon} text={res.text}></BoxMenu>
            </Link>
          ))}
        </div>
        <div className="bottom-4 absolute">
          <BoxMenu icon={<CiLogout></CiLogout>} text="gout"></BoxMenu>
        </div>
      </div>
      <div className="rounded-full z-20 bg-white size-[80px] top-22 left-30 absolute bg-[url(/src/assets/images/book_pattern.jpg)]"></div>
    </div>
  );
}
