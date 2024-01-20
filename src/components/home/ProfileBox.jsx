import { useState, useEffect } from "react";
import styles from "../../styles";
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
  return (
    <>
      <div
        className={` flex ${styles.flexCenter} py-2 px-4 gap-3 rounded-lg hover:opacity-90 ${style} select-none`}
        onClick={onClick}
      >
        <img
          src={userData.profileUrl}
          className="w-[40px] aspect-square object-cover rounded-full"
        />
        <h1 className={`${styles.profileName}`}>{userData.username}</h1>
      </div>
    </>
  );
};

export default ProfileBox;
