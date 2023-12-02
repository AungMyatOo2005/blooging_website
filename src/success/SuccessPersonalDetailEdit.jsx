//success personal detail will show when changes are success

//use context
import { useContext } from "react";
//use navigate
import { useNavigate } from "react-router-dom";
//context api
import { ConditionContext } from "../context/ConditionContext";

const SuccessPersonalDetailEdit = () => {
  const navigator = useNavigate();
  const { isDarkMode } = useContext(ConditionContext);
  return (
    <div
      className={`min-h-screen flex items-center justify-center flex-col w-screen ${
        isDarkMode ? "bg-primary" : "bg-lightPrimary"
      }`}
    >
      <h1
        className={`text-[22px] sm:text-[32px] ${
          isDarkMode ? "text-secondary" : "text-blue-950"
        } font-semibold font-Poppins`}
      >
        Your update is success
      </h1>
      <button
        className={`${
          isDarkMode ? "bg-dimBlue" : "bg-blue-950"
        } text-white font-Poppins font-semibold text-[24px] w-[300px] py-1 mt-4 cursor-pointer active:scale-95`}
        onClick={() => {
          navigator("/");
          window.location.reload();
        }}
      >
        Back
      </button>
    </div>
  );
};

export default SuccessPersonalDetailEdit;
