import React, { useState } from "react";
import axios from "axios";
import moment from "moment/moment";
import { XMarkIcon } from "@heroicons/react/24/solid";
const PostUpload = ({ id, setUploadBox }) => {
  const [postValue, setPostValue] = useState({
    content: "",
    title: "",
    post_url: "",
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setPostValue({
      ...postValue,
      [name]: value,
    });
  };

  const postData = {
    userId: id,
    title: postValue.title,
    content: postValue.content,
    post_url: postValue.post_url,
    create_at: moment().format(),
  };

  const handlePost = async () => {
    await axios.post(`${import.meta.env.VITE_API_URL}/posts`, postData);
  };

  const handleSubmit = async () => {
    const { content, title, post_url } = postValue;
    if (
      content.trim() !== "" ||
      title.trim() !== "" ||
      post_url.trim() !== ""
    ) {
      await handlePost();
    } else {
      alert("Please fill something");
    }
  };

  return (
    <div className="bg-opacity h-screen w-screen fixed top-0 z-[10] flex items-center justify-center">
      <form
        className="bg-gray-900 py-24 px-16 rounded-lg relative"
        onSubmit={handleSubmit}
      >
        <button
          className="absolute top-1 cursor-pointer right-1 active:scale-95"
          onClick={() => setUploadBox((prev) => !prev)}
        >
          <XMarkIcon className=" w-[30px] text-gray-900 bg-gray-300 rounded-full hover:opacity-80" />
        </button>
        <h1 className="text-secondary font-semibold font-Poppins text-[28px]">
          Upload Post
        </h1>
        <div className="flex flex-col gap-1 mt-8">
          <label className="text-white font-Poppins">Content</label>
          <input
            className="rounded-sm outline-none text-[18px] py-1 px-4 font-Poppins font-semibold"
            placeholder="what do you think..."
            onChange={onChange}
            name="content"
            value={postValue.content}
          />
          <label className="text-white font-Poppins mt-5">Title</label>
          <input
            className="rounded-sm outline-none text-[18px] py-1 px-4 font-Poppins font-semibold"
            placeholder="title..."
            onChange={onChange}
            name="title"
            value={postValue.title}
          />
          <label className="text-white font-Poppins mt-5">Post Url</label>
          <input
            className="rounded-sm outline-none text-[18px] py-1 px-4 font-Poppins font-semibold"
            placeholder="post url..."
            onChange={onChange}
            name="post_url"
            value={postValue.post_url}
          />
        </div>
        <button className="w-full mt-5 bg-secondary py-1 rounded-sm cursor-pointer active:scale-95 text-black font-semibold font-Poppins">
          Post
        </button>
      </form>
    </div>
  );
};

export default PostUpload;
