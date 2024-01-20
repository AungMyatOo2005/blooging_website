//use context
import React, { useContext, useState } from "react";
//context
import { ConditionContext } from "../../context/ConditionContext";
//use hero icon
import { ArrowLeftIcon } from "@heroicons/react/24/solid";
//profile small box
import ProfileBox from "../home/ProfileBox";
//use navigate
import { useNavigate } from "react-router-dom";
//use hero icon
import {
  PencilIcon,
  ArrowRightOnRectangleIcon,
} from "@heroicons/react/20/solid";
// logout alert
import Logout from "../logout/Logout";
const SideBar = () => {
  const { sideBar, setSideBar, isDarkMode } = useContext(ConditionContext);
  const navigator = useNavigate();
  const [logoutBox, setLogoutBox] = useState(false);

  return (
    <>
      {sideBar && (
        <div
          className={`${
            isDarkMode ? "bg-gray-700" : "bg-gray-400"
          } min-h-screen  sidebar`}
        >
          <ul className="min-w-[250px]">
            <li
              className="border-b border-gray-900 cursor-pointer hover:bg-gray-600 py-2 px-3"
              onClick={() => setSideBar((prev) => !prev)}
            >
              <ArrowLeftIcon className="w-[20px]" />
            </li>
            <li className="border-b border-gray-900 cursor-pointer hover:bg-gray-900">
              <ProfileBox
                onClick={() => {
                  navigator("/userProfile");
                  setSideBar((prev) => !prev);
                }}
              />
            </li>
            <li
              className="flex items-center justify-start px-3 border-b border-gray-900 cursor-pointer hover:bg-gray-900 py-3 gap-2 hover:text-white transition-colors"
              onClick={() => {
                navigator("/personal");
                setSideBar((prev) => !prev);
              }}
            >
              Edit Personal Detail
              <PencilIcon className="w-[20px]" />
            </li>
            <li
              className="flex items-center justify-start px-3 border-b border-gray-900 cursor-pointer hover:bg-gray-900 py-3 gap-2 hover:text-white transition-colors"
              onClick={() => {
                setLogoutBox((prev) => !prev);
                setSideBar((prev) => !prev);
              }}
            >
              Logout
              <ArrowRightOnRectangleIcon className="w-[20px]" />
            </li>
          </ul>
        </div>
      )}
      {logoutBox && <Logout setLogoutBox={setLogoutBox} />}
    </>
  );
};

export default SideBar;
