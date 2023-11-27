import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";

const Delete = ({ setPostDelete, postId }) => {
  const navigator = useNavigate();
  const handleDelete = () => {
    axios.delete(`${import.meta.env.VITE_API_URL}/posts/${postId}`);
    navigator("/");
    window.location.reload();
  };
  return (
    <div className="min-h-screen fixed flex items-center justify-center z-[5] bg-opacity w-full top-0">
      <div className="flex gap-5 bg-gray-900 py-16 px-10 rounded-md">
        <button
          className="text-white w-[130px] bg-green-500 rounded-sm py-1"
          onClick={() => setPostDelete((prev) => !prev)}
        >
          Cancel
        </button>
        <button
          className="text-white w-[130px] bg-red-500 rounded-sm py-1"
          onClick={handleDelete}
        >
          Delete Post
        </button>
      </div>
    </div>
  );
};

export default Delete;
