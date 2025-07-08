import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../../Store/User/user-action";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "../../CSS/Profile.css";

const EditProfile = () => {
  //destructuring the user
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [avatarPreview, setAvatarPreview] = useState("/assets/avatar.png");
  const [avatar, setAvatar] = useState("");

  useEffect(() => {
    if (user) {
      setName(user.name || "");
      setPhoneNumber(user.phoneNumber || "");
      setAvatarPreview(user.avatar?.url || "/assets/avatar.png");
      setAvatar(user.avatar?.url || "");
    }
  }, [user]);

  //function for handle updates
  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(updateUser({ name, phoneNumber, avatar }));
    navigate("/profile");
    toast.success("Profile updated successfully");
  };

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      setAvatarPreview(reader.result);
      setAvatar(reader.result);
    };
    reader.readAsDataURL(file);
  };
  return (
    <div className="row wrapper">
      {user && (
        <div className="col-10 col-lg-5 updateprofile">
          <form onSubmit={handleUpdate} encType="multipart/form-data">
            <h1 className="mt-2 mb-5">Update Profile</h1>
            <div className="form-group">
              <label htmlFor="name_field">Name</label>
              <input
                type="text"
                id="name_field"
                className="form-control"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="phonenumber_field">Phone Number</label>
              <input
                type="text"
                id="phonenumber_field"
                className="form-control"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="avatar_upload">Avatar</label>
              <div className="d-flex align-items-center">
                <div className="avatar mr-3 item-rtl">
                  <img
                    src={avatarPreview}
                    className="rounded-circle"
                    alt="Avatar Preview"
                  />
                </div>
                <div className="custom-file">
                  <input
                    type="file"
                    name="avatar"
                    className="custom-file-input"
                    id="avatar_update"
                    accept="image/*"
                    onChange={handleAvatarChange}
                  />
                  <label className="custom-file-label" htmlFor="avatar_update">
                    Choose Avatar
                  </label>
                  <p className="notes">
                    (Image size should be less than 20 kb)
                  </p>
                </div>
              </div>
            </div>
            <button type="submit" className="update-btn btn-block">
              Update
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default EditProfile;
