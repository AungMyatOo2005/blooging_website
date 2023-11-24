//use context for side bar active
import { useContext } from "react";
///import style from self-template
import styles from "../styles";
//condition context consumer
import { ConditionContext } from "../context/ConditionContext";
const ProfileBox = ({ value }) => {
  const { setSideBar } = useContext(ConditionContext);
  return (
    <div
      className={`bg-dimBlue flex ${styles.flexCenter} py-2 px-4 gap-3 rounded-lg hover:opacity-90 ${value} select-none`}
      // if user click side bar will display
      onClick={() => setSideBar((prev) => !prev)}
    >
      <img
        src="https://i.pinimg.com/236x/d9/d8/8e/d9d88e3d1f74e2b8ced3df051cecb81d.jpg"
        className="w-[35px] rounded-full"
      />
      <h1 className={`${styles.profileName}`}>John</h1>
    </div>
  );
};

export default ProfileBox;
