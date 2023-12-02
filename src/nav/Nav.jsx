//nav bar

import React, { useContext, useState } from "react";
import styles from "../styles";
import { NavLink } from "react-router-dom";
import ProfileBox from "../home/ProfileBox";
//hero icon
import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { ConditionContext } from "../context/ConditionContext";
//side bar
import SideBar from "../sidebar/Sidebar";
import ToggleSwitch from "./ToggleSwitch";
const Nav = () => {
  //for responsive side bar
  const [toggle, setToggle] = useState(false);
  //is auth user can't see login and register button
  const { isAuthUser, setSideBar, isDarkMode } = useContext(ConditionContext);
  //using navigate for login and registration
  const handleClick = () => {
    setToggle(false);
    setSideBar(false);
  };

  return (
    <>
      <div className="fixed w-full z-[10] top-0">
        <nav
          className={`py-2 px-6 ${styles.flexCenter} justify-between ${
            isDarkMode ? "bg-gray-900 " : "bg-gray-600"
          } w-full relative`}
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
            <div className="md:flex items-center gap-5 hidden">
              {/* profile box for auth user  */}
              <ToggleSwitch />
              <ProfileBox
                style={`w-fit ${isDarkMode ? "bg-dimBlue" : "bg-slate-800"}`}
                onClick={() => setSideBar((prev) => !prev)}
              />
            </div>
          ) : (
            <div className="md:flex hidden gap-2 button-box items-center">
              {/* login and registration button for unauthorized user  */}
              <ToggleSwitch />
              <NavLink to={"/login"}>
                <button
                  className={`cursor-pointer ${
                    isDarkMode ? "bg-gray-600" : "bg-slate-800"
                  } p-2 w-[100px] text-gray-200 font-Poppins rounded-sm active:scale-95`}
                >
                  <div></div>
                  <span>Login</span>
                </button>
              </NavLink>
              <NavLink to={"/registration"}>
                <button
                  className={`cursor-pointer ${
                    isDarkMode ? "bg-gray-600" : "bg-slate-800"
                  } p-2 w-[100px] text-gray-200 font-Poppins rounded-sm active:scale-95`}
                >
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
            <div
              className={`flex-col items-center absolute right-3 top-20  py-10 px-6 rounded-lg navbar md:hidden flex min-w-[250px] ${
                isDarkMode ? "bg-gray-800" : "bg-slate-700"
              }`}
            >
              <ul className="text-white items-center gap-6 md:text-[16px] font-Poppins flex flex-col">
                <NavLink to={"/"} onClick={handleClick}>
                  Home
                </NavLink>
                <NavLink to={"/userProfile"} onClick={handleClick}>
                  user profile
                </NavLink>
              </ul>
              {isAuthUser ? (
                <div className="cursor-pointer mt-5 flex flex-col items-center gap-3">
                  <ToggleSwitch />
                  <ProfileBox
                    style={"w-fit bg-dimBlue"}
                    onClick={() => {
                      setSideBar((prev) => !prev);
                      setToggle((prev) => !prev);
                    }}
                  />
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
                  <ToggleSwitch />
                </div>
              )}
            </div>
          )}
        </nav>
      </div>
      <div className="fixed top-[48px] ss:top-[45px] sm:top-[55px] md:top-[65px] z-[2] left-0">
        {/* side bar */}
        <SideBar />
      </div>
    </>
  );
};

export default Nav;
