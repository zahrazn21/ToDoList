import "react";

import {  Outlet } from "react-router-dom";

export default function LoginRegisterLayout() {
  return (
    <div className="bg-[#FF6767] xl:h-screen lg:w-[1024px] lg:h-auto py-1 min-w-[360px]  h-auto bg-cover  xl:w-screen md:w-[700px] sm:w-[700px] md:min-w-[900px] md:h-screen  bg-blend-multiply  bg-[url(/src/assets/images/aducation_pattern2.png)]   place-content-center place-items-center">
      <div className="flex xl:w-[1036px]   min-w-[300px] md:min-h-[700px] mx-5 px-5 place-content-center place-items-center  bg-white rounded-[10px] ">
        <Outlet></Outlet>
      </div>
    </div>
  );
}
