import React, { useEffect, useState} from "react";
import FormInput from "../register/FormInput";
const PhoneChange = () => {
  const [userDataLs, setUserDataLs] = useState({});
  useEffect(() => {
    const user = JSON.parse(
      localStorage.getItem("REACT-FRONTEND-FINAL-PROJECT")
    );
    if (user) {
      setUserDataLs(user);
    }
  }, []);
  const [phone, setPhone] = useState("");
  const onChange = (e) => {
    setPhone(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(phone);
  };
  const input = {
    id: 1,
    name: "phone",
    type: "text",
    placeholder:userDataLs.phone,
    label: "Change Phone Number",
    required: true,
    errorMessage: "Phone number is required",
    pattern: `^[0-9]{8,13}$`,
  };
  return (
    <form className=" min-w-[450px]" onSubmit={onSubmit}>
      <h1 className="text-secondary text-[26px] font-semibold font-Poppins mb-8">
        Phone Number Change
      </h1>

      <FormInput
        key={input.id}
        {...input}
        value={phone}
        onChange={onChange}
      />
      <button
        className="bg-secondary w-[400px] cursor-pointer rounded-sm active:scale-95 py-1 font-Poppins font-semibold"
        type="submit"
      >
        Change Phone Number
      </button>
    </form>
  );
};

export default PhoneChange;
