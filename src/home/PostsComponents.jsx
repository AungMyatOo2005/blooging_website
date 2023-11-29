//post list components
import PostList from "./PostList";
//import styles from self-template
import styles from "../styles";
import { useContext } from "react";
import { ConditionContext } from "../context/ConditionContext";
import { useNavigate } from "react-router-dom";
import { ArrowLongRightIcon } from "@heroicons/react/24/solid";
const PostsComponents = ({ posts }) => {
  const navigator = useNavigate();
  // sorting for last post
  const { isAuthUser } = useContext(ConditionContext);
  const sortingPost = () => {
    const sortPost = posts.sort(
      (a, b) => new Date(b.create_at) - new Date(a.create_at)
    );
    return sortPost; //return last five post
  };
  // unauthorized user can see only 10 post
  const last8Posts = sortingPost().slice(0, 8);
  return (
    <>
      <div
        className={`flex flex-wrap justify-evenly gap-[30px] ${styles.paddingX} items-end`}
      >
        {(isAuthUser ? posts : last8Posts).map((post) => (
          <PostList post={post} key={post.id} />
        ))}
      </div>
      {!isAuthUser && (
        <div className="bg-gray-900 max-w-fit mx-auto mt-6 py-6 px-6 rounded-md">
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

export default PostsComponents;
