import "react";
import Input from "../components/Sign Up/Input";
import { FaUserLarge } from "react-icons/fa6";
import { CiLock } from "react-icons/ci";
import signinImg from "../assets/images/Sign_In.jpg";
import { useRef } from "react";
import type { typeRegister } from "../types/TypeRes";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/AppContext";
import { login } from "../api/auth";
export default function SignIn() {
  const userNameRef = useRef<HTMLInputElement>(null);
  const passNameRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const data = [
    { name: "UserName", logo: <FaUserLarge />, type: "text", ref: userNameRef },
    { name: "Password", logo: <CiLock />, type: "password", ref: passNameRef },
  ];
  // const [isValid, setIsValid] = useState(false);
  const { setUserId } = useAuth();

  const checkLogin = async () => {
    try {
      const res = await login;
      console.log(res);
      const data = res.data;
      const result = data.filter(
        (r: typeRegister) =>
          r.UserName == userNameRef.current?.value &&
          r.password == passNameRef.current?.value
      );
      console.log("result", result);

      if (result.length > 0) {
        // setIsValid(true);
        setUserId(result[0].id);
        const data = {
          name: result[0].UserName,
          email: result[0].Email,
        };

        localStorage.setItem("userInform", JSON.stringify(data));

        navigate("/mainpage");
      } else {
        alert("not login");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div dir="rtl" className="xl:flex md:flex  md:h-[500px] block md:min-w-[700px] items-center min-w-[300px] overflow-x-hidden">
      <div className="logo min-w-[50%]">
        <img src={signinImg} className="w-[400px]" alt="Logo" />
      </div>
      <div dir="ltr" className="min-w-[50%]">
        <p className="my-5 text-[40px] font-bold">Sign In</p>

        <div className="inputs gap-3 grid">
          {data.map((res) => (
            <Input
              ref={res.ref}
              key={res.name}
              logo={res.logo}
              name={res.name}
              type={res.type}
              // width={420}
            />
          ))}
        </div>
        <div className="mt-2 items-center flex">
          <input type="checkbox" className="mr-1" />
          <label htmlFor=""> remember Me</label>
        </div>

        <button
          onClick={checkLogin}
          className="my-3 bg-[#FF9090] text-white text-center text-[16px]"
        >
          Login
        </button>
        <p>
          Don’t have an account?{" "}
          <Link to="SignUp" className="mx-1 text-[#008BD9]">
            Create One
          </Link>
        </p>
      </div>
    </div>
  );
}
