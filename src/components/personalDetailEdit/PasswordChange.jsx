//password change

//use effect and use state
import React, { useEffect, useState } from "react";
//form input EL
import FormInput from "../formInput/FormInput";
//use axios to fetch data
import axios from "axios";
//use navigate
import { useNavigate } from "react-router-dom";

const PasswordChange = () => {
  const navigator = useNavigate();
  const [userDataLs, setUserDataLs] = useState({});
  const [passwordErr, setPasswordErr] = useState(false);
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
      errorMessage: "Password should be 8-20 characters!",
      pattern: "^[A-Za-z0-9!@#$%&*\\s+]{8,20}$",
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

  const onSubmit = (e) => {
    e.preventDefault();
    if (userDataLs.password === values.oldPassword) {
      handlePasswordChange();
      setPasswordErr(false);
    } else {
      setPasswordErr("your password is invalid");
    }
  };
  const handlePasswordChange = async () => {
    try {
      await axios.patch(
        `${import.meta.env.VITE_API_URL}/users/${userDataLs.id}`,
        passwordData
      );
      const updateUserDataLs = {
        ...userDataLs,
        password: values.confirmPassword,
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
  return (
    <form className="w-full" onSubmit={onSubmit}>
      <h1 className="text-secondary text-[20px] sm:text-[26px] font-semibold font-Poppins mb-8">
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
      <p className="text-red-500 text-[16px] mb-5">
        {passwordErr && passwordErr}
      </p>
      <button
        className="bg-secondary w-full cursor-pointer rounded-sm active:scale-95 py-1 font-Poppins font-semibold"
        type="submit"
      >
        Change Password
      </button>
    </form>
  );
};

export default PasswordChange;
