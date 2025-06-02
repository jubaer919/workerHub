import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { newPassword } from "../../redux/slices/authSlice";
import { toast } from "react-toastify";

function NewPassword() {
  const { token } = useParams();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) return;

    dispatch(newPassword({ password, token })).then(() => {
      toast.success("your password Udpdate successfully");
      navigate("/auth/login");
    });
  };

  return (
    <div className="absolute top-0 left-0 w-screen h-screen bg-gray-100">
      <div className="flex justify-center items-center w-full h-full">
        <div className="flex justify-center items-stretch m-8 bg-white shadow-lg rounded-2xl min-w-4xl">
          <div className="left-side flex-1 bg-green-400 mr-8 rounded-2xl flex items-center justify-center">
            <h2 className="hollow-text text-6xl font-bold text-center">
              Log In
            </h2>
          </div>
          <div className="bg-white p-8 flex-1 rounded-2xl">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="Password">New Password</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label for="confirmPassword">Confirm Password</label>
                <input
                  type="password"
                  name="confirmPassword"
                  id="confirmPassword"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
              <button type="submit">Change Password</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewPassword;
