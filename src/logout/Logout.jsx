import React from "react";

const Logout = ({ setLogoutBox }) => {
  const handleDeleteUserData = () => {
    localStorage.removeItem("REACT-FRONTEND-FINAL-PROJECT");
    window.location.reload();
  };
  return (
    <div className="min-h-screen fixed flex items-center justify-center z-[10] w-full bg-opacity top-0 left-0">
      <div className="py-16 px-16 bg-gray-900 flex gap-5 rounded-md">
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
  );
};

export default Logout;
