import { createContext, useState } from "react";

export const ConditionContext = createContext();

const ConditionProvider = ({ children }) => {
  const [sideBar, setSideBar] = useState(false); //for sidebar
  const [isAuthUser, setIsAuthUser] = useState(false); //auth user?
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
