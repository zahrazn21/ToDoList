import "react";
import { FaUserEdit } from "react-icons/fa";
import { LuUserRoundPen } from "react-icons/lu";
import { CiLock } from "react-icons/ci";
import { IoIosLock } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import Input from "../components/Sign Up/Input";
import { FaUserLarge } from "react-icons/fa6";
import signUpimg from "../assets/images/Sign_Up.jpg";
import { auth } from '../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
export default function SignUp() {
  const data = [
    { name: "First Name", logo: <FaUserEdit></FaUserEdit>, type: "text" },
    { name: "Last Name", logo: <LuUserRoundPen />, type: "text" },
    { name: "First UserName", logo: <FaUserLarge />, type: "text" },
    { name: "Email", logo: <MdEmail />, type: "text" },
    { name: "Password", logo: <CiLock />, type: "password" },
    { name: "Confirm Password", logo: <IoIosLock />, type: "password" },
  ];

     const handleRegister = async () => {
    try {
      await createUserWithEmailAndPassword(auth, 'test@example.com', '123456');
      alert('ثبت نام موفق');
    } catch (error) {
      console.error('خطا در ثبت نام:', error);
    }
  };
  return (
    <div className="flex items-center">
      <div className="logo">
        <img src={signUpimg} className="w-[450px]" alt="Logo" />
      </div>
      <div className="">
        <p className="mb-1 text-[40px] font-bold">Sign Up</p>
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
        <label htmlFor="" >i agree to all terms</label>
        </div>
 
        <button onClick={handleRegister} className="my-3 bg-[#FF9090] text-white text-center text-[16px]">
          Sign Up
        </button>
        <p >
          Already have an account?
          <a href="#" className="mx-1 text-[#008BD9]">
            Sign in
          </a>
        </p>
      </div>
    </div>
  );
}
