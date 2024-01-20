import React, { useEffect, useState } from "react";
import FormInput from "../FormInput";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const NameChange = () => {
  const [userDataLs, setUserDataLs] = useState({});
  const [name, setName] = useState("");

  useEffect(() => {
    const user = JSON.parse(
      localStorage.getItem("REACT-FRONTEND-FINAL-PROJECT")
    );
    if (user) {
      setUserDataLs(user);
    }
  }, []);

  const onChange = (e) => {
    setName(e.target.value);
  };

  const input = {
    id: 1,
    name: "name",
    type: "text",
    placeholder: userDataLs.username,
    label: "Change UserName",
    required: true,
    errorMessage:
      "username should be 3-16 characters and should't be any special character",
    pattern: `^[A-Za-z0-9\\s+]{3,30}$`,
  };
  const navigator = useNavigate();
  const handleNameChange = async () => {
    try {
      await axios.patch(
        `${import.meta.env.VITE_API_URL}/users/${userDataLs.id}`,
        { username: name }
      );
      const updateUserDataLs = {
        ...userDataLs,
        username: name,
      };
      localStorage.setItem(
        "REACT-FRONTEND-FINAL-PROJECT",
        JSON.stringify(updateUserDataLs)
      );
      setUserDataLs(updateUserDataLs);
      navigator("/successDetailsEdit");
    } catch (error) {
      console.error("Password change failed:", error);
    }
  };
  const onSubmit = (e) => {
    e.preventDefault();
    handleNameChange();
  };
  return (
    <form className="w-full" onSubmit={onSubmit}>
      <h1 className="text-secondary  text-[20px] sm:text-[26px] font-semibold font-Poppins mb-8">
        Name Change
      </h1>

      <FormInput key={input.id} {...input} value={name} onChange={onChange} />
      <button
        className="bg-secondary w-full cursor-pointer rounded-sm active:scale-95 py-1 font-Poppins font-semibold"
        type="submit"
      >
        Change Username
      </button>
    </form>
  );
};

export default NameChange;
