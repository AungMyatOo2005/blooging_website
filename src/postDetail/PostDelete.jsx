import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";

const PostDelete = ({ setPostDelete, postId }) => {
  const navigator = useNavigate();
  const handleDelete = async () => {
    await axios.delete(`${import.meta.env.VITE_API_URL}/posts/${postId}`);

    const response = await axios.get(
      `${import.meta.env.VITE_API_URL}/posts/${postId}/comments`
    );
    const commentIds = response.data.map((comment) => comment.id);
    await Promise.all(
      commentIds.map((commentId) =>
        axios.delete(`${import.meta.env.VITE_API_URL}/comments/${commentId}`)
      )
    );
    navigator("/");
    window.location.reload();
  };
  return (
    <div className="min-h-screen fixed flex items-center justify-center z-[5] bg-opacity w-full top-0 px-6">
      <div className="flex gap-5 bg-gray-900 py-10 ss:py-16 px-6 ss:px-10 rounded-md w-full xxs:w-[400px] items-stretch justify-around">
        <button
          className="text-white w-[100px] ss:w-[130px] bg-green-500 rounded-sm py-1"
          onClick={() => setPostDelete((prev) => !prev)}
        >
          Cancel
        </button>
        <button
          className="text-white w-[100px] ss:w-[130px] bg-red-500 rounded-sm py-1"
          onClick={handleDelete}
        >
          Delete Post
        </button>
      </div>
    </div>
  );
};

export default PostDelete;
