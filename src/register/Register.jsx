import { useEffect, useState } from "react";
import FormInput from "./FormInput";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ArrowLongRightIcon } from "@heroicons/react/20/solid";
const Register = () => {
  const navigator = useNavigate();
  const [error, setError] = useState(null);
  const [values, setValues] = useState({
    username: "",
    email: "",
    phoneNumber: "",
    profileUrl: "",
    password: "",
    confirmPassword: "",
  });
  const updateUserData = {
    username: values.username,
    email: values.email,
    phone: values.phoneNumber,
    profileUrl: values.profileUrl,
    password: values.confirmPassword,
  };
  const handleRegister = async () => {
    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/users`, updateUserData);
      setError(null); // Reset error state if registration is successful
    } catch (error) {
      setError("Registration failed. Please check your input and try again.");
    }
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    await handleRegister();
    setValues({
      username: "",
      email: "",
      phoneNumber: "",
      profileUrl: "",
      password: "",
      confirmPassword: "",
    });
    navigator("/successRegister");
  };
  const inputArrays = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Enter your username",
      label: "Username",
      required: true,
      errorMessage:
        "username should be 3-16 characters and should't be any special character",
      pattern: `^[A-Za-z0-9\\s+]{3,30}$`,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Enter your email",
      label: "email",
      required: true,
      errorMessage: "It should be valid email address",
    },
    {
      id: 3,
      name: "phoneNumber",
      type: "number",
      placeholder: "Enter your phoneNumber",
      label: "Phone Number",
      required: true,
      errorMessage: "Phone number is required",
      pattern: `^[0-9]{8,13}$`,
    },
    {
      id: 4,
      name: "profileUrl",
      type: "text",
      placeholder: "Your profile Url",
      label: "Profile Url",
    },
    {
      id: 5,
      name: "password",
      type: "password",
      placeholder: "Create Password",
      label: "password",
      errorMessage: "Password should be 8-20 character!",
      required: true,
      pattern: "^[A-Za-z0-9!@#$%&*]{8,20}$",
    },
    {
      id: 6,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm your password",
      label: "Confirm Password",
      required: true,
      errorMessage: "Password don't match",
      pattern: values.password,
    },
  ];
  const onChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };
  return (
    <div
      className={`flex items-center justify-center min-h-screen pt-20 pb-10`}
    >
      <form
        className="bg-gray-900 py-10 px-16 rounded-lg shadow-[2px_2px_20px_0px_rgba(158,157,153,0.3)] flex flex-col gap-5"
        onSubmit={onSubmit}
      >
        <h1 className={`text-[26px] font-semibold font-Poppins text-blue-500`}>
          Registration Form
        </h1>
        {inputArrays.map((inputArr) => (
          <FormInput
            key={inputArr.id}
            {...inputArr}
            value={values[inputArr.name]}
            errorMessage={inputArr.errorMessage}
            onChange={onChange}
          />
        ))}
        {error && (
          <p className="text-red-500 text-center w-full mt-2 mb-4">{error}</p>
        )}
        <button
          type="submit"
          className="bg-blue-500 py-1 rounded-sm text-white font-Poppins cursor-pointer active:scale-[0.97] mt-3"
        >
          Register
        </button>
      </form>
      <button
        className="flex items-center gap-1 hover:translate-y-[-2px] transition-transform ease-in-out hover:scale-105 absolute right-20 top-32"
        onClick={() => navigator("/login")}
      >
        <span className="text-secondary capitalize">login</span>
        <ArrowLongRightIcon className="w-[30px] text-secondary" />
      </button>
    </div>
  );
};
export default Register;
