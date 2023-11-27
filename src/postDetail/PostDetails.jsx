//axios
import axios from "axios";
//use context ,use effect and use state
import React, { useContext, useEffect, useState } from "react";
//use params to get user click post id and use navigate to back
import { useNavigate, useParams } from "react-router-dom";
// import styles from self-template
import styles from "../styles";
//use react loader to show loading state
import ContentLoader from "react-content-loader";
//comments
import Comments from "./Comments";
//use hero icons
import { XMarkIcon, EllipsisHorizontalIcon } from "@heroicons/react/20/solid";
//context
import { ConditionContext } from "../context/ConditionContext";
//edit and delete alert box
//delete sure box
import Delete from "./Delete";
import PostEdit from "./PostEdit";
const PostDetails = () => {
  const navigator = useNavigate();
  const [post, setPost] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [err, setErr] = useState("");
  const { id } = useParams(); //get id by useParams
  const { isAuthUser } = useContext(ConditionContext);
  const [isActive, setIsActive] = useState(false);
  const [postDelete, setPostDelete] = useState(false);
  const [postEdit, setPostEdit] = useState(false);
  useEffect(() => {
    const getPost = async () => {
      try {
        const resp = await axios.get(
          `${
            import.meta.env.VITE_API_URL
          }/posts/${id}?_embed=comments&_expand=user` //fetch data what post user click
        );
        setPost(await resp.data);
      } catch (err) {
        setErr(`Error Fetching Data:${err.message}`); //error state
      } finally {
        setIsLoading(false);
      }
    };
    getPost();
  }, []);
  const user = JSON.parse(localStorage.getItem("REACT-FRONTEND-FINAL-PROJECT"));
  const idOfUser = user.id;
  return (
    <div className={` pt-32 ${styles.flexCenter} ${styles.paddingX} pb-24`}>
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
        <h2 className="text-secondary text-[32px] w-full text-center font-semibold font-Poppins">
          {err}
        </h2>
      )}
      {!isLoading && !err && (
        <>
          {isAuthUser && post.user.id === idOfUser && postDelete && (
            <Delete setPostDelete={setPostDelete} postId={post.id} />
          )}
          {isAuthUser && post.user.id === idOfUser && postEdit && (
            <PostEdit setPostEdit={setPostEdit} post={post} />
          )}
          <div className="w-[400px] rounded-t-[5px] bg-gray-800 rounded-[10px] relative">
            <div>
              <button
                className="absolute top-1 cursor-pointer right-1 active:scale-95"
                onClick={() => navigator("/userProfile")}
              >
                <XMarkIcon className=" w-[30px] text-gray-300 bg-gray-900 rounded-full hover:opacity-80" />
              </button>
              {isAuthUser && post.user.id === idOfUser && (
                <>
                  <button
                    className="absolute right-1 cursor-pointer top-10"
                    onClick={() => {
                      setIsActive((prev) => !prev);
                    }}
                  >
                    <EllipsisHorizontalIcon className=" w-[35px] text-gray-300 hover:text-gray-500" />
                  </button>
                </>
              )}
              {isActive && (
                <div className=" absolute flex flex-col items-center gap-3 bg-gray-500 py-2 px-5 rounded-md right-[-9rem] top-[3rem]">
                  {/* if click delete alert box will display and aks confirm delete and cancel (auth user only can make this ) */}
                  <button
                    className="bg-gray-900 text-gray-200 w-[100px] rounded-sm py-1 active:scale-95 font-Poppins"
                    onClick={() => setPostDelete((prev) => !prev)}
                  >
                    Delete
                  </button>
                  <button
                    className="bg-gray-900 text-gray-200 w-[100px] rounded-sm py-1 active:scale-95 font-Poppins"
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
                className="w-[50px] rounded-full "
              />
              <div>
                <p className="text-white text-[18px] font-Poppins">
                  {post.user.username}
                </p>
                <p className="text-gray-400 text-[14px]">{post.create_at}</p>
              </div>
            </div>
            <div className="px-4 pb-4">
              <h4 className="text-[22px] text-gray-400 font-semibold font-Poppins mb-2">
                {post.title}
              </h4>
              <p className="text-gray-300 font-Poppins">{post.content}</p>
            </div>
            {post.post_url && (
              <img
                src={post.post_url}
                className="w-full h-[350px] object-cover"
              />
            )}
            <div className=" py-6 px-5">
              <Comments comments={post.comments} postId={post.id} />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default PostDetails;
