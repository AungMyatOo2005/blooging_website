import React, { useEffect, useState } from "react";
import FormInput from "../register/FormInput";
const ProfileChange = ({}) => {
  const [userDataLs, setUserDataLs] = useState({});
  useEffect(() => {
    const user = JSON.parse(
      localStorage.getItem("REACT-FRONTEND-FINAL-PROJECT")
    );
    if (user) {
      setUserDataLs(user);
    }
  }, []);
  const [profileUrl,setProfileUrl] = useState("");
  const onChange = (e) => {
    setProfileUrl(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(profileUrl);
  };
  const input = {
    id: 1,
    name: "profileUrl",
    type: "text",
    placeholder: userDataLs.profileUrl,
    label: "Change Profile Url",
  };
  return (
    <form className=" min-w-[450px]" onSubmit={onSubmit}>
      <h1 className="text-secondary text-[26px] font-semibold font-Poppins mb-8">
        Profile Change
      </h1>

      <FormInput
        key={input.id}
        {...input}
        value={profileUrl}
        onChange={onChange}
      />
      <button
        className="bg-secondary w-[400px] cursor-pointer rounded-sm active:scale-95 py-1 font-Poppins font-semibold"
        type="submit"
      >
        Change Profile
      </button>
    </form>
  );
};

export default ProfileChange;
