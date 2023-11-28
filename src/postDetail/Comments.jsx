//to get comment and comment creator
import { useEffect, useState } from "react";
import CommentsList from "./CommentsList";
//use hero icon
import { ArrowRightCircleIcon } from "@heroicons/react/20/solid";
import axios from "axios";
import moment from "moment/moment";
import LoginAlert from "./LoginAlert";
const Comments = ({ comments, post }) => {
  const [comment, setComment] = useState("");
  const [userId, setUserId] = useState(null);
  const [loginAlert, setLoginAlert] = useState(false);
  useEffect(() => {
    const authUserData = JSON.parse(
      localStorage.getItem("REACT-FRONTEND-FINAL-PROJECT")
    );
    if (authUserData) {
      setUserId(authUserData.id);
    }
  }, []);

  const commentData = {
    userId: userId,
    postId: post.id,
    text: comment,
    create_at: moment().format(),
  };
  const handleComment = async () => {
    await axios.post(`${import.meta.env.VITE_API_URL}/comments`, commentData);
    window.location.reload();
  };
  const onChange = (e) => {
    setComment(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    userId
      ? comment.trim() !== ""
        ? await handleComment()
        : alert("please fill something")
      : setLoginAlert(true);
  };
  const sortingComment = () => {
    if (comments && comments.length > 0) {
      return comments.sort(
        (a, b) => new Date(b.create_at) - new Date(a.create_at)
      );
    } else {
      return [];
    }
  };
  const sortCommentValue = sortingComment();
  return (
    <div className="flex flex-col gap-5">
      {loginAlert && <LoginAlert setLoginAlert={setLoginAlert} />}
      {sortCommentValue.map((comment) => (
        <div className="" key={comment.id}>
          <CommentsList id={comment.id} userId={userId} post={post} />
        </div>
      ))}
      <form className="flex items-center gap-5" onSubmit={handleSubmit}>
        <input
          className="outline-none rounded-sm py-1 px-3 bg-gray-300 placeholder:text-gray-600 text-[18px] w-full"
          placeholder="Enter Your Comment..."
          name="comment"
          value={comment}
          onChange={onChange}
        />
        <button type="submit">
          <ArrowRightCircleIcon className="w-[50px] text-gray-300 active:scale-[0.97] hover:text-gray-400" />
        </button>
      </form>
    </div>
  );
};

export default Comments;
