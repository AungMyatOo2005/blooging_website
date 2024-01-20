//success will show when registration success

//use context
import { useContext } from "react";
//use navigate
import { useNavigate } from "react-router-dom";
//context api
import { ConditionContext } from "../../context/ConditionContext";

const SuccessRegister = () => {
  const navigator = useNavigate();
  const { isDarkMode } = useContext(ConditionContext);
  return (
    <div
      className={`min-h-screen flex items-center justify-center flex-col w-screen px-6 ${
        isDarkMode ? "bg-primary" : "bg-lightPrimary"
      }`}
    >
      <h1
        className={`text-[24px] text-center sm:text-[32px] ${
          isDarkMode ? "text-secondary" : "text-blue-950"
        } font-semibold font-Poppins`}
      >
        Your register is success
      </h1>
      <button
        className={`${
          isDarkMode ? "bg-dimBlue" : "bg-blue-950"
        } text-white font-Poppins font-semibold text-[24px] py-1 mt-4 cursor-pointer active:scale-95 w-[250px] sm:w-[300px]`}
        onClick={() => navigator("/")}
      >
        Back
      </button>
    </div>
  );
};

export default SuccessRegister;
