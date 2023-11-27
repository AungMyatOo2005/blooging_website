import { createContext, useState, useEffect } from "react";

export const ConditionContext = createContext();

const ConditionProvider = ({ children }) => {
  const [sideBar, setSideBar] = useState(false); //for sidebar
  const [isAuthUser, setIsAuthUser] = useState(false); //auth user?
  useEffect(() => {
    const user = JSON.parse(
      localStorage.getItem("REACT-FRONTEND-FINAL-PROJECT")
    );
    if (user) {
      setIsAuthUser(true);
    }
  }, []);
  return (
    <ConditionContext.Provider
      value={{
        sideBar,
        setSideBar,
        isAuthUser,
        setIsAuthUser,
      }}
    >
      {children}
    </ConditionContext.Provider>
  );
};

export default ConditionProvider;
