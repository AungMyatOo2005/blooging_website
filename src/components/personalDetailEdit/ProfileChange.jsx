import React, { useEffect, useState } from "react";
import FormInput from "../formInput/FormInput";
import { useNavigate } from "react-router-dom";
import axios from "axios";
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
  const [profileUrl, setProfileUrl] = useState("");
  const onChange = (e) => {
    setProfileUrl(e.target.value);
  };
  const input = {
    id: 1,
    name: "profileUrl",
    type: "text",
    placeholder: userDataLs.profileUrl,
    label: "Change Profile Url",
  };
  const navigator = useNavigate();
  const handleProfileUrlChange = async () => {
    try {
      await axios.patch(
        `${import.meta.env.VITE_API_URL}/users/${userDataLs.id}`,
        { profileUrl }
      );
      const updateUserDataLs = {
        ...userDataLs,
        profileUrl: profileUrl,
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
    {
      profileUrl.trim() !== ""
        ? handleProfileUrlChange()
        : alert("please fill something");
    }
  };
  return (
    <form className="w-full" onSubmit={onSubmit}>
      <h1 className="text-secondary text-[20px] sm:text-[26px] font-semibold font-Poppins mb-8">
        Profile Change
      </h1>

      <FormInput
        key={input.id}
        {...input}
        value={profileUrl}
        onChange={onChange}
      />
      <button
        className="bg-secondary w-full cursor-pointer rounded-sm active:scale-95 py-1 font-Poppins font-semibold"
        type="submit"
      >
        Change Profile
      </button>
    </form>
  );
};

export default ProfileChange;
