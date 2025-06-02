import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { changePassword } from "../../redux/slices/authSlice";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(changePassword(email)).then(() => {
      setSuccess(true);
    });
  };
  return (
    <div className="absolute top-0 left-0 w-screen h-screen bg-gray-100">
      <div className="flex justify-center items-center w-full h-full">
        {success ? (
          <p>Check your email for the reset password link</p>
        ) : (
          <div className="flex justify-center items-stretch m-8 bg-white shadow-lg rounded-2xl min-w-4xl min-h-96">
            <div className="left-side flex-1 bg-green-400 mr-8 rounded-2xl flex items-center justify-center">
              <h2 className="hollow-text text-6xl font-bold text-center">
                Log In
              </h2>
            </div>
            <div className="bg-white p-8 flex-1 rounded-2xl flex justify-center items-center">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter Your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 mt-4 text-white cursor-pointer py-2 rounded-md hover:bg-blue-700 transition"
                >
                  Submit Email
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ForgotPassword;
