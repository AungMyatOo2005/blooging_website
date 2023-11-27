import axios from "axios";
import React from "react";

const CommentDelete = ({ setCommentDelete, commentId }) => {
  const handleDelete = async () => {
    await axios.delete(`${import.meta.env.VITE_API_URL}/comments/${commentId}`);
    window.location.reload();
  };
  return (
    <div className="min-h-screen fixed flex items-center justify-center z-[5] w-full bg-opacity top-0 left-0">
      <div className="flex gap-5 bg-gray-900 py-16 px-10 rounded-md">
        <button
          className="text-white w-[130px] bg-green-500 rounded-sm py-1"
          onClick={() => setCommentDelete((prev) => !prev)}
        >
          Cancel
        </button>
        <button
          className="text-white w-[130px] bg-red-500 rounded-sm py-1"
          onClick={handleDelete}
        >
          Delete Comment
        </button>
      </div>
    </div>
  );
};

export default CommentDelete;
