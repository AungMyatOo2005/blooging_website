//logout box

//use context
import React, { useContext } from "react";
//use navigate
import { useNavigate } from "react-router-dom";
//context api
import { ConditionContext } from "../context/ConditionContext";

const Logout = ({ setLogoutBox }) => {
  const handleDeleteUserData = () => {
    localStorage.removeItem("REACT-FRONTEND-FINAL-PROJECT");
    navigator("/");
    window.location.reload();
  };
  const { isDarkMode } = useContext(ConditionContext);
  const navigator = useNavigate();
  return (
    <div className="min-h-screen px-6 fixed flex items-center justify-center z-[10] w-full bg-opacity top-0 left-0">
      <div
        className={`py-16 px-16 ${
          isDarkMode ? "bg-gray-900" : "bg-slate-600"
        } flex gap-5 rounded-md w-full mx-auto xs:w-[400px] items-stretch justify-around`}
      >
        <button
          className="bg-green-400 text-black py-1 px-3 rounded-sm font-Poppins active:scale-95 min-w-[100px]"
          onClick={() => setLogoutBox(false)}
        >
          cancel
        </button>
        <button
          className="bg-red-400 text-black py-1 px-3 rounded-sm font-Poppins active:scale-95 min-w-[100px]"
          onClick={handleDeleteUserData}
        >
          logout
        </button>
      </div>
    </div>
  );
};

export default Logout;
