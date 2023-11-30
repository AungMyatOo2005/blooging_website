import React from "react";
import { useNavigate } from "react-router-dom";

const Logout = ({ setLogoutBox }) => {
  const handleDeleteUserData = () => {
    localStorage.removeItem("REACT-FRONTEND-FINAL-PROJECT");
    navigator("/");
    window.location.reload();
  };
  const navigator = useNavigate();
  return (
    <div className="min-h-screen fixed flex items-center justify-center z-[10] w-full bg-opacity top-0 left-0">
      <div className="px-6 w-full">
        <div className="py-16 px-16 bg-grayNine flex gap-5 rounded-md w-full mx-auto xs:w-[400px] items-stretch justify-around">
          <button
            className="bg-green-500 text-white py-1 px-3 rounded-sm font-Poppins active:scale-95 "
            onClick={() => setLogoutBox(false)}
          >
            cancel
          </button>
          <button
            className="bg-red-500 text-white py-1 px-3 rounded-sm font-Poppins active:scale-95"
            onClick={handleDeleteUserData}
          >
            logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Logout;
