import React, { useContext } from "react";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import { ConditionContext } from "../context/ConditionContext";

const ToggleSwitch = () => {
  const {isDarkMode, setIsDarkMode} = useContext(ConditionContext);
  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };
  return (
    <button
      className="py-4 px-1 bg-gray-400 rounded-[20px] flex items-center relative min-w-[80px]"
      onClick={toggleDarkMode}
    >
      <div
        className={` rounded-full p-[3px] absolute ${
          isDarkMode ? "left-1 bg-blue-900" : "right-1 bg-white"
        } transition-all duration-[0.3s] ease-linear`}
      >
        {isDarkMode ? (
          <MoonIcon className="w-[20px]" />
        ) : (
          <SunIcon className="w-[20px] text-yellow-500" />
        )}
      </div>
      <p
        className={`px-2 text-[14px] font-semibold absolute ${
          isDarkMode ? "right-1" : "left-1"
        } transition-all duration-[0.3s] ease-linear`}
      >
        {isDarkMode ? <span>Dark</span> : <span>Light</span>}
      </p>
    </button>
  );
};

export default ToggleSwitch;
