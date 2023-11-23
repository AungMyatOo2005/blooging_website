import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RiseLoader from "react-spinners/RiseLoader";
import styles from "../styles";
const PostDetails = () => {
  const [post, setPost] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [err, setErr] = useState("");
  const { id } = useParams(); //get id by useParams
  useEffect(() => {
    const getPost = async () => {
      try {
        const resp = await axios.get(
          `${import.meta.env.VITE_API_URL}/posts/${id}` //fetch data what post user click
        );
        console.log(resp);
        setPost(await resp.data);
      } catch (err) {
        setErr(`Error Fetching Data:${err.message}`); //error state
      } finally {
        setIsLoading(false);
      }
    };
    getPost();
  }, []);
  console.log(post);
  return (
    <div className={`py-16 pt-32 ${styles.flexCenter}`}>
      {isLoading && !err && <RiseLoader size={15} color={"#36D7B7"} />}
      {err && (
        <h2 className="text-secondary text-[32px] w-full text-center font-semibold font-Poppins">
          {err}
        </h2>
      )}
    </div>
  );
};

export default PostDetails;
