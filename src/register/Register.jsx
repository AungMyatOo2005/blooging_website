import { useState } from "react";
import FormInput from "./FormInput";
import styles from "../styles";
const Register = () => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    birthday: "",
    password: "",
    confirmPassword: "",
  });
  const onSubmit = (e) => {
    e.preventDefault();
    if (values.password !== values.confirmPassword) {
      console.error("Passwords do not match");
      return;
    }
    console.log(values);
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
      pattern: `^[A-Za-z0-9\\s+]{3,16}$`,
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
      name: "birthday",
      type: "date",
      placeholder: "Birthday",
      label: "Birthday",
    },
    {
      id: 4,
      name: "password",
      type: "password",
      placeholder: "Create Password",
      label: "password",
      errorMessage:
        "Password should be 8-20 character and include 1 letter,1 number and 1 special character!",
      required: true,
      pattern:
        "^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$",
    },
    {
      id: 5,
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
    <div className={`flex items-center justify-center min-h-screen pt-20`}>
      <form
        className="bg-gray-900 py-10 px-16 rounded-lg shadow-[2px_2px_20px_0px_rgba(158,157,153,0.3)] flex flex-col gap-5"
        onSubmit={onSubmit}
      >
        <h1 className={`text-[36px] font-semibold font-Poppins text-blue-500`}>
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
        <button
          type="submit"
          className="bg-blue-500 py-1 rounded-sm text-white font-Poppins cursor-pointer active:scale-[0.97] mt-3"
        >
          Register
        </button>
      </form>
    </div>
  );
};
export default Register;
