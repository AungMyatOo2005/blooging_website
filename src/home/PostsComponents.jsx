//post list components
import PostList from "./PostList";
//import styles from self-template
import styles from "../styles";
import { useContext } from "react";
import { ConditionContext } from "../context/ConditionContext";
const PostsComponents = ({ posts }) => {
  // sorting for last post
  const { isAuthUser } = useContext(ConditionContext);
  const sortingPost = () => {
    const sortPost = posts.sort(
      (a, b) => new Date(b.create_at) - new Date(a.create_at)
    );
    return sortPost; //return last five post
  };
  // unauthorized user can see only 10 post
  const last8Posts = sortingPost().slice(0, 8);
  return (
    <div
      className={`flex flex-wrap justify-evenly gap-[30px] ${styles.paddingX} items-end`}
    >
      {(isAuthUser ? posts : last8Posts).map((post) => (
        <PostList post={post} key={post.id} />
      ))}
    </div>
  );
};

export default PostsComponents;