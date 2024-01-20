//login user post

// use context
import { useContext } from "react";
//use navigate
import { useNavigate } from "react-router-dom";
//api context
import { ConditionContext } from "../../context/ConditionContext";

const AuthUserPost = ({ userData, post }) => {
  const navigator = useNavigate();
  const { isDarkMode } = useContext(ConditionContext);
  return (
    <div
      className={`${
        isDarkMode ? "bg-gray-900" : "bg-slate-400"
      } w-full sm:w-[450px] rounded-lg`}
      onClick={() => navigator(`/postDetail/${post.id}`)}
    >
      <div className="flex items-center gap-3 pt-6 pb-2 px-2 sm:px-5">
        <img
          src={userData.profileUrl}
          className="w-[50px] xs:w-[70px] rounded-full aspect-square object-cover"
        />
        <div className="flex flex-col items-start gap-1">
          <h2
            className={`${
              isDarkMode ? "text-gray-200" : "text-gray-900"
            } font-semibold font-Poppins`}
          >
            {userData.username}
          </h2>
          <p
            className={`${
              isDarkMode ? "text-gray-300" : "text-gray-700"
            } font-Poppins text-[14px]`}
          >
            {post.create_at}
          </p>
        </div>
      </div>
      <div className="px-5 py-2">
        <h4
          className={`text-[22px] font-Poppins ${
            isDarkMode ? "text-gray-400" : "text-gray-700"
          }`}
        >
          {post.title}
        </h4>
        <p
          className={`${
            isDarkMode ? "text-gray-200" : "text-black"
          } text-[15px] sm:text-[16px] font-Poppins mt-2`}
        >
          {post.content}
        </p>
      </div>
      {post.post_url && (
        <img
          src={post.post_url}
          className="w-full h-[280px] ss:h-[300px] sm:h-[400px] md:h-[450px]  rounded-b-lg object-cover"
        />
      )}
    </div>
  );
};

export default AuthUserPost;
