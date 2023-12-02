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
    <>
      <div
        className={`flex flex-wrap justify-evenly gap-[30px] ${styles.paddingX} items-end `}
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
          } max-w-fit mx-auto mt-6 py-6 px-6 rounded-md`}
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
    </>
  );
};

export default PostList;
