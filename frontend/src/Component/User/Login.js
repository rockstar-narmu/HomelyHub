import React, { Fragment, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import "../../CSS/Login.css";
import { getLogIn } from "../../Store/User/user-action";
import { userActions } from "../../Store/User/user-slice";
import LoadingSpinner from "../LoadingSpinner";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { isAuthenticated, errors, loading } = useSelector(
    (state) => state.user
  );
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(getLogIn({ email, password }));
  };
  useEffect(() => {
    if (errors && errors.length > 0) {
      toast.error(errors);
      dispatch(userActions.clearError());
    } else if (isAuthenticated) {
      navigate("/");
      toast.success("User has logged out successfully");
    }
  }, [isAuthenticated, errors, navigate]);
  return (
    <Fragment>
      <div className="row wrapper">
        {loading && <LoadingSpinner />}
        {!loading && (
          <div className="col-10 col-lg-5">
            <form onSubmit={submitHandler}>
              <h1 className="mb-3">Login</h1>
              <div className="form-group">
                <label htmlFor="email_field">Email</label>
                <input
                  type="email"
                  id="email_field"
                  className="form-control"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password_field">Password</label>
                <input
                  type="password"
                  id="password_field"
                  className="form-control"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <Link to="/user/forgotpassword" className="float-right mb-4">
                Forgot Password
              </Link>
              <button
                id="login_button"
                type="submit"
                className="loginbutton btn-block py-3"
              >
                Login
              </button>
              <Link to="/signup" className="float-right mt-3">
                New user?
              </Link>
            </form>
          </div>
        )}
      </div>
    </Fragment>
  );
};

export default Login;
