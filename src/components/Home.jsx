//Home page

//React
import React, { useEffect, useState } from "react";
//Axios
import axios from "axios";
//Post Components
import PostsComponents from "./PostsComponents";
//Loading page for use-friendly
import Loading from "../loading/Loading";
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
      // try state
      try {
        const resp = await axios.get(
          `${import.meta.env.VITE_API_URL}/posts?_expand=user`
        );
        setPosts(await resp.data);
      } catch (error) {
        //catch error
        console.error("Error fetching data:", error);
        setError("An error occurred while fetching data.");
        setIsLoading(false);
      } finally {
        //finally set loading is false
        setIsLoading(false);
      }
    };

    return () => {
      getPosts();
    };
  }, []);
  return (
    <div className={`py-16 pt-32`}>
      {isLoading && !error && <Loading style={"flex-row flex-wrap"} />}
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
