import { useState } from "react";
import styles from "../styles";
const Login = () => {
  const [data, setData] = useState({
    emailOrPhone: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };
  return (
    <div className="flex items-center justify-self-center min-h-screen pt-20 pb-10">
      <form
        className="bg-gray-900 py-10 px-16 rounded-lg shadow-[2px_2px_20px_0px_rgba(158,157,153,0.3)] flex flex-col gap-5"
        onSubmit={(e) => {
          e.preventDefault();
          console.log(data);
        }}
      >
        <h1 className={`text-[26px] font-semibold font-Poppins text-blue-500`}>
          Log in
        </h1>
        <div className="text-gray-300 font-Poppins text-[16px] flex flex-col items-start gap-2">
          <label>Email or Phone</label>
          <input
            placeholder="Enter email or phone"
            className="w-full bg-transparent outline-non bg-white py-1 px-4 rounded-sm outline-none shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] text-black"
            name="emailOrPhone"
            value={data.emailOrPhone}
            onChange={handleChange}
          />
        </div>
        <div className="text-gray-300 font-Poppins text-[16px] flex flex-col items-start gap-2">
          <label>Password</label>
          <input
            placeholder="Enter Password"
            className="w-full bg-transparent outline-non bg-white py-1 px-4 rounded-sm outline-none shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] text-black"
            name="password"
            value={data.password}
            onChange={handleChange}
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 py-1 rounded-sm text-white font-Poppins cursor-pointer active:scale-[0.97] mt-3"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Login;
