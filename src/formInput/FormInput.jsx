//use context and use state
import React, { useContext, useState } from "react";
//context api
import { ConditionContext } from "../context/ConditionContext";
//form input data
const FormInput = ({ label, value, onChange, errorMessage, ...input }) => {
  const [isBlur, setIsBlur] = useState("false");
  const onfocus = () => {
    input.name === "confirmPassword" && setIsBlur(true);
  };
  const { isDarkMode } = useContext(ConditionContext);

  return (
    <div className={`flex flex-col items-start mb-10`}>
      <label className="text-gray-200 font-semibold font-Poppins">
        {label}
      </label>
      <input
        className={` bg-transparent border-b border-gray-200 w-full mt-3 outline-none py-1 text-gray-200 px-2 ${
          isDarkMode ? "placeholder:text-gray-600" : "placeholder:text-gray-400"
        }`}
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
