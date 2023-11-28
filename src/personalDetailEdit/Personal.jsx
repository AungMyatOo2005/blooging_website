import styles from "../styles";
import { NavLink, Outlet } from "react-router-dom";
const Personal = () => {
  const activeStyle = ({ isActive }) => {
    return {
      backgroundColor: isActive ? "#9ca3af" : "",
    };
  };
  return (
    <div
      className={` w-screen min-h-screen ${styles.paddingX} pt-32 flex justify-center items-start`}
    >
      <div className={`w-fit py-16 bg-gray-900 rounded-lg px-10 relative`}>
        <div className="absolute py-4 flex flex-col top-5 right-[100%]">
          <NavLink
            className="bg-gray-700 py-2 w-[220px]  active:scale-95 border-b text-black border-b-gray-500  hover:bg-gray-400 font-semibold text-center transition-colors"
            to={"details"}
            style={activeStyle}
          >
            Change Personal Detail
          </NavLink>
          <NavLink
            className="bg-gray-700 py-2 w-[220px] active:scale-95 text-black hover:bg-gray-400 font-semibold text-center transition-colors"
            to={"passwordChange"}
            style={activeStyle}
          >
            Change Password
          </NavLink>
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default Personal;
