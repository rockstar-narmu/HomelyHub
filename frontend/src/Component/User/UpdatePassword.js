import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userActions } from "../../Store/User/user-slice";
import { updatePassword } from "../../Store/User/user-action";

const UpdatePassword = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [passwordCurrent, setpasswordCurrent] = useState("");
  const [password, setPassword] = useState("");
  const { errors, success } = useSelector((state) => state.user);

  //submit handler function
  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== passwordConfirm) {
      toast.error("Password is incorrect");
      return false;
    } else {
      dispatch(updatePassword({ passwordConfirm, password, passwordCurrent }));
    }
  };

  useEffect(() => {
    if (errors) {
      toast.error(errors);
      dispatch(userActions.clearError());
    } else if (success) {
      toast.success("Password has been updated");
      navigate("/profile");
      dispatch(userActions.getPasswordSuccess(false));
    }
  }, [errors, dispatch, navigate, success]);
  return (
    <>
      <div className="row wrapper">
        <div className="col-10 col-lg-5 updateprofile">
          <form onSubmit={submitHandler}>
            <h1 className="password_title">Update Password</h1>
            <div className="form-group">
              <label htmlFor="passwordCurrent_field">Password Current</label>
              <input
                type="password"
                id="passwordCurrent_field"
                className="form-control"
                value={passwordCurrent}
                onChange={(e) => setpasswordCurrent(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="new_password_field">New Password</label>
              <input
                type="password"
                id="new_password_field"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="new_password_confirm_field">
                New Password Confirm
              </label>
              <input
                type="password"
                id="new_password_confirm_field"
                className="form-control"
                value={passwordConfirm}
                onChange={(e) => setPasswordConfirm(e.target.value)}
              />
            </div>
            <button type="submit" className="btn-block py-3 password-btn">
              Update Password
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default UpdatePassword;
