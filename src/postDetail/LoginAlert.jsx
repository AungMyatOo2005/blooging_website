import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLongRightIcon, XMarkIcon } from "@heroicons/react/24/solid";
const LoginAlert = ({ setLoginAlert }) => {
  const navigator = useNavigate();
  return (
    <div className="min-h-screen fixed flex items-center justify-center z-[5] w-full bg-opacity top-0 left-0">
      <div className="bg-gray-900 py-16 px-16 rounded-lg relative">
        <button
          className="absolute top-3 right-2"
          onClick={() => setLoginAlert(false)}
        >
          <XMarkIcon className="w-[30px] bg-gray-300 rounded-full hover:bg-gray-400" />
        </button>
        <h1 className="text-[24px] font-semibold text-gray-200 font-Poppins">
          Your are not authentication user!
          <br />
          Please Login
        </h1>
        <button
          className="flex items-center gap-1 hover:translate-y-[-2px] transition-transform ease-in-out hover:scale-105 mt-4"
          onClick={() => navigator("/login")}
        >
          <span className="text-secondary capitalize">login</span>
          <ArrowLongRightIcon className="w-[30px] text-secondary" />
        </button>
      </div>
    </div>
  );
};

export default LoginAlert;
