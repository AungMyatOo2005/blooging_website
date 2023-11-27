import React, { useContext, useEffect, useState } from "react";
import styles from "../styles";
import { PencilIcon } from "@heroicons/react/24/solid";
import axios from "axios";
import ContentLoader from "react-content-loader";
import { ConditionContext } from "../context/ConditionContext";
import { ArrowLongRightIcon, PlusIcon } from "@heroicons/react/24/solid";
import { useNavigate } from "react-router-dom";
import AuthUserPost from "./AuthUserPost";
import PostUpload from "./PostUpload";
const UserProfile = () => {
  const { isAuthUser } = useContext(ConditionContext);
  const [userData, setUserData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const navigator = useNavigate();
  const [uploadBox, setUploadBox] = useState(false);
  useEffect(() => {
    const getUserData = async (id) => {
      try {
        const resp = await axios.get(
          `${import.meta.env.VITE_API_URL}/users/${id}?_embed=posts`
        );
        setUserData(await resp.data);
      } catch (err) {
        console.error("Error fetching user data:", error);
        setError("Error fetching user data");
      } finally {
        setIsLoading(false);
      }
    };
    const user = JSON.parse(
      localStorage.getItem("REACT-FRONTEND-FINAL-PROJECT")
    );
    if (user) {
      getUserData(user.id);
    }
  }, []);

  const sortingPost = () => {
    if (userData.posts && userData.posts.length > 0) {
      return userData.posts.sort(
        (a, b) => new Date(b.create_at) - new Date(a.create_at)
      );
    } else {
      return [];
    }
  };

  const posts = sortingPost();
  return (
    <>
      {isAuthUser ? (
        <div className="pt-32 py-16">
          {/* loading state  */}
          {isLoading && !error && (
            <ContentLoader viewBox="0 0 260 160" height={300} width={600}>
              <circle cx="50" cy="30" r="30" />
              <rect x="10" y="70" rx="3" ry="3" width="40" height="10" />
              <rect x="60" y="70" rx="3" ry="3" width="70" height="10" />
              <rect x="140" y="70" rx="3" ry="3" width="20" height="10" />
              <rect x="10" y="90" rx="3" ry="3" width="90" height="10" />
              <rect x="110" y="90" rx="3" ry="3" width="70" height="10" />
              <rect x="10" y="110" rx="3" ry="3" width="70" height="10" />
              <rect x="90" y="110" rx="3" ry="3" width="60" height="10" />
            </ContentLoader>
          )}
          {/* error state  */}
          {!isLoading && error && (
            <h1 className="text-[32px] font-semibold text-secondary font-Poppins">
              {error}
            </h1>
          )}
          {/* profile  and post*/}
          {!isLoading && !error && (
            <div className="flex flex-col items-center justify-center">
              <div
                className={` py-10 px-16 bg-gray-900 rounded-lg ${styles.flexCenter} gap-16`}
              >
                <img
                  src={userData.profileUrl}
                  className="w-[200px] rounded-full"
                />
                <div>
                  <h1 className="text-white text-[32px] font-Poppins font-semibold">
                    {userData.username}
                  </h1>
                  {userData.bio ? (
                    <>
                      <p className="text-gray-300 mt-5 text-[20px]">
                        bio: {userData.bio}
                      </p>
                      <button className="bg-secondary mt-5 text-black font-Poppins font-semibold cursor-pointer rounded-sm active:scale-95 py-2 px-4 flex items-center gap-2">
                        <PencilIcon className="w-[25px]" />
                        <span>Edit Personal Detail</span>
                      </button>
                    </>
                  ) : (
                    <button className="bg-secondary mt-5 text-black font-Poppins font-semibold cursor-pointer rounded-sm active:scale-95 py-2 px-4 flex items-center gap-2">
                      <PencilIcon className="w-[25px]" />
                      <span>Edit Personal Detail</span>
                    </button>
                  )}
                </div>
              </div>
              {uploadBox && <PostUpload id={userData.id} />}
              <div
                className="flex items-center bg-gray-900 mt-5 rounded-r-lg select-none cursor-pointer"
                onClick={() => setUploadBox(true)}
              >
                <div className=" bg-gray-700 rounded-l-lg px-5">
                  <PlusIcon className="w-[100px] " />
                </div>
                <h2 className="text-[22px] text-white font-semibold font-Poppins px-10">
                  Add Post
                </h2>
              </div>
              <div className="mt-5 flex flex-col gap-10">
                {posts ? (
                  posts.map((post, index) => (
                    <AuthUserPost
                      post={post}
                      userData={userData}
                      index={index}
                      key={post.id}
                    />
                  ))
                ) : (
                  <h1 className="text-[26px] text-gray-400 font-semibold font-Poppins mt-16">
                    Nothing Post
                  </h1>
                )}
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="py-6 px-10 bg-gray-900 rounded-lg flex flex-col items-end gap-10">
          <h1 className="text-[32px] font-Poppins font-bold text-secondary">
            You are not logging
          </h1>
          <button
            className="flex items-center gap-1 hover:translate-y-[-2px] transition-transform ease-in-out hover:scale-105"
            onClick={() => navigator("/registration")}
          >
            <span className="text-secondary capitalize">register </span>
            <ArrowLongRightIcon className="w-[30px] text-secondary" />
          </button>
        </div>
      )}
    </>
  );
};

export default UserProfile;
