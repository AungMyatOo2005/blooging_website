import { createContext, useState } from "react";

export const ConditionContext = createContext();

const ConditionProvider = ({ children }) => {
  const [sideBar, setSideBar] = useState(false);
  return (
    <ConditionContext.Provider value={{ sideBar, setSideBar }}>
      {children}
    </ConditionContext.Provider>
  );
};

export default ConditionProvider;
