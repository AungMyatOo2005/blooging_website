import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "../styles";
import ContentLoader from "react-content-loader";
import Comments from "./Comments";
const PostDetails = () => {
  const [post, setPost] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [err, setErr] = useState("");
  const { id } = useParams(); //get id by useParams
  useEffect(() => {
    const getPost = async () => {
      try {
        const resp = await axios.get(
          `${import.meta.env.VITE_API_URL}/posts/${id}?_embed=comments` //fetch data what post user click
        );
        setPost(await resp.data);
      } catch (err) {
        setErr(`Error Fetching Data:${err.message}`); //error state
      } finally {
        setIsLoading(false);
      }
    };
    getPost();
  }, []);
  return (
    <div className={` pt-32 ${styles.flexCenter} ${styles.paddingX}`}>
      {isLoading && !err && (
        <ContentLoader
          width={450}
          height={400}
          viewBox="0 0 450 400"
          backgroundColor="#4c4c4d"
          foregroundColor="#dedede"
        >
          <rect x="43" y="304" rx="4" ry="4" width="271" height="9" />
          <rect x="44" y="323" rx="3" ry="3" width="119" height="6" />
          <rect x="42" y="77" rx="10" ry="10" width="388" height="217" />
        </ContentLoader>
      )}
      {err && (
        <h2 className="text-secondary text-[32px] w-full text-center font-semibold font-Poppins">
          {err}
        </h2>
      )}
      {!isLoading && !err && (
        <div className="w-[350px] rounded-t-[5px]">
          <img src={post.post_url} className="w-full h-[350px] object-cover" />
          <div>
            <Comments id={post.id} comments={post.comments} />
          </div>
        </div>
      )}
    </div>
  );
};

export default PostDetails;
