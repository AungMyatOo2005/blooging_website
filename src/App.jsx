//import self template style
import styles from "./styles";
//React Router Dom
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
//layout page
import Layout from "./layout/Layout";
//home page
import Home from "./components/Home";
//post detail page
import PostDetails from "./postDetail/PostDetails";
//side bar for auth user
import Sidebar from "./sidebar/Sidebar";
//user profile page
import UserProfile from "./profile/UserProfile";
//login page
import Login from "./login/Login";
//Context provider
import ConditionProvider from "./context/ConditionContext";
import Register from "./register/Register";
const App = () => {
  // create browser router for router
  const router = createBrowserRouter(
    // create router for element
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />}></Route>
        <Route path="/postDetail/:id" element={<PostDetails />}></Route>
        <Route path="/userProfile" element={<UserProfile />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/registration" element={<Register />}></Route>
      </Route>
    )
  );
  return (
    <div className={`${styles.boxWidth} bg-primary min-h-screen`}>
      {/* use context */}
      <ConditionProvider>
        {/* react-router-dom */}
        <RouterProvider router={router} />
        <div className="fixed top-[48px] ss:top-[45px] sm:top-[55px] md:top-[65px] z-[3]">
          {/* side bar */}
          <Sidebar />
        </div>
      </ConditionProvider>
    </div>
  );
};

export default App;
