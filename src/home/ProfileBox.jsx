//use context for side bar active
import { useContext, useState, useEffect } from "react";
///import style from self-template
import styles from "../styles";
//condition context consumer
import axios from "axios";
const ProfileBox = ({ style, onClick }) => {
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    const user = JSON.parse(
      localStorage.getItem("REACT-FRONTEND-FINAL-PROJECT")
    );
    if (user) {
      setUserData(user);
    }
  }, []);
  console.log(userData)
  return (
    <>
      <div
        className={` flex ${styles.flexCenter} py-2 px-4 gap-3 rounded-lg hover:opacity-90 ${style} select-none`}
        // if user click side bar will display
        onClick={onClick}
      >
        <img src={userData.profileUrl} className="w-[35px] rounded-full" />
        <h1 className={`${styles.profileName}`}>{userData.username}</h1>
      </div>
    </>
  );
};

export default ProfileBox;
