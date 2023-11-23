import React, { useContext } from "react";
import styles from "./styles";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./layout/Layout";
import ConditionProvider, {
  ConditionContext,
} from "./context/ConditionContext";
import SideBar from "./sidebar/SideBar";
import Home from "./components/Home";
import Feature from "./components/Feature";
import AllPost from "./components/AllPost";
import PostDetails from "./components/PostDetails";
const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />}></Route>
        <Route path="/feature" element={<Feature />}></Route>
        <Route path="/allPost" element={<AllPost />}></Route>
        <Route path="/postDetail/:id" element={<PostDetails/>}></Route>
      </Route>
    )
  );
  return (
    <div className={`${styles.boxWidth} bg-primary min-h-screen`}>
      <ConditionProvider>
        <RouterProvider router={router} />
        <div className="fixed top-[48px] ss:top-[45px] sm:top-[55px] md:top-[65px] z-[3]">
          <SideBar />
        </div>
      </ConditionProvider>
    </div>
  );
};

export default App;
