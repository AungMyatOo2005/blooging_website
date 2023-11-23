//Home
import React, { useEffect, useState } from "react"; //React
import axios from "axios"; //Axios
import PostsComponents from "./PostsComponents";
import RiseLoader from "react-spinners/RiseLoader";
import styles from "../styles";
const Home = () => {
  //Post
  const [posts, setPosts] = useState([]);
  //loading State
  const [isLoading, setIsLoading] = useState(true);
  //Error State
  const [error, setError] = useState(null);

  //fetch post from json-server
  useEffect(() => {
    const getPosts = async () => {
      try {
        const resp = await axios.get(
          `${import.meta.env.VITE_API_URL}/posts?_expand=user`
        );
        setPosts(await resp.data);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("An error occurred while fetching data.");
        setIsLoading(false);
      } finally {
        setIsLoading(false);
      }
    };

    return () => {
      getPosts();
    };
  }, []);
  return (
    <div className={`py-16 pt-32`}>
      {isLoading && !error && (
        <div className={`${styles.flexCenter} min-h-screen`}>
          <RiseLoader size={15} color={"#36D7B7"} />
        </div>
      )}
      {error && !isLoading && (
        <h1 className="text-[32px] text-secondary font-semibold font-Poppins w-full  text-center">
          Error: {error}
        </h1>
      )}
      {!isLoading && !error && <PostsComponents posts={posts} />}
    </div>
  );
};

export default Home;
