//import style from self-template style
import styles from "../styles";
//use navigate
import { useNavigate } from "react-router-dom";
const PostList = ({ post }) => {
  //use navigate to reach detail what user click post
  const navigator = useNavigate();
  return (
    <div
      className={`${styles.flexStart} flex-col w-[300px] sm:w-[250px] md:w-[250px] bg-gray-800 rounded-[5px] `}
      onClick={() => navigator(`/postDetail/${post.id}`)}
    >
      {post.post_url && (
        <img
          src={post.post_url}
          className="w-full h-[250px] object-cover rounded-t-[5px]"
        />
      )}

      <div className="p-2">
        <h4 className="text-gray-300 font-Poppins text-[22px]">{post.title}</h4>
        <p className="text-gray-300">{post.content}</p>
        <div className={`mt-3 flex items-center justify-start gap-4`}>
          <img
            src={post.user.profileUrl}
            className="w-[50px] h-[50px] object-cover rounded-full"
          />
          <div>
            <h5 className="text-white font-semibold font-Poppins">
              {post.user.username}
            </h5>
            <p className="text-gray-400 text-[12px] font-semibold">
              {post.create_at}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostList;
