import CommentsCreator from "./CommentsCreator";
import {ArrowRightCircleIcon} from "@heroicons/react/20/solid"
const Comments = ({ comments }) => {
  return (
    <div className="flex flex-col gap-5">
      {comments.map((comment) => (
        <div className="" key={comment.id}>
          <CommentsCreator id={comment.id} />
        </div>
      ))}
      <form className="flex items-center gap-5">
        <input
          className="outline-none rounded-sm py-1 px-3 bg-gray-300 placeholder:text-gray-600 text-[18px] w-full"
          placeholder="Enter Your Comment..."
        />
        <button type="submit"><ArrowRightCircleIcon className="w-[50px] text-gray-300 active:scale-[0.97]"/></button>
      </form>
    </div>
  );
};

export default Comments;
