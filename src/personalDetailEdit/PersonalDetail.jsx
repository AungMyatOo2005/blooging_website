import React, { useEffect, useState } from "react";
import PersonalInput from "./PersonalInput";

const PersonalDetail = () => {
  const [dataLs, setDataLs] = useState({});
  useEffect(() => {
    const storedData = JSON.parse(
      localStorage.getItem("REACT-FRONTEND-FINAL-PROJECT")
    );
    setDataLs(storedData);
  }, []);
  const inputArrays = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: dataLs.username,
      label: "Username",
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: dataLs.email,
      label: "email",
    },
    {
      id: 3,
      name: "phoneNumber",
      type: "text",
      placeholder: dataLs.phone,
      label: "Phone Number",
    },
    {
      id: 4,
      name: "profileUrl",
      type: "text",
      placeholder: "Your new profile Url",
      label: "Profile Url",
    },
  ];
  return (
    <form className=" min-w-[450px]">
      <h1 className="text-secondary text-[26px] font-semibold font-Poppins mb-8">
        Edit Personal Detail
      </h1>
      {inputArrays.map((inputArr) => (
        <PersonalInput key={inputArr.id} {...inputArr} />
      ))}
      <button
        className="bg-secondary w-[400px] cursor-pointer rounded-sm active:scale-95 py-1 font-Poppins font-semibold"
        type="submit"
      >
        Change Details
      </button>
    </form>
  );
};

export default PersonalDetail;
