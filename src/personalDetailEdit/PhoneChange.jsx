//phone number change

//use effect and use state
import React, { useEffect, useState } from "react";
//form input El
import FormInput from "../formInput/FormInput";
//use navigate
import { useNavigate } from "react-router-dom";
//use axios to fetch data
import axios from "axios";

const PhoneChange = () => {
  const [userDataLs, setUserDataLs] = useState({});
  const [phone, setPhone] = useState("");

  useEffect(() => {
    const user = JSON.parse(
      localStorage.getItem("REACT-FRONTEND-FINAL-PROJECT")
    );
    if (user) {
      setUserDataLs(user);
    }
  }, []);

  const onChange = (e) => {
    setPhone(e.target.value);
  };
  const input = {
    id: 1,
    name: "phone",
    type: "text",
    placeholder: userDataLs.phone,
    label: "Change Phone Number",
    required: true,
    errorMessage: "Phone number is required",
    pattern: `^[0-9]{8,13}$`,
  };
  const navigator = useNavigate();
  const handlePhoneChange = async () => {
    try {
      await axios.patch(
        `${import.meta.env.VITE_API_URL}/users/${userDataLs.id}`,
        { phone: phone }
      );
      const updateUserDataLs = {
        ...userDataLs,
        phone: phone,
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
    handlePhoneChange();
  };
  return (
    <form className="w-full" onSubmit={onSubmit}>
      <h1 className="text-secondary text-[20px] sm:text-[26px] font-semibold font-Poppins mb-8">
        Phone Number Change
      </h1>

      <FormInput key={input.id} {...input} value={phone} onChange={onChange} />
      <button
        className="bg-secondary w-full cursor-pointer rounded-sm active:scale-95 py-1 font-Poppins font-semibold"
        type="submit"
      >
        Change Phone Number
      </button>
    </form>
  );
};

export default PhoneChange;
