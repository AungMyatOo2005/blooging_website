import React from "react";
import Nav from "../nav/Nav";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      {/* navbar page  */}
      <Nav />
      <Outlet />
    </>
  );
};

export default Layout;
