import React, { useContext, useState } from "react";
import styles from "../styles";
import { NavLink, useNavigate } from "react-router-dom";
import ProfileBox from "../components/ProfileBox";
import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { ConditionContext } from "../context/ConditionContext";
const Nav = () => {
  //for responsive side bar
  const [toggle, setToggle] = useState(false);
  //is auth user can't see login and register button
  const { isAuthUser } = useContext(ConditionContext);
  //using navigate for login and registration
  const navigator = useNavigate();
  return (
    <div className="fixed w-full z-[5] top-0">
      <nav
        className={`py-2 px-6 ${styles.flexCenter} justify-between bg-gray-900 w-full relative`}
      >
        {/* page title  */}
        <h1 className="text-white font-semibold text-[18px] sm:text-[26px] md:text-[32px] font-Poppins">
          <span className=" text-secondary">A</span>ssignment
          <span className="text-secondary"> S</span>ix
        </h1>
        {/* page nav link  */}
        <ul className="text-white items-center gap-6 text-[16px] md:flex hidden font-Poppins">
          <NavLink to={"/"}>Home</NavLink>
          <NavLink to={"/userProfile"}>user profile</NavLink>
        </ul>
        {isAuthUser ? (
          <div className="md:flex hidden">
            {/* profile box for auth user  */}
            <ProfileBox value={"w-fit"} />
          </div>
        ) : (
          <div className="md:flex hidden gap-2">
            {/* login and registration button for unauthorized user  */}
            <button
              className=" cursor-pointer hover:bg-gray-700 bg-gray-600 p-2 w-[100px] text-gray-200 font-Poppins rounded-sm active:scale-95"
              onClick={() => navigator("/login")}
            >
              Login
            </button>
            <button
              className=" cursor-pointer hover:bg-gray-700 bg-gray-600 p-2 w-[100px] text-gray-200 font-Poppins rounded-sm active:scale-95"
              onClick={() => navigator("/registration")}
            >
              Register
            </button>
          </div>
        )}
        {/* for responsive design  */}
        <button
          className="md:hidden flex"
          onClick={() => setToggle((prev) => !prev)}
        >
          {toggle ? (
            <XMarkIcon className="w-[34px] text-white hover:text-secondary cursor-pointer" />
          ) : (
            <Bars3BottomRightIcon className="w-[34px] text-white hover:text-secondary cursor-pointer" />
          )}
        </button>
        {toggle && (
          <div className=" absolute right-3 top-20 bg-gray-900 py-10 px-6 rounded-lg navbar md:hidden block min-w-[250px]">
            <ul className="text-white items-center gap-6 md:text-[16px] font-Poppins flex flex-col">
              <NavLink to={"/"}>Home</NavLink>
              <NavLink to={"/userProfile"}>user profile</NavLink>
            </ul>
            {isAuthUser ? (
              <div className="cursor-pointer mt-5">
                <ProfileBox value={"w-fit"} />
              </div>
            ) : (
              <div className="flex flex-col items-center gap-2 mt-6">
                <button
                  className="cursor-pointer hover:bg-gray-700 bg-gray-600 p-2 w-[100px] text-gray-200 font-Poppins rounded-sm active:scale-95"
                  onClick={() => navigator("/login")}
                >
                  Login
                </button>
                <button
                  className="cursor-pointer hover:bg-gray-700 bg-gray-600 p-2 w-[100px] text-gray-200 font-Poppins rounded-sm active:scale-95"
                  onClick={() => navigator("/registration")}
                >
                  Register
                </button>
              </div>
            )}
          </div>
        )}
      </nav>
    </div>
  );
};

export default Nav;
