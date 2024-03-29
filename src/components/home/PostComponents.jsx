import { useContext } from "react";
import styles from "../../styles";
import { useNavigate } from "react-router-dom";
import { ConditionContext } from "../../context/ConditionContext";
const PostComponents = ({ post }) => {
  const navigator = useNavigate();
  const { isDarkMode } = useContext(ConditionContext);
  return (
    <div>
      <div
        className={`${styles.flexStart} flex-col w-full 
       ${isDarkMode ? "bg-gray-900" : "bg-slate-400"} rounded-[5px]`}
        onClick={() => navigator(`/postDetail/${post.id}`)}
      >
        {post.post_url && (
          <img
            src={post.post_url}
            className="w-full h-[250px] object-cover rounded-t-[5px]"
          />
        )}

        <div className="p-2">
          <h4
            className={`${
              isDarkMode ? "text-gray-300" : "text-gray-700"
            } font-Poppins text-[22px]`}
          >
            {post.title}
          </h4>
          <p
            className={`${
              isDarkMode ? "text-gray-300" : "text-black"
            } font-Poppins mt-2`}
          >
            {post.content}
          </p>
          <div className={`mt-3 flex items-center justify-start gap-4`}>
            <img
              src={post.user.profileUrl}
              className="w-[50px] h-[50px] object-cover rounded-full"
            />
            <div>
              <h5
                className={`${
                  isDarkMode ? "text-white" : "text-grayNine"
                } font-semibold font-Poppins `}
              >
                {post.user.username}
              </h5>
              <p
                className={`${
                  isDarkMode ? "text-gray-400" : "text-graySeven"
                } text-[12px] font-semibold`}
              >
                {post.create_at}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostComponents;
