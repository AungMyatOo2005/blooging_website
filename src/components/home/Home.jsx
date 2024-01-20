import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import PostList from "./PostList";
import Loading from "../loading/Loading";
import { ConditionContext } from "../context/ConditionContext";
import Pagination from "./Pagination";
const Home = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(8);
  const { isDarkMode, isAuthUser } = useContext(ConditionContext);

  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;
  const currentPost = posts.slice(firstPostIndex, lastPostIndex);
  useEffect(() => {
    const getPosts = async () => {
      try {
        const resp = await axios.get(
          `${
            import.meta.env.VITE_API_URL
          }/posts?_sort=create_at&_order=desc&_expand=user`
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
    <div
      className={`py-16 pt-32 ${
        isDarkMode ? "bg-primary" : "bg-lightPrimary"
      } w-screen min-h-screen flex items-center`}
    >
      {isLoading && !error && <Loading style={"flex-row flex-wrap"} />}
      {error && !isLoading && (
        <h1
          className={`text-[22px] text-center sm:text-[32px] ${
            isDarkMode ? "text-secondary" : "text-blue-950"
          } font-semibold font-Poppins w-full  text-center`}
        >
          Error: {error}
        </h1>
      )}
      {!isLoading && !error && (
        <div className="flex flex-col items-center h-screen w-screen">
          {isAuthUser && (
            <Pagination
              totalPosts={posts.length}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              postPerPage={postPerPage}
            />
          )}
          <PostList posts={currentPost} />
        </div>
      )}
    </div>
  );
};

export default Home;
