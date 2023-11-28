import React from "react";

const PersonalInput = ({ label, ...inputArr }) => {
  return (
    <div className="flex flex-col items-start mb-10">
      <label className="text-gray-200 font-semibold font-Poppins">
        {label}
      </label>
      <input
        className="bg-transparent border-b border-gray-200 w-[400px] mt-3 outline-none py-1 text-gray-200 placeholder:text-gray-600 px-2"
        {...inputArr}
      />
    </div>
  );
};

export default PersonalInput;
