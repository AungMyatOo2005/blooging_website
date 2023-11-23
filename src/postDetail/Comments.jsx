import CommentsCreator from "./CommentsCreator";
const Comments = ({ comments }) => {
  return (
    <>
      {comments.map((comment) => (
        <div className="bg-gray-800 py-3 px-5" key={comment.id}>
          <CommentsCreator userId={comment.userId} />
        </div>
      ))}
    </>
  );
};

export default Comments;
