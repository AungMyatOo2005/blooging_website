//protected route for authorized user

// use state and use effect
import React, { useEffect, useState } from "react";
//use navigate
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  //if authUser can't be in login page so user will return to home page
  const [authUser, setAuthUser] = useState(false);
  //get user data from local storage
  useEffect(() => {
    const data = JSON.parse(
      localStorage.getItem("REACT-FRONTEND-FINAL-PROJECT")
    );
    if (data) {
      setAuthUser(true);
    }
  }, []);

  return <>{authUser ? <Navigate to={"/"} /> : children}</>;
};

export default ProtectedRoute;
