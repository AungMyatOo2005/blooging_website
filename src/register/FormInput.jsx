import React, { useState } from "react";
const FormInput = ({ label, value, onChange, errorMessage, ...input }) => {
  const [isBlur, setIsBlur] = useState("false");
  const onfocus = () => [input.name === "confirmPassword" && setIsBlur(true)];
  return (
    <div className={`flex flex-col items-start mb-10`}>
      <label className="text-gray-200 font-semibold font-Poppins">
        {label}
      </label>
      <input
        className="bg-transparent border-b border-gray-200 w-[260px] xs:w-[300px] ss:w-[340px] sm:w-[350px] md:w-[400px] mt-3 outline-none py-1 text-gray-200 placeholder:text-gray-600 px-2"
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
