import "react";

import {  Outlet } from "react-router-dom";

export default function LoginRegisterLayout() {
  return (
    <div className="bg-[#FF6767] bg-cover bg-blend-multiply  bg-[url(/src/assets/images/aducation_pattern2.png)]  w-screen h-screen place-content-center place-items-center">
      <div className="flex w-[1036px] place-content-center place-items-center h-[640px] bg-white rounded-[10px]">
        <Outlet></Outlet>
      </div>
    </div>
  );
}
