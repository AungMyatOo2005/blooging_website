import { useContext, useEffect, useState } from "react";
import { ArrowLongRightIcon } from "@heroicons/react/20/solid";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ConditionContext } from "../context/ConditionContext";
const Login = () => {
  const { setIsAuthUser } = useContext(ConditionContext);
  const navigator = useNavigate();
  const [data, setData] = useState({
    emailOrPhone: "",
    password: "",
  });

  const [invalid, setInvalid] = useState(false);
  const [error, setError] = useState("");
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };
  const handleLogin = async () => {
    try {
      const resp = await axios.get(`${import.meta.env.VITE_API_URL}/users`);
      const respData = await resp.data;
      const user = respData.find(
        (user) =>
          (user.email === data.emailOrPhone ||
            user.phone === data.emailOrPhone) &&
          user.password === data.password
      );
      if (user) {
        login(user);
      } else {
        setInvalid(true);
      }
    } catch (err) {
      console.error("Error fetching user data:", error);
      setError("Error fetching user data");
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin();
  };
  const login = (user) => {
    localStorage.setItem("REACT-FRONTEND-FINAL-PROJECT", JSON.stringify(user));
    setIsAuthUser(true);
    navigator("/");
  };

  return (
    <div className="flex items-center justify-self-center min-h-screen pt-20 pb-10 px-8">
      {error ? (
        <h1 className="text-secondary text-[32px] w-full text-center font-Poppins font-semibold">
          {error}
        </h1>
      ) : (
        <form
          className="bg-grayNine py-10 px-6 ss:px-10 sm:px-16 rounded-lg shadow-[2px_2px_20px_0px_rgba(158,157,153,0.3)] flex flex-col gap-5 w-full ss:w-[400px] sm:w-[500px]"
          onSubmit={handleSubmit}
        >
          <h1
            className={`text-[26px] font-semibold font-Poppins text-secondary mb-5`}
          >
            Log in
          </h1>
          <div className="text-gray-300 font-Poppins text-[16px] flex flex-col items-start gap-2">
            <label className="text-gray-200 font-semibold font-Poppins">
              Email or Phone
            </label>
            <input
              placeholder="Enter email or phone"
              className="bg-transparent border-b border-gray-200 w-full mt-3 outline-none py-1 text-gray-200 placeholder:text-gray-600 px-2"
              name="emailOrPhone"
              value={data.emailOrPhone}
              onChange={handleChange}
              type="text"
            />
          </div>
          <div className="text-gray-300 font-Poppins text-[16px] flex flex-col items-start gap-2">
            <label className="text-gray-200 font-semibold font-Poppins">
              Password
            </label>
            <input
              placeholder="Enter Password"
              className="bg-transparent border-b border-gray-200 w-full mt-3 outline-none py-1 text-gray-200 placeholder:text-gray-600 px-2"
              name="password"
              value={data.password}
              onChange={handleChange}
              type="password"
            />
          </div>
          {invalid && (
            <span className="text-red-500 text-[14px]">
              invalid email or phone or password
            </span>
          )}
          <button
            type="submit"
            className="bg-secondary py-1 rounded-sm font-semibold font-Poppins cursor-pointer active:scale-[0.97] mt-4 w-full"
          >
            Login
          </button>
          <div className="flex items-center gap-3">
            <span className="text-gray-200">you don't have account</span>
            <button
              className="flex items-center gap-1 hover:translate-y-[-2px] transition-transform ease-in-out hover:scale-105"
              onClick={() => navigator("/registration")}
            >
              <span className="text-secondary capitalize">register </span>
              <ArrowLongRightIcon className="w-[30px] text-secondary" />
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default Login;
