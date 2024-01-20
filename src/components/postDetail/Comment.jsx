import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import Loading from "../Loading";
import { EllipsisHorizontalIcon } from "@heroicons/react/24/solid";
import CommentDelete from "./CommentDelete";
import CommentEdit from "./CommentEdit";
import { ConditionContext } from "../../context/ConditionContext";
const Comments = ({ id, userId, post }) => {
  const [comment, setComment] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [err, setErr] = useState("");
  const [isHover, setIsHover] = useState(false);
  const [isActiveCmt, setIsActiveCmt] = useState(false);
  const [commentDelete, setCommentDelete] = useState(false);
  const [commentEdit, setCommentEdit] = useState(false);
  const { isDarkMode } = useContext(ConditionContext);
  useEffect(() => {
    const getCommentsList = async () => {
      try {
        const resp = await axios.get();
        setComment(await resp.data);
      } catch (err) {
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
      {!isLoading && !err && comment && (
        <>
          {(userId === comment.userId || userId === post.userId) &&
            commentDelete && (
              <CommentDelete
                setCommentDelete={setCommentDelete}
                commentId={id}
              />
            )}
          {commentEdit && userId === comment.userId && (
            <CommentEdit commentId={id} setCommentEditBox={setCommentEdit} />
          )}

          <div
            className={`${
              isDarkMode ? "bg-gray-700" : "bg-gray-300"
            } rounded-[10px] p-5  relative`}
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
          >
            {(userId === comment.userId || userId === post.userId) &&
              isHover && (
                <button
                  className="absolute  top-0 right-2"
                  onClick={() => {
                    setIsActiveCmt((prev) => !prev);
                  }}
                >
                  <EllipsisHorizontalIcon
                    className={`w-[40px] ${
                      isDarkMode ? "text-gray-300" : "text-gray-700"
                    }`}
                  />
                </button>
              )}
            {isActiveCmt && (
              <div className=" absolute flex flex-col items-center gap-3 bg-gray-500 py-2 px-5 rounded-md sm:right-[-9rem] sm:top-[3rem] right-0 top-10">
                <button
                  className={`${
                    isDarkMode
                      ? "bg-gray-900 text-gray-200"
                      : "bg-slate-400 text-black font-Poppins"
                  }  w-[100px] rounded-sm py-1 active:scale-95 font-Poppins`}
                  onClick={() => setCommentDelete((prev) => !prev)}
                >
                  Delete
                </button>
                {userId === comment.userId && (
                  <button
                    className={`${
                      isDarkMode
                        ? "bg-gray-900 text-gray-200"
                        : "bg-slate-400 text-black font-Poppins"
                    }  w-[100px] rounded-sm py-1 active:scale-95 font-Poppins`}
                    onClick={() => setCommentEdit((prev) => !prev)}
                  >
                    Edit
                  </button>
                )}
              </div>
            )}
            <div className="flex items-center gap-3">
              <img
                src={comment.user.profileUrl}
                className="w-[50px] rounded-full"
              />
              <h4
                className={`${
                  isDarkMode ? "text-gray-300" : "text-gray-700"
                } font-semibold font-Poppins`}
              >
                {comment.user.username}
              </h4>
            </div>
            <div className="py-2">
              <p
                className={`${
                  isDarkMode ? "text-gray-200" : "text-gray-9900"
                } font-Poppins text-[16px]`}
              >
                {comment.text}
              </p>
              <p
                className={`text-[14px] leading-[32px] ${
                  isDarkMode ? "text-gray-400" : "text-gray-500"
                }`}
              >
                {comment.create_at}
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Comments;
