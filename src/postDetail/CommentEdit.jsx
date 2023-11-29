import axios from "axios";
import React, { useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";
const CommentEdit = ({ setCommentEditBox, commentId }) => {
  const [updateComment, setUpdateComment] = useState("");
  const updateData = {
    text: updateComment,
  };
  const onSubmit = () => {
    {
      updateComment.trim() !== ""
        ? handleCommentUpdate()
        : alert("fill something");
    }
  };
  const handleCommentUpdate = async () => {
    await axios.patch(
      `${import.meta.env.VITE_API_URL}/comments/${commentId}`,
      updateData
    );
  };
  return (
    <div className="min-h-screen fixed flex items-center justify-center z-[5] w-full bg-opacity top-0 left-0">
      <form
        className="bg-gray-900 py-16 px-10 ss:px-16 rounded-md pt-10 flex flex-col relative"
        onSubmit={onSubmit}
      >
        <button className="absolute right-1 top-1" type="button">
          <XMarkIcon
            className="bg-gray-400 w-[25px] ss:w-[30px] rounded-full hover:bg-gray-500"
            onClick={() => setCommentEditBox(false)}
          />
        </button>
        <h2 className="text-secondary text-[24px] font-semibold font-Poppins mb-5">
          Edit Comment
        </h2>
        <input
          className="outline-none rounded-sm py-1 px-4"
          placeholder="Write a comment..."
          name="updateComment"
          value={updateComment}
          onChange={(e) => setUpdateComment(e.target.value)}
        />
        <button
          className="w-full bg-secondary mt-4 py-1 rounded-sm font-semibold font-Poppins cursor-pointer active:scale-95"
          type="submit"
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default CommentEdit;
