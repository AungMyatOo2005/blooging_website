//useEffect and useState
import React, { useEffect, useState } from "react";
//use axios to fetch data from json
import axios from "axios";
//to show loading state
import Loading from "../loading/Loading";
//comment creator array data
const CommentsCreator = ({ id }) => {
  const [commentCreator, setCommentsCreator] = useState([]);
  //loading state
  const [isLoading, setIsLoading] = useState(true);
  //error state
  const [err, setErr] = useState("");
  useEffect(() => {
    const getCommentsCreator = async () => {
      try {
        const resp = await axios.get(
          `${import.meta.env.VITE_API_URL}/comments/${id}?_expand=user` //fetch data what post user click
        );
        setCommentsCreator(await resp.data);
      } catch (err) {
        setErr(`Error Fetching Data:${err.message}`); //error state
      } finally {
        setIsLoading(false);
      }
    };
    getCommentsCreator();
  }, []);
  return (
    <>
      {isLoading && <Loading style={"flex-col"} />}
      {err && (
        <h2 className="text-secondary text-[14px] w-full text-center font-Poppins">
          {err}
        </h2>
      )}
      {!isLoading && !err && commentCreator && (
        <div className=" rounded-[10px] p-5 bg-gray-700">
          <div className="flex items-center gap-5">
            <img
              src={commentCreator.user.profileUrl}
              className="w-[50px] rounded-full"
            />
            <h4 className="text-gray-300 font-semibold font-Poppins">
              {commentCreator.user.username}
            </h4>
          </div>
          <div className="py-2">
            <p className="text-gray-200 font-Poppins text-[16px]">
              {commentCreator.text}
            </p>
            <p className="text-[14px] leading-[32px] text-gray-400">
              {commentCreator.create_at}
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default CommentsCreator;
