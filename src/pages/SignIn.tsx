import "react";
import Input from "../components/Sign Up/Input";
import { FaUserLarge } from "react-icons/fa6";
import { CiLock } from "react-icons/ci";
import signinImg from "../assets/images/Sign_In.jpg";
export default function SignIn() {
  const data = [
    { name: "First UserName", logo: <FaUserLarge />, type: "text" },
    { name: "Password", logo: <CiLock />, type: "password" },
  ];

  return (
    <div dir="rtl" className="flex items-center">
      <div className="logo">
        <img src={signinImg} className="w-[400px]" alt="Logo" />
      </div>
      <div dir="ltr" className="">
        <p className="my-5 text-[40px] font-bold">Sign In</p>

        <div className="inputs gap-3 grid">
          {data.map((res) => (
            <Input
              key={res.name}
              logo={res.logo}
              name={res.name}
              type={res.type}
            />
          ))}
        </div>
        <div className="mt-2 items-center flex">
          <input type="checkbox" className="mr-1" />
          <label htmlFor=""> remember Me</label>
        </div>

        <button className="my-3 bg-[#FF9090] text-white text-center text-[16px]">
          Login
        </button>
        <p>
          Don’t have an account?{" "}
          <a href="#" className="mx-1 text-[#008BD9]">
            Create One
          </a>
        </p>
      </div>
    </div>
  );
}
