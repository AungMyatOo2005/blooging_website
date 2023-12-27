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
//user profile page
import UserProfile from "./profile/UserProfile";
//login page
import Login from "./login/Login";
//Context provider
import ConditionProvider from "./context/ConditionContext";
//register page
import Register from "./register/Register";
//register success page
import SuccessRegister from "./success/SuccessRegister";
//page not found (404 page)
import NotFoundPage from "./errorpage/NotFoundPage";
//protected route for login page
import ProtectedRoute from "./login/ProtectedRoute";
//personal detail edit page
import PersonalDetails from "./personalDetailEdit/PersonalDetails";
//password change 
import PasswordChange from "./personalDetailEdit/PasswordChange";
//name change
import NameChange from "./personalDetailEdit/NameChange";
//email change
import EmailChange from "./personalDetailEdit/EmailChange";
//phone change
import PhoneChange from "./personalDetailEdit/PhoneChange";
//profile change
import ProfileChange from "./personalDetailEdit/ProfileChange";
//success personal detail edit page
import SuccessPersonalDetailEdit from "./success/SuccessPersonalDetailEdit";
//use effect
import { useEffect } from "react";
const App = () => {
  useEffect(() => {
    document.title = "Blog Website";
  }, []);

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
      {/* use context */}
      <ConditionProvider>
        {/* react-router-dom */}
        <RouterProvider router={router} />
      </ConditionProvider>
    </div>
  );
};

export default App;
