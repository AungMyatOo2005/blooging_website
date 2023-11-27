//use context for side bar active
import { useContext, useState, useEffect } from "react";
///import style from self-template
import styles from "../styles";
//condition context consumer
import { ConditionContext } from "../context/ConditionContext";
import axios from "axios";
const ProfileBox = ({ value }) => {
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    const getUserData = async (id) => {
      const resp = await axios.get(
        `${import.meta.env.VITE_API_URL}/users/${id}`
      );
      setUserData(await resp.data);
    };
    const user = JSON.parse(
      localStorage.getItem("REACT-FRONTEND-FINAL-PROJECT")
    );
    if (user) {
      getUserData(user.id);
    }
  }, []);
  const { setSideBar } = useContext(ConditionContext);
  return (
    <div
      className={`bg-dimBlue flex ${styles.flexCenter} py-2 px-4 gap-3 rounded-lg hover:opacity-90 ${value} select-none`}
      // if user click side bar will display
      onClick={() => setSideBar((prev) => !prev)}
    >
      <img src={userData.profileUrl} className="w-[35px] rounded-full" />
      <h1 className={`${styles.profileName}`}>{userData.username}</h1>
    </div>
  );
};

export default ProfileBox;
