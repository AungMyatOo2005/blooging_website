import React, { useState } from "react";
import styles from "../styles";
const FormInput = ({ label, value, onChange, errorMessage, ...input }) => {
  return (
    <div className={`flex flex-start flex-col gap-1`}>
      <label className="text-gray-300 font-Poppins text-[18px]">{label}</label>
      <input
        className="w-full bg-transparent outline-non bg-white py-1 px-4 rounded-sm outline-none"
        {...input}
        value={value}
        onChange={onChange}
      />

      <p className="max-w-[400px] text-[14px] text-red-500 hidden">
        {errorMessage}
      </p>
    </div>
  );
};

export default FormInput;
