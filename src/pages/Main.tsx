import "react";
import Header from "../components/Main/Header";
import Menubar from "../components/Main/Menubar";
import { Outlet } from "react-router-dom";

export default function Main() {
  return (
    <div className="w-full h-full  bg-[#f5f8ff]">
      <Header></Header>
      <div className="flex items-center bottom-0 h-full justify-between">
        <Menubar></Menubar>
        <Outlet></Outlet>
      </div>
    </div>
  );
}
