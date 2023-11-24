import React from "react";
import { useNavigate } from "react-router-dom";

const SuccessRegister = () => {
  const navigator = useNavigate();
  return (
    <div className="min-h-screen flex items-center justify-center flex-col">
      <h1 className="text-[42px] text-secondary font-semibold font-Poppins">
        Your register success
      </h1>
      <button
        className="bg-dimBlue text-white font-Poppins font-semibold text-[24px] w-full border-2 border-secondary py-1 mt-4 cursor-pointer active:scale-95"
        onClick={() => navigator("/")}
      >
        Back
      </button>
    </div>
  );
};

export default SuccessRegister;
