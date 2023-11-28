import React, { useState, useEffect } from "react";
import FormInput from "../register/FormInput";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const EmailChange = () => {
  const [userDataLs, setUserDataLs] = useState({});
  useEffect(() => {
    const user = JSON.parse(
      localStorage.getItem("REACT-FRONTEND-FINAL-PROJECT")
    );
    if (user) {
      setUserDataLs(user);
    }
  }, []);
  const [email, setEmail] = useState("");
  const onChange = (e) => {
    setEmail(e.target.value);
  };
  const input = {
    id: 1,
    name: "email",
    type: "email",
    placeholder: userDataLs.email,
    label: "Change email",
    required: true,
    errorMessage: "email is required",
  };
  const navigator = useNavigate();
  const handleEmailChange = async () => {
    try {
      await axios.patch(
        `${import.meta.env.VITE_API_URL}/users/${userDataLs.id}`,
        { email: email }
      );
      const updateUserDataLs = {
        ...userDataLs,
        email: email,
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
    handleEmailChange();
  };
  return (
    <form className=" w-fit" onSubmit={onSubmit}>
      <h1 className="text-secondary text-[26px] font-semibold font-Poppins mb-8">
        Email Change
      </h1>

      <FormInput key={input.id} {...input} value={email} onChange={onChange} />
      <button
        className="bg-secondary w-[400px] cursor-pointer rounded-sm active:scale-95 py-1 font-Poppins font-semibold"
        type="submit"
      >
        Change Email
      </button>
    </form>
  );
};

export default EmailChange;
