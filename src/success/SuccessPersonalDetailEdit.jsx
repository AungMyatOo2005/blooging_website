import { useNavigate } from "react-router-dom";

const SuccessPersonalDetailEdit = () => {
  const navigator = useNavigate();
  return (
    <div className="min-h-screen flex items-center justify-center flex-col">
      <h1 className="text-[42px] text-secondary font-semibold font-Poppins">
        Your update is success
      </h1>
      <button
        className="bg-dimBlue text-white font-Poppins font-semibold text-[24px] w-full py-1 mt-4 cursor-pointer active:scale-95"
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
