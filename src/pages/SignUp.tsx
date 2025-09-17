import "react";
import { FaUserEdit } from "react-icons/fa";
import { LuUserRoundPen } from "react-icons/lu";
import { CiLock } from "react-icons/ci";
import { IoIosLock } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import Input from "../components/Sign Up/Input";
import { FaUserLarge } from "react-icons/fa6";
import signUpimg from "../assets/images/Sign_Up.jpg";
// import { auth } from "../firebase";
// import { createUserWithEmailAndPassword } from "firebase/auth";
import { Link } from "react-router-dom";
import { useRef } from "react";
import { rigester } from "../api/auth";
export default function SignUp() {
  const FirstNameRef = useRef<HTMLInputElement>(null);
  const LastNameRef = useRef<HTMLInputElement>(null);
  const UserNameRef = useRef<HTMLInputElement>(null);
  const EmailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const ConfirmpasswordRef = useRef<HTMLInputElement>(null);

  const data = [
    {
      ref: FirstNameRef,
      name: "First Name",
      logo: <FaUserEdit></FaUserEdit>,
      type: "text",
    },
    {
      ref: LastNameRef,
      name: "Last Name",
      logo: <LuUserRoundPen />,
      type: "text",
    },
    { ref: UserNameRef, name: "UserName", logo: <FaUserLarge />, type: "text" },
    { ref: EmailRef, name: "Email", logo: <MdEmail />, type: "text" },
    { ref: passwordRef, name: "Password", logo: <CiLock />, type: "password" },
    {
      ref: ConfirmpasswordRef,
      name: "Confirm Password",
      logo: <IoIosLock />,
      type: "password",
    },
  ];


  const signUp = async () => {
    const data = 
      {
        id:Math.random(),
        FirstName: FirstNameRef.current?.value,
        LastName: FirstNameRef.current?.value,
        UserName: UserNameRef.current?.value,
        Email: EmailRef.current?.value,
        password: passwordRef.current?.value,
        Confirmpassword: ConfirmpasswordRef.current?.value,
      }
    
    try {
      const res = await rigester(data);
      console.log(res);
      alert("👍")
    } catch (error) {
      console.log(error);
    }
  };
  // const handleRegister = async () => {
  //   try {
  //     await createUserWithEmailAndPassword(auth, "test@example.com", "123456");
  //     alert("ثبت نام موفق");
  //   } catch (error) {
  //     console.error("خطا در ثبت نام:", error);
  //   }
  // };
  return (
    <div  className="xl:flex md:flex block md:min-w-[700px] items-center min-w-[300px] overflow-x-hidden">
      <div className="logo">
        <img
          onClick={() => console.log("passwordRef", passwordRef.current?.value)}
          src={signUpimg}
          className="w-[450px]"
          alt="Logo"
        />
      </div>
      <div className="">
        <p className="mb-1 text-[40px] font-bold">Sign Up</p>
        <div className="inputs  gap-3 grid">
          {data.map((res) => (
            <Input
              ref={res.ref}
              key={res.name}
              logo={res.logo}
              name={res.name}
              type={res.type}
            />
          ))}
        </div>
        <div className="mt-2 items-center flex">
          <input type="checkbox" className="mr-1" />
          <label htmlFor="">i agree to all terms</label>
        </div>

        <button
          onClick={signUp}
          className="my-3 bg-[#FF9090] text-white text-center text-[16px]"
        >
          Sign Up
        </button>
        <p>
          Already have an account?
          <Link to="/" className="mx-1 text-[#008BD9]">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}
