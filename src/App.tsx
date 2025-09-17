import "./App.css";
import Dashboard from "./pages/Dashboard";
import LoginRegisterLayout from "./layouts/LoginRegisterLayout";
import Main from "./pages/Main";
import MyTask from "./pages/MyTask";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import { Routes, Route } from "react-router-dom";
import VitalTasks from "./pages/VitalTasks";
import Edit from "./pages/Edit";

function App() {
  return (
    <>
      <div className="overflow-x-hidden ">
        {/* <div className="bg-[#FF6767] bg-cover bg-blend-multiply  bg-[url(/src/assets/images/aducation_pattern2.png)]  w-[1240px] h-[739px] place-content-center place-items-center">
          <div className="flex w-[1036px] place-content-center place-items-center h-[640px] bg-white rounded-[10px]">
            <Routes>
              <Route path="/SignUp" element={<SignUp />} />
              <Route path="/SignIn" element={<SignIn />} />
            </Routes>
            
          </div>
        </div> */}
        <div className="">
          <Routes>
            <Route path="/" element={<LoginRegisterLayout />}>
              <Route path="SignUp" element={<SignUp />} />
              <Route path="/" element={<SignIn />} />
            </Route>
            <Route path="/mainPage" element={<Main />}>
              <Route path="dashboard" index element={<Dashboard />} />
              <Route path="mytask" element={<MyTask></MyTask>}></Route>
              <Route
                path="vitaltask"
                element={<VitalTasks></VitalTasks>}
              ></Route>
              <Route path="setting" element={<Edit></Edit>}></Route>
            </Route>
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
