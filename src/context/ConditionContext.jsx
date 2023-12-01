import { createContext, useState, useEffect } from "react";

export const ConditionContext = createContext();

const ConditionProvider = ({ children }) => {
  const [sideBar, setSideBar] = useState(false); //for sidebar
  const [isAuthUser, setIsAuthUser] = useState(false); //auth user?
  const [userDataLs, setUserDataLs] = useState(false);
  const [error, setError] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const user = JSON.parse(
      localStorage.getItem("REACT-FRONTEND-FINAL-PROJECT")
    );
    if (user) {
      setIsAuthUser(true);
      setUserDataLs(user);
    }
  }, []);
  return (
    <ConditionContext.Provider
      value={{
        sideBar,
        setSideBar,
        isAuthUser,
        setIsAuthUser,
        userDataLs,
        error,
        setError,
        isDarkMode,
        setIsDarkMode,
      }}
    >
      {children}
    </ConditionContext.Provider>
  );
};

export default ConditionProvider;
