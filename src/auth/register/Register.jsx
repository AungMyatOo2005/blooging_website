import { useContext, useState } from "react";
import FormInput from "../../components/FormInput";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ArrowLongRightIcon } from "@heroicons/react/20/solid";
import { ConditionContext } from "../../context/ConditionContext";
const Register = () => {
  const { isDarkMode } = useContext(ConditionContext);
  const navigator = useNavigate();
  const [error, setError] = useState("");

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
    profileUrl: values.profileUrl
      ? values.profileUrl
      : "https://i.pinimg.com/236x/16/3e/39/163e39beaa36d1f9a061b0f0c5669750.jpg",
    password: values.confirmPassword,
  };

  const handleRegister = async () => {
    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/users`, updateUserData);
      setError(null);
      successRegister();
    } catch (error) {
      console.error("Error fetching user data:", error);
      setError("Error fetching user data");
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
  };

  const successRegister = () => {
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
      pattern: "^[A-Za-z0-9!@#$%&*\\s+]{8,20}$",
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
      className={`flex items-center justify-center min-h-screen pt-20 pb-10 px-10  w-screen ${
        isDarkMode ? "bg-primary" : "bg-lightPrimary"
      }`}
    >
      {error ? (
        <h1
          className={`text-[22px] text-center sm:text-[32px] ${
            isDarkMode ? "text-secondary" : "text-blue-950"
          } font-semibold font-Poppins w-full  text-center`}
        >
          Error: {error}
        </h1>
      ) : (
        <form
          className={`${
            isDarkMode ? "bg-gray-900" : "bg-slate-600"
          } py-10 px-6 ss:px-10 sm:px-16 rounded-lg shadow-[2px_2px_20px_0px_rgba(158,157,153,0.3)] flex flex-col gap-5 w-full ss:w-[400px] sm:w-[500px]`}
          onSubmit={onSubmit}
        >
          <h1
            className={`text-[26px] font-semibold font-Poppins text-secondary`}
          >
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
            className="bg-secondary py-1 rounded-sm font-semibold font-Poppins cursor-pointer active:scale-[0.97] mt-3"
          >
            Register
          </button>
          <div className="flex xs:items-center gap-3 xs:flex-row flex-col items-start">
            <span className="text-gray-200">you have already account</span>
            <button
              className="flex items-center gap-1 hover:translate-y-[-2px] transition-transform ease-in-out hover:scale-105"
              onClick={() => navigator("/login")}
            >
              <span className="text-secondary capitalize">login </span>
              <ArrowLongRightIcon className="w-[30px] text-secondary" />
            </button>
          </div>
        </form>
      )}
    </div>
  );
};
export default Register;
