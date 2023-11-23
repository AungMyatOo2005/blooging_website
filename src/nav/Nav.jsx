import React, { useState } from "react";
import styles from "../styles";
import { NavLink } from "react-router-dom";
import ProfileBox from "../components/ProfileBox";
import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/24/solid";
const Nav = () => {
  const [bar, setBar] = useState(false);
  return (
    <div className="fixed w-full z-[5]">
      <nav
        className={`py-2 px-6 ${styles.flexCenter} justify-between bg-gray-900 w-full relative`}
      >
        <h1 className="text-white font-semibold text-[18px] sm:text-[26px] md:text-[32px] font-Poppins">
          <span className=" text-secondary">A</span>ssignment
          <span className="text-secondary"> S</span>ix
        </h1>
        <ul className="text-white items-center gap-6 text-[16px] md:flex hidden font-Poppins">
          <NavLink to={"/"}>Home</NavLink>
          <NavLink to={"/feature"}>Feature Posts</NavLink>
          <NavLink to={"/allPost"}>All Posts</NavLink>
        </ul>
        <div className="cursor-pointer md:flex hidden">
          <ProfileBox />
        </div>
        <button
          className="md:hidden flex"
          onClick={() => setBar((prev) => !prev)}
        >
          {bar ? (
            <XMarkIcon className="w-[34px] text-white hover:text-secondary cursor-pointer" />
          ) : (
            <Bars3BottomRightIcon className="w-[34px] text-white hover:text-secondary cursor-pointer" />
          )}
        </button>
        {bar && (
          <div className=" absolute right-3 top-20 bg-gray-900 py-10 px-6 rounded-lg navbar md:hidden block">
            <ul className="text-white items-center gap-6 md:text-[16px] font-Poppins flex flex-col">
              <NavLink to={"/"}>Home</NavLink>
              <NavLink to={"/feature"}>Feature Posts</NavLink>
              <NavLink to={"allPost"}>All Posts</NavLink>
            </ul>
            <div className="cursor-pointer mt-5">
              <ProfileBox value={'w-fit'}/>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Nav;
