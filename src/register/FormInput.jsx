import React, { useState } from "react";
import {EyeIcon,EyeSlashIcon} from '@heroicons/react/24/solid'
const FormInput = ({ label, value, onChange, errorMessage, ...input }) => {
  const [isBlur,setIsBlur]=useState("false")
  const onfocus=()=>[
    input.name==="confirmPassword" && setIsBlur(true)
  ]
  return (
    <div className={`flex flex-start flex-col gap-1`}>
      <label className="text-gray-300 font-Poppins text-[16px] ">{label}</label>
      <input
        className="w-full bg-transparent outline-non bg-white py-1 px-4 rounded-sm outline-none shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]"
        {...input}
        value={value}
        onChange={onChange}
        onBlur={() => setIsBlur(true)}
        focus={isBlur.toString()}
        onFocus={onfocus}
      />
      
      <p className="max-w-[270px] text-[14px] text-red-500 hidden">
        {errorMessage}
      </p>
    </div>
  );
};

export default FormInput;
