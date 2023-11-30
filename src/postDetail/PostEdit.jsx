import React, { useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import axios from "axios";
const PostEdit = ({ setPostEdit, post }) => {
  const [postData, setPostData] = useState({
    content: "",
    title: "",
    post_url: "",
  });
  const { content, title, post_url } = postData;
  const handleSubmit = () => {
    if (
      content.trim() !== "" ||
      title.trim() !== "" ||
      post_url.trim() !== ""
    ) {
      handleEdit();
    } else {
      alert("fillSomething");
    }
  };
  const updateData = {
    content: content.trim() === "" ? post.content : content,
    title: title.trim() === "" ? post.title : title,
    post_url: post_url.trim() === "" ? post.post_url : post_url,
  };

  const handleEdit = async () => {
    await axios.patch(
      `${import.meta.env.VITE_API_URL}/posts/${post.id}`,
      updateData
    );
  };
  const onChange = (e) => {
    const { name, value } = e.target;
    setPostData({
      ...postData,
      [name]: value,
    });
  };
  return (
    <div className="min-h-screen fixed flex items-center justify-center z-[5] w-full bg-opacity top-0 left-0 px-6">
      <form
        className="bg-grayNine py-16 px-10 ss:px-16 rounded-md pt-10 flex flex-col relative w-full xs:w-[400px] sm:w-[500px]"
        onSubmit={handleSubmit}
      >
        <button
          className="absolute right-1 top-1"
          type="button"
          onClick={() => setPostEdit(false)}
        >
          <XMarkIcon className="bg-gray-400 w-[25px] ss:w-[30px] rounded-full hover:bg-gray-500" />
        </button>
        <h2 className="text-secondary text-[24px] font-semibold font-Poppins mb-5">
          Edit Post
        </h2>
        <label className="text-gray-400 font-semibold font-Poppins text-[18px] mb-1">
          Content
        </label>
        <input
          className="outline-none rounded-sm py-1 px-4 mb-4"
          placeholder="Write a content"
          name="content"
          value={content}
          onChange={onChange}
        />
        <label className="text-gray-400 font-semibold font-Poppins text-[18px] mb-1">
          Title
        </label>
        <input
          className="outline-none rounded-sm py-1 px-4 mb-4"
          placeholder="Write a Title"
          name="title"
          value={title}
          onChange={onChange}
        />
        <label className="text-gray-400 font-semibold font-Poppins text-[18px] mb-1">
          Post
        </label>
        <input
          className="outline-none rounded-sm py-1 px-4"
          placeholder="Post Url"
          name="post_url"
          value={post_url}
          onChange={onChange}
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

export default PostEdit;
