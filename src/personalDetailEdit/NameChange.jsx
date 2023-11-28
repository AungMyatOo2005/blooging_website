import React, { useEffect, useState } from "react";
import FormInput from "../register/FormInput";
const NameChange = ({}) => {
  const [userDataLs, setUserDataLs] = useState({});
  useEffect(() => {
    const user = JSON.parse(
      localStorage.getItem("REACT-FRONTEND-FINAL-PROJECT")
    );
    if (user) {
      setUserDataLs(user);
    }
  }, []);
  const [name, setName] = useState("");
  const onChange = (e) => {
    setName(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(name);
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
  return (
    <form className=" min-w-[450px]" onSubmit={onSubmit}>
      <h1 className="text-secondary text-[26px] font-semibold font-Poppins mb-8">
        Name Change
      </h1>

      <FormInput
        key={input.id}
        {...input}
        value={name}
        onChange={onChange}
      />
      <button
        className="bg-secondary w-[400px] cursor-pointer rounded-sm active:scale-95 py-1 font-Poppins font-semibold"
        type="submit"
      >
        Change Details
      </button>
    </form>
  );
};

export default NameChange;
