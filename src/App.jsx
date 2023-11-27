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
import Home from "./home/Home";
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
import SuccessRegister from "./success/SuccessRegister";
import NotFoundPage from "./errorpage/NotFoundPage";
import PostUpload from "./profile/PostUpload";
import ProtectedRoute from "./login/ProtectedRoute";
const App = () => {
  // create browser router for router
  const router = createBrowserRouter(
    // create router for element
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/postDetail/:id" element={<PostDetails />} />
        <Route path="/userProfile" element={<UserProfile />} />
        <Route
          path="/login"
          element={
            <ProtectedRoute>
              <Login />
            </ProtectedRoute>
          }
        />
        <Route path="/registration" element={<Register />} />
        <Route path="/successRegister" element={<SuccessRegister />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    )
  );
  return (
    <div
      className={`${styles.boxWidth} bg-primary min-h-screen ${styles.flexCenter}`}
    >
      {/* use context */}
      <ConditionProvider>
        {/* react-router-dom */}
        <RouterProvider router={router} />
        <div className="fixed top-[48px] ss:top-[45px] sm:top-[55px] md:top-[65px] z-[3] left-0">
          {/* side bar */}
          <Sidebar />
        </div>
      </ConditionProvider>
    </div>
  );
};

export default App;
