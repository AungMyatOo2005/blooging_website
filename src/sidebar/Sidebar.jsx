//use context
import React, { useContext } from "react";
//context 
import { ConditionContext } from "../context/ConditionContext";
//use hero icon
import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import styles from "../styles";
const SideBar = () => {
  const { sideBar, setSideBar } = useContext(ConditionContext);
  return (
    <>
      {sideBar && (
        <div className="min-h-[calc(100vh-55px)] bg-gray-700 sidebar">
          <ul className="min-w-[250px]">
            <li
              className="border-b border-gray-900 cursor-pointer hover:bg-gray-600 py-2"
              onClick={() => setSideBar((prev) => !prev)}
            >
              <ArrowLeftIcon className="w-[30px]" />
            </li>
            <li className="border-b-2 border-gray-900 cursor-pointer hover:bg-gray-600">
              <div
                className={` flex ${styles.flexCenter} py-2 px-4 gap-3 rounded-lg hover:opacity-90 w-full`}
              >
                <img
                  src="https://i.pinimg.com/236x/d9/d8/8e/d9d88e3d1f74e2b8ced3df051cecb81d.jpg"
                  className="w-[35px] rounded-full"
                />
                <h1 className={`${styles.profileName}`}>John</h1>
              </div>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default SideBar;
