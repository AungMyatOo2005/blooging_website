//import styles from self-template
import styles from "../styles";
//use context
import { useContext } from "react";
//post post components
import PostComponents from "./PostComponents";
//api context
import { ConditionContext } from "../context/ConditionContext";
//use navigate
import { useNavigate } from "react-router-dom";
//hero icon
import { ArrowLongRightIcon } from "@heroicons/react/24/solid";
const PostList = ({ posts }) => {
  const navigator = useNavigate();
  // sorting for last post
  const { isAuthUser, isDarkMode } = useContext(ConditionContext);

  return (
    <div
      className={`flex flex-col items-center justify-center ${
        isDarkMode ? "bg-primary" : "bg-lightPrimary"
      }`}
    >
      <div
        className={` grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-[30px] ${styles.paddingX}`}
      >
        {posts.map((post) => (
          <PostComponents post={post} key={post.id} />
        ))}
      </div>
      {/* if user are not alert will show to login */}
      {!isAuthUser && (
        <div
          className={`${
            isDarkMode ? "bg-gray-900" : "bg-slate-500"
          } max-w-fit mx-auto mt-6 py-6 px-6 rounded-md mb-6`}
        >
          <h1 className="text-[22px] text-gray-200 font-Poppins font-semibold">
            Please login to see all post
          </h1>
          <button
            className="flex items-center gap-1 hover:translate-y-[-2px] transition-transform ease-in-out hover:scale-105 mt-3 ml-auto"
            onClick={() => navigator("/login")}
          >
            <span className="text-secondary capitalize">login</span>
            <ArrowLongRightIcon className="w-[30px] text-secondary" />
          </button>
        </div>
      )}
    </div>
  );
};

export default PostList;
