import React, { useEffect, useState } from "react";
import axios from "axios";
import Loading from "../loading/Loading";
const CommentsCreator = ({ userId }) => {
  const [commentCreator, setCommentsCreator] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [err, setErr] = useState("");
  useEffect(() => {
    const getCommentsCreator = async () => {
      try {
        const resp = await axios.get(
          `${import.meta.env.VITE_API_URL}/comments/${userId}?_expand=user` //fetch data what post user click
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
  console.log(commentCreator);
  return (
    <>
      {isLoading && <Loading style={"flex-col"} />}
      {err && (
        <h2 className="text-secondary text-[32px] w-full text-center font-semibold font-Poppins">
          {err}
        </h2>
      )}
      {!isLoading && !err && commentCreator && (
        <div className=" rounded-[10px] p-2 bg-gray-700">
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
            <p className="text-gray-200 font-Poppins text-[14px]">
              {commentCreator.text}
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default CommentsCreator;
