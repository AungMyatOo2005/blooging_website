import React, { useContext, useState } from "react";
import styles from "../styles";
import { NavLink } from "react-router-dom";
import ProfileBox from "../home/ProfileBox";
import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { ConditionContext } from "../context/ConditionContext";
const Nav = () => {
  //for responsive side bar
  const [toggle, setToggle] = useState(false);
  //is auth user can't see login and register button
  const { isAuthUser, setSideBar } = useContext(ConditionContext);
  //using navigate for login and registration
  const handleClick = () => {
    setToggle(false);
    setSideBar(false);
  };

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
          <NavLink to={"/"} onClick={handleClick}>
            Home
          </NavLink>
          <NavLink to={"/userProfile"} onClick={handleClick}>
            user profile
          </NavLink>
        </ul>
        {isAuthUser ? (
          <div className="md:flex hidden">
            {/* profile box for auth user  */}
            <ProfileBox value={"w-fit"} />
          </div>
        ) : (
          <div className="md:flex hidden gap-2 button-box">
            {/* login and registration button for unauthorized user  */}
            <NavLink to={"/login"}>
              <button className=" cursor-pointer bg-gray-600 p-2 w-[100px] text-gray-200 font-Poppins rounded-sm active:scale-95">
                <div></div>
                <span>Login</span>
              </button>
            </NavLink>
            <NavLink to={"/registration"}>
              <button className=" cursor-pointer bg-gray-600 p-2 w-[100px] text-gray-200 font-Poppins rounded-sm active:scale-95">
                <span>Register</span>
              </button>
            </NavLink>
          </div>
        )}
        {/* for responsive design  */}
        <button
          className="md:hidden flex"
          onClick={() => {
            setToggle((prev) => !prev);
            setSideBar(false);
          }}
        >
          {toggle ? (
            <XMarkIcon className="w-[34px] text-white hover:text-secondary cursor-pointer" />
          ) : (
            <Bars3BottomRightIcon className="w-[34px] text-white hover:text-secondary cursor-pointer" />
          )}
        </button>
        {toggle && (
          <div className=" flex-col items-center absolute right-3 top-20 bg-gray-900 py-10 px-6 rounded-lg navbar md:hidden flex min-w-[250px]">
            <ul className="text-white items-center gap-6 md:text-[16px] font-Poppins flex flex-col">
              <NavLink to={"/"} onClick={handleClick}>
                Home
              </NavLink>
              <NavLink to={"/userProfile"} onClick={handleClick}>
                user profile
              </NavLink>
            </ul>
            {isAuthUser ? (
              <div className="cursor-pointer mt-5">
                <ProfileBox value={"w-fit"} />
              </div>
            ) : (
              <div className="flex flex-col items-center gap-2 mt-6 button-box">
                <NavLink to={"/login"} onClick={handleClick}>
                  <button className=" cursor-pointer bg-gray-600 p-2 w-[100px] text-gray-200 font-Poppins rounded-sm active:scale-95">
                    <span>Login</span>
                  </button>
                </NavLink>
                <NavLink to={"/registration"} onClick={handleClick}>
                  <button className=" cursor-pointer bg-gray-600 p-2 w-[100px] text-gray-200 font-Poppins rounded-sm active:scale-95">
                    <span>Register</span>
                  </button>
                </NavLink>
              </div>
            )}
          </div>
        )}
      </nav>
    </div>
  );
};

export default Nav;
