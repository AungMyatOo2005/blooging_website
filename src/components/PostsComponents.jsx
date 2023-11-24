//post list components
import PostList from "./PostList";
//import styles from self-template
import styles from "../styles";
const PostsComponents = ({ posts }) => {
  // sorting for last post
  const sortingPost = () => {
    const sortPost = posts.sort(
      (a, b) => new Date(b.create_at) - new Date(a.create_at)
    );
    return sortPost; //return last five post
  };
  // unauthorized user can see only 10 post
  const last5posts = sortingPost().slice(0, 10);
  return (
    <div
      className={`flex flex-wrap justify-evenly gap-[30px] ${styles.paddingX}`}
    >
      {posts.map((post) => (
        <PostList post={post} key={post.id} />
      ))}
    </div>
  );
};

export default PostsComponents;
