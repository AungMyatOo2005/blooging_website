import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styles from "../styles";
import ContentLoader from "react-content-loader";
import Comments from "./Comments";
import { XMarkIcon, EllipsisHorizontalIcon } from "@heroicons/react/20/solid";
import { ConditionContext } from "../context/ConditionContext";
import PostDelete from "./PostDelete";
import PostEdit from "./PostEdit";
const PostDetails = () => {
  const navigator = useNavigate();
  const [post, setPost] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [err, setErr] = useState("");
  const { id } = useParams();
  const { isAuthUser, isDarkMode } = useContext(ConditionContext);
  const [isActive, setIsActive] = useState(false);
  const [postDelete, setPostDelete] = useState(false);
  const [postEdit, setPostEdit] = useState(false);
  useEffect(() => {
    const getPost = async () => {
      try {
        const resp = await axios.get(
          `${
            import.meta.env.VITE_API_URL
          }/posts/${id}?_embed=comments&_expand=user`
        );
        setPost(await resp.data);
      } catch (err) {
        setErr(`Error Fetching Data:${err.message}`);
      } finally {
        setIsLoading(false);
      }
    };
    getPost();
  }, []);
  const user = JSON.parse(localStorage.getItem("REACT-FRONTEND-FINAL-PROJECT"));
  const idOfUser = user && user.id;
  return (
    <div
      className={` pt-32 ${styles.flexCenter} px-5 sm:${
        styles.paddingX
      } pb-24 ${isDarkMode ? "bg-primary" : "bg-lightPrimary"} w-screen`}
    >
      {isLoading && !err && (
        <ContentLoader
          width={450}
          height={400}
          viewBox="0 0 450 400"
          backgroundColor="#4c4c4d"
          foregroundColor="#dedede"
        >
          <rect x="43" y="304" rx="4" ry="4" width="271" height="9" />
          <rect x="44" y="323" rx="3" ry="3" width="119" height="6" />
          <rect x="42" y="77" rx="10" ry="10" width="388" height="217" />
        </ContentLoader>
      )}
      {err && (
        <h2 className="text-secondary text-[20px] sm:text-[28px] md:text-[32px] w-full text-center font-semibold font-Poppins">
          {err}
        </h2>
      )}
      {!isLoading && !err && (
        <>
          {isAuthUser && post.user.id === idOfUser && postDelete && (
            <PostDelete setPostDelete={setPostDelete} postId={post.id} />
          )}
          {isAuthUser && post.user.id === idOfUser && postEdit && (
            <PostEdit setPostEdit={setPostEdit} post={post} />
          )}
          <div
            className={`${
              isDarkMode ? "bg-gray-900" : "bg-slate-400"
            } w-full xs:w-[400px] sm:w-[450px] rounded-t-[5px]  rounded-[10px] relative`}
          >
            <div className="pt-10 xxs:pt-0">
              <button
                className="absolute top-1 cursor-pointer right-1 active:scale-95"
                onClick={() => navigator(-1)}
              >
                <XMarkIcon className=" w-[30px] text-gray-300 bg-gray-800 rounded-full hover:opacity-80" />
              </button>
              {isAuthUser && post.user.id === idOfUser && (
                <>
                  <button
                    className="absolute right-1 cursor-pointer top-10"
                    onClick={() => {
                      setIsActive((prev) => !prev);
                    }}
                  >
                    <EllipsisHorizontalIcon
                      className={`w-[35px]  hover:text-gray-500 ${
                        isDarkMode ? "text-gray-300" : "text-gray-700"
                      }`}
                    />
                  </button>
                </>
              )}
              {isActive && (
                <div className=" absolute flex flex-col items-center gap-3 bg-gray-500 py-2 px-5 rounded-md sm:right-[-9rem] sm:top-[3rem] right-0 top-20">
                  <button
                    className={`${
                      isDarkMode
                        ? "bg-gray-900 text-gray-200"
                        : "bg-slate-400 text-black font-Poppins"
                    }  w-[100px] rounded-sm py-1 active:scale-95 font-Poppins`}
                    onClick={() => setPostDelete((prev) => !prev)}
                  >
                    Delete
                  </button>
                  <button
                    className={`${
                      isDarkMode
                        ? "bg-gray-900 text-gray-200"
                        : "bg-slate-400 text-black font-Poppins"
                    }  w-[100px] rounded-sm py-1 active:scale-95 font-Poppins`}
                    onClick={() => setPostEdit((prev) => !prev)}
                  >
                    Edit
                  </button>
                </div>
              )}
            </div>
            <div className={`p-4 flex items-center gap-3 justify-start`}>
              <img
                src={post.user.profileUrl}
                className="w-[60px] aspect-square object-cover rounded-full "
              />
              <div>
                <p
                  className={`${
                    isDarkMode ? "text-white" : "text-gray-900 font-semibold"
                  } text-[18px] font-Poppins`}
                >
                  {post.user.username}
                </p>
                <p
                  className={`${
                    isDarkMode ? "text-gray-400" : "text-gray-900"
                  } text-[14px]`}
                >
                  {post.create_at}
                </p>
              </div>
            </div>
            <div className="px-4 pb-4">
              <h4
                className={`text-[22px] ${
                  isDarkMode ? "text-gray-400" : "text-gray-700"
                } font-Poppins mb-2`}
              >
                {post.title}
              </h4>
              <p
                className={`${
                  isDarkMode ? "text-gray-300" : "text-gray-900"
                } font-Poppins`}
              >
                {post.content}
              </p>
            </div>
            {post.post_url && (
              <a href={post.post_url} target="_blank">
                <img
                  src={post.post_url}
                  className="w-full h-[300px] sm:h-[320px] md:h-[350px] object-cover"
                />
              </a>
            )}
            <div className=" py-6 px-5">
              <Comments comments={post.comments} post={post} />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default PostDetails;
