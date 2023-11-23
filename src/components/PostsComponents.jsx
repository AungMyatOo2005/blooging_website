import React from "react";
import PostList from "./PostList";
import styles from "../styles";
const PostsComponents = ({ posts }) => {
  const sortingPost = () => {
    const sortPost = posts.sort(
      (a, b) => new Date(b.create_at) - new Date(a.create_at)
    );
    return sortPost; //return last five post
  };
  const last5posts = sortingPost().slice(0, 5);
  return (
    <div className={`flex flex-wrap ${styles.paddingX} justify-evenly gap-10`}>
      {last5posts.map((post) => (
        <PostList post={post} key={post.id} />
      ))}
    </div>
  );
};

export default PostsComponents;
