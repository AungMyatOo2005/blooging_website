import { useEffect, useState } from "react";
import styles from "../styles";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
const PersonalDetails = () => {
  const [isUser, setIsUser] = useState(false);
  const activeStyle = ({ isActive }) => {
    return {
      backgroundColor: isActive ? "#9ca3af" : "",
    };
  };
  const navigator = useNavigate();
  useEffect(() => {
    const user = localStorage.getItem("REACT-FRONTEND-FINAL-PROJECT");
    if (!user) {
      navigator("/");
    }
    if (user) {
      setIsUser(true);
    }
    // window.location.reload()
  }, [navigator]);
  return (
    <>
      {isUser && (
        <div
          className={`max-w-screen min-h-screen ${styles.paddingX} flex justify-center items-start pt-32 pb-16`}
        >
          <div className={`w-fit py-16 bg-gray-900 rounded-lg px-10 relative`}>
            <div className="absolute py-4 flex flex-col top-5 right-[101%] rounded-lg">
              <NavLink
                className="bg-gray-700 py-2 w-[220px]  active:scale-95 border-b text-black border-b-gray-500  hover:bg-gray-400 font-semibold text-center transition-colors rounded-t-lg"
                to={"nameChange"}
                style={activeStyle}
              >
                Change Name
              </NavLink>
              <NavLink
                className="bg-gray-700 py-2 w-[220px]  active:scale-95 border-b text-black border-b-gray-500  hover:bg-gray-400 font-semibold text-center transition-colors"
                to={"emailChange"}
                style={activeStyle}
              >
                Change Email
              </NavLink>
              <NavLink
                className="bg-gray-700 py-2 w-[220px]  active:scale-95 border-b text-black border-b-gray-500  hover:bg-gray-400 font-semibold text-center transition-colors"
                to={"phoneNumberChange"}
                style={activeStyle}
              >
                Change Phone Number
              </NavLink>
              <NavLink
                className="bg-gray-700 py-2 w-[220px]  active:scale-95 border-b text-black border-b-gray-500  hover:bg-gray-400 font-semibold text-center transition-colors"
                to={"profileChange"}
                style={activeStyle}
              >
                Change Profile
              </NavLink>
              <NavLink
                className="bg-gray-700 py-2 w-[220px] active:scale-95 text-black hover:bg-gray-400 font-semibold text-center transition-colors rounded-b-lg"
                to={"passwordChange"}
                style={activeStyle}
              >
                Change Password
              </NavLink>
            </div>
            <Outlet />
          </div>
        </div>
      )}
    </>
  );
};

export default PersonalDetails;
