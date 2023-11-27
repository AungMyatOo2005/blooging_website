//useEffect and useState
import React, { useEffect, useState } from "react";
//use axios to fetch data from json
import axios from "axios";
//to show loading state
import Loading from "../loading/Loading";
import { EllipsisHorizontalIcon } from "@heroicons/react/24/solid";
import CommentDelete from "./CommentDelete";
import CommentEdit from "./CommentEdit";
//comment creator array data
const CommentsList = ({ id, userId }) => {
  const [commentList, setCommentsList] = useState([]);
  //loading state
  const [isLoading, setIsLoading] = useState(true);
  //error state
  const [err, setErr] = useState("");
  const [isHover, setIsHover] = useState(false);
  const [isActiveCmt, setIsActiveCmt] = useState(false);
  const [commentDelete, setCommentDelete] = useState(false);
  const [commentEdit, setCommentEdit] = useState(false);
  useEffect(() => {
    const getCommentsList = async () => {
      try {
        const resp = await axios.get(
          `${import.meta.env.VITE_API_URL}/comments/${id}?_expand=user` //fetch data what post user click
        );
        setCommentsList(await resp.data);
      } catch (err) {
        setErr(`Error Fetching Data:${err.message}`); //error state
      } finally {
        setIsLoading(false);
      }
    };
    getCommentsList();
  }, []);
  return (
    <div className="w-full">
      {isLoading && <Loading style={"flex-col"} />}
      {err && (
        <h2 className="text-secondary text-[14px] w-full text-center font-Poppins">
          {err}
        </h2>
      )}
      {!isLoading && !err && commentList && (
        <>
          {commentDelete && userId === commentList.userId && (
            <CommentDelete setCommentDelete={setCommentDelete} commentId={id} />
          )}
          {commentEdit && userId === commentList.userId && (
            <CommentEdit commentId={id} setCommentEditBox={setCommentEdit} />
          )}
          <div
            className=" rounded-[10px] p-5 bg-gray-700 relative"
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
          >
            {userId === commentList.userId && isHover && (
              <>
                <button
                  className="absolute  top-0 right-2"
                  onClick={() => {
                    setIsActiveCmt((prev) => !prev);
                  }}
                >
                  <EllipsisHorizontalIcon className="w-[40px] text-gray-300" />
                </button>
              </>
            )}
            {isActiveCmt && (
              <div className=" absolute flex flex-col items-center gap-3 bg-gray-500 py-2 px-5 rounded-md right-[-9rem] top-[3rem]">
                {/* if click delete alert box will display and aks confirm delete and cancel (auth user only can make this ) */}
                <button
                  className="bg-gray-900 text-gray-200 w-[100px] rounded-sm py-1 active:scale-95 font-Poppins"
                  onClick={() => setCommentDelete((prev) => !prev)}
                >
                  Delete
                </button>
                <button
                  className="bg-gray-900 text-gray-200 w-[100px] rounded-sm py-1 active:scale-95 font-Poppins"
                  onClick={() => setCommentEdit((prev) => !prev)}
                >
                  Edit
                </button>
              </div>
            )}
            <div className="flex items-center gap-5">
              <img
                src={commentList.user.profileUrl}
                className="w-[50px] rounded-full"
              />
              <h4 className="text-gray-300 font-semibold font-Poppins">
                {commentList.user.username}
              </h4>
            </div>
            <div className="py-2">
              <p className="text-gray-200 font-Poppins text-[16px]">
                {commentList.text}
              </p>
              <p className="text-[14px] leading-[32px] text-gray-400">
                {commentList.create_at}
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CommentsList;
