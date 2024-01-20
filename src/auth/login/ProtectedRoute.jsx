import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const [authUser, setAuthUser] = useState(false);
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
