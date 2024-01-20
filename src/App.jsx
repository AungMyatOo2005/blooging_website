import styles from "./styles";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./components/home/Home";
import PostDetails from "./components/postDetail/PostDetails";
import UserProfile from "./components/profile/UserProfile";
import Login from "./auth/login/Login";
import ConditionProvider from "./context/ConditionContext";
import Register from "./auth/register/Register";
import SuccessRegister from "./components/SuccessRegister";
import NotFoundPage from "./components/NotFoundPage";
import ProtectedRoute from "./auth/login/ProtectedRoute";
import PersonalDetails from "./components/personalDetailEdit/PersonalDetails";
import PasswordChange from "./components/personalDetailEdit/PasswordChange";
import NameChange from "./components/personalDetailEdit/NameChange";
import EmailChange from "./components/personalDetailEdit/EmailChange";
import PhoneChange from "./components/personalDetailEdit/PhoneChange";
import ProfileChange from "./components/personalDetailEdit/ProfileChange";
import SuccessPersonalDetailEdit from "./components/SuccessPersonalDetailEdit";
import { useEffect } from "react";
const App = () => {
  useEffect(() => {
    document.title = "Blog Website";
  }, []);

  const router = createBrowserRouter(
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
        <Route
          path="/successDetailsEdit"
          element={<SuccessPersonalDetailEdit />}
        />
        <Route path="/personal" element={<PersonalDetails />}>
          <Route index element={<NameChange />} />
          <Route path="nameChange" element={<NameChange />} />
          <Route path="emailChange" element={<EmailChange />} />
          <Route path="phoneNumberChange" element={<PhoneChange />} />
          <Route path="profileChange" element={<ProfileChange />} />
          <Route path="passwordChange" element={<PasswordChange />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    )
  );
  return (
    <div className={`${styles.boxWidth} min-h-screen ${styles.flexCenter}`}>
      <ConditionProvider>
        <RouterProvider router={router} />
      </ConditionProvider>
    </div>
  );
};

export default App;
