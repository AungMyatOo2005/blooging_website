import { useContext, useEffect, useState } from "react";
import styles from "../styles";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/20/solid";
import { ConditionContext } from "../context/ConditionContext";
const PersonalDetails = () => {
  const [isUser, setIsUser] = useState(false);
  const [toggle, setToggle] = useState(false);
  const { error } = useContext(ConditionContext);
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
      {error && (
        <h1 className="text-[32px] font-semibold text-secondary font-Poppins">
          {error}
        </h1>
      )}
      {isUser && !error && (
        <div
          className={` min-h-screen px-16 w-screen  sm:w-[700px] flex justify-center items-center pb-16 pt-24`}
        >
          <div
            className={` py-14 md:py-16 bg-grayNine rounded-lg px-6 sm:px-10 relative w-full`}
          >
            <ul className="absolute py-4 hidden md:flex flex-col top-5 right-[101%] rounded-lg">
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
            </ul>
            {toggle && (
              <ul className="absolute py-4 flex md:hidden flex-col right-3 top-10 rounded-lg navbar ">
                <NavLink
                  className="bg-gray-700 py-2 w-[220px]  active:scale-95 border-b text-black border-b-gray-500  hover:bg-gray-400 font-semibold text-center transition-colors rounded-t-lg"
                  to={"nameChange"}
                  style={activeStyle}
                  onClick={() => setToggle((prev) => !prev)}
                >
                  Change Name
                </NavLink>
                <NavLink
                  className="bg-gray-700 py-2 w-[220px]  active:scale-95 border-b text-black border-b-gray-500  hover:bg-gray-400 font-semibold text-center transition-colors"
                  to={"emailChange"}
                  style={activeStyle}
                  onClick={() => setToggle((prev) => !prev)}
                >
                  Change Email
                </NavLink>
                <NavLink
                  className="bg-gray-700 py-2 w-[220px]  active:scale-95 border-b text-black border-b-gray-500  hover:bg-gray-400 font-semibold text-center transition-colors"
                  to={"phoneNumberChange"}
                  style={activeStyle}
                  onClick={() => setToggle((prev) => !prev)}
                >
                  Change Phone Number
                </NavLink>
                <NavLink
                  className="bg-gray-700 py-2 w-[220px]  active:scale-95 border-b text-black border-b-gray-500  hover:bg-gray-400 font-semibold text-center transition-colors"
                  to={"profileChange"}
                  style={activeStyle}
                  onClick={() => setToggle((prev) => !prev)}
                >
                  Change Profile
                </NavLink>
                <NavLink
                  className="bg-gray-700 py-2 w-[220px] active:scale-95 text-black hover:bg-gray-400 font-semibold text-center transition-colors rounded-b-lg"
                  to={"passwordChange"}
                  style={activeStyle}
                  onClick={() => setToggle((prev) => !prev)}
                >
                  Change Password
                </NavLink>
              </ul>
            )}
            <button
              className="absolute top-1 right-2 md:hidden block"
              onClick={() => setToggle((prev) => !prev)}
            >
              {toggle ? (
                <ChevronDownIcon className="w-[40px] text-secondary hover:translate-y-[3px] transition-transform ease-in-out hover:scale-105" />
              ) : (
                <ChevronUpIcon className="w-[40px] text-secondary hover:translate-y-[-3px] transition-transform ease-in-out hover:scale-105" />
              )}
            </button>
            <Outlet />
          </div>
        </div>
      )}
    </>
  );
};

export default PersonalDetails;
