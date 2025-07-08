import "./App.css";
//importing necessary components and functions from the react-router-dom library for routing
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Main from "./Component/Home/Main";
import PropertyList from "./Component/Home/PropertyList";
import PropertyDetails from "./Component/PropertyDetails/PropertyDetails";
import Login from "./Component/User/Login";
import { Flip, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { currentUser } from "./Store/User/user-action";
import { userActions } from "./Store/User/user-slice";
import Signup from "./Component/User/Signup";
import Profile from "./Component/User/Profile";
import EditProfile from "./Component/User/EditProfile";
import UpdatePassword from "./Component/User/UpdatePassword";
import ForgotPassword from "./Component/User/ForgotPassword";
import ResetPassword from "./Component/User/ResetPassword";
import Payment from "./Component/Payment/Payment";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import MyBookings from "./Component/Mybookings/MyBookings";
import BookingDetails from "./Component/Mybookings/BookingDetails";

import AccomodationForm from "./Component/Accomodation/AccomodationForm";
import Accomodation from "./Component/Accomodation/Accomodation";

function App() {
  const stripePromise = loadStripe(
    "pk_test_51P0phKKKV96HxxzAVbQ2YF8C2IvSmduF5lShP9J2AWrGxTkKfjcVGW7XTEgEz0s1428P5OhTzQECzd2SDEcYjf3900m89DqVB2"
  );
  const dispatch = useDispatch();
  const { errors } = useSelector((state) => state.user);
  useEffect(() => {
    if (errors) {
      dispatch(userActions.clearError());
    }
    dispatch(currentUser());
  }, [errors, dispatch]);

  // manages the routing management for the application
  const router = createBrowserRouter(
    // creates routes from the elements passed to it
    createRoutesFromElements(
      // defines a route component that matches all paths "/" and renders the main component
      // exact property ensures that the route matches exactly what you gave in path
      <Route path="/" element={<Main />} id="main" exact>
        <Route id="home" index element={<PropertyList />} exact />
        <Route
          element={<PropertyDetails />}
          id="PropertyDetails"
          path="propertylist/:id"
          exact
        />
        <Route id="login" path="login" element={<Login />} />
        <Route id="signup" path="signup" element={<Signup />} />
        <Route id="profile" path="profile" element={<Profile />} />
        <Route id="editprofile" path="editprofile" element={<EditProfile />} />
        <Route
          id="updatepassword"
          path="user/updatepassword"
          element={<UpdatePassword />}
        />
        <Route
          id="forgotpassword"
          path="user/forgotpassword"
          element={<ForgotPassword />}
        />
        <Route
          id="resetpassword"
          path="user/resetPassword/:token"
          element={<ResetPassword />}
        />
        <Route
          id="payment"
          path="payment/:propertyId"
          element={
            <Elements stripe={stripePromise}>
              <Payment />
            </Elements>
          }
        />
        <Route id="mybookings" path="user/booking" element={<MyBookings />} />
        <Route
          id="bookingdetails"
          path="user/booking/:bookingId"
          element={<BookingDetails />}
        />
        {/* Accomodation */}
        <Route
          id="accomodation"
          path="accommodation"
          element={<Accomodation />}
        />

        <Route
          id="accomodationform"
          path="accomodationform"
          element={<AccomodationForm />}
        />
      </Route>
    )
  );
  return (
    <div className="App">
      {/* its providing a router context to the application using the router provider. Ensures that the routing functionality is available throughout the application */}
      <RouterProvider router={router} />
      <ToastContainer
        position="bottom-center"
        autoClose={3000}
        draggable={true}
        transition={Flip}
      />
    </div>
  );
}

export default App;
