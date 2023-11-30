import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLongRightIcon} from "@heroicons/react/24/solid";
const LoginAlert = ({ setLoginAlert }) => {
  const navigator = useNavigate();
  return (
    <div className="min-h-screen fixed flex items-center justify-center z-[5] w-full bg-opacity top-0 left-0">
      <div className="bg-grayNine py-16 px-16 rounded-lg relative">
        <h1 className="text-[24px] font-semibold text-gray-200 font-Poppins">
          Your are not authentication user!
          <br />
          Please Login
        </h1>
        <div className="flex gap-5 mt-5">
          <button
            className="bg-white py-1 px-2 rounded-sm font-semibold cursor-pointer active:scale-95 hover:bg-gray-400"
            onClick={() => setLoginAlert(false)}
          >
            Not now
          </button>
          <button
            className="flex items-center gap-1 hover:translate-y-[-2px] transition-transform hover:scale-105"
            onClick={() => navigator("/login")}
          >
            <span className="text-secondary capitalize">login</span>
            <ArrowLongRightIcon className="w-[30px] text-secondary" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginAlert;
