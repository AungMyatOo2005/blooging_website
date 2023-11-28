import React, { useEffect, useState } from "react";
import FormInput from "../register/FormInput";
import axios from "axios";

// ... (your import statements)

const PasswordChange = () => {
  const [userDataLs, setUserDataLs] = useState({});
  useEffect(() => {
    const user = JSON.parse(
      localStorage.getItem("REACT-FRONTEND-FINAL-PROJECT")
    );
    if (user) {
      setUserDataLs(user);
    }
  }, []);

  const [values, setValues] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const inputArrays = [
    {
      id: 1,
      name: "oldPassword",
      type: "password",
      placeholder: "Old Password",
      label: "Old Password",
      required: true,
      errorMessage: "Password don't match",
    },
    {
      id: 2,
      name: "newPassword",
      type: "password",
      placeholder: "New Password",
      label: "New Password",
      required: true,
      errorMessage:
        "Password should be 8-20 characters and include 1 letter, 1 number, and 1 special character!",
      pattern:
        "^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%&*])[a-zA-Z0-9!@#$%^&*\\s+]{8,20}$",
    },
    {
      id: 3,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      label: "Confirm Password",
      required: true,
      errorMessage: "Password don't match",
      pattern: values.newPassword,
    },
  ];

  const passwordData = {
    password: values.confirmPassword,
  };

  const handlePasswordChange = async (e) => {
    try {
      await axios.patch(
        `${import.meta.env.VITE_API_URL}/users/${userDataLs.id}`,
        passwordData
      );
      localStorage.setItem(
        "REACT-FRONTEND-FINAL-PROJECT",
        JSON.stringify({ ...userDataLs, password: values.confirmPassword })
      );
    } catch (error) {
      console.error("Password change failed:", error);
    }
  };
  const onSubmit = () => {
    {
      userDataLs.password === values.oldPassword && handlePasswordChange();
    }
  };
  return (
    <form className="min-w-[450px]" onSubmit={onSubmit}>
      <h1 className="text-secondary text-[26px] font-semibold font-Poppins mb-8">
        Change New Password
      </h1>
      {inputArrays.map((inputArr) => (
        <FormInput
          key={inputArr.id}
          {...inputArr}
          value={values[inputArr.name]}
          onChange={onChange}
        />
      ))}
      <button
        className="bg-secondary w-[400px] cursor-pointer rounded-sm active:scale-95 py-1 font-Poppins font-semibold"
        type="submit"
      >
        Change Password
      </button>
    </form>
  );
};

export default PasswordChange;
