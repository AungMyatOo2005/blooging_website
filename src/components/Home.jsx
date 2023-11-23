//Home
import React, { useEffect, useState } from "react"; //React
import axios from "axios"; //Axios
import PostsComponents from "./PostsComponents";

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
          `${import.meta.env.VITE_API_URL}/posts?_expand=user&_embed=comments`
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
  console.log(posts);
  return (
    <div className="py-16 pt-32">
      {isLoading && !error && <p>Loading...</p>}
      {error && !isLoading && <p>Error: {error}</p>}
      {!isLoading && !error && <PostsComponents posts={posts} />}
    </div>
  );
};

export default Home;
