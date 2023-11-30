import { useNavigate } from "react-router-dom";

const AuthUserPost = ({ userData, post }) => {
  const navigator = useNavigate();
  return (
    <div
      className="bg-gray-700 w-full sm:w-[450px] rounded-lg"
      onClick={() => navigator(`/postDetail/${post.id}`)}
    >
      <div className="flex items-center gap-3 pt-6 pb-2 px-2 sm:px-5">
        <img
          src={userData.profileUrl}
          className="w-[50px] xs:w-[70px] rounded-full"
        />
        <div className="flex flex-col items-start gap-1">
          <h2 className="text-gray-200 font-semibold font-Poppins">
            {userData.username}
          </h2>
          <p className="text-gray-300 font-Poppins text-[14px]">
            {post.create_at}
          </p>
        </div>
      </div>
      <div className="px-5 py-2">
        <h4 className="text-[22px] font-semibold font-Poppins text-gray-400">
          {post.title}
        </h4>
        <p className=" text-gray-200 text-[16px] sm:text-[18px] font-Poppins mt-2">
          {post.content}
        </p>
      </div>
      {post.post_url && (
        <img
          src={post.post_url}
          className="w-full h-[280px] ss:h-[300px] sm:h-[400px] md:h-[450px]  rounded-b-lg object-cover"
        />
      )}
    </div>
  );
};

export default AuthUserPost;
