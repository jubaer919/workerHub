import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { registerUser } from "../../redux/slices/authSlice";
import { useNavigate } from "react-router-dom";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUserDoc = { name, email, password };
    dispatch(registerUser(newUserDoc));
    setName("");
    setEmail("");
    setPassword("");
    navigate("/auth/login");
  };

  return (
    <div className="absolute top-0 left-0 w-screen h-screen bg-gray-100">
      <div className="flex justify-center items-center w-full h-full">
        <div className="flex flex-row-reverse justify-center items-stretch m-8 bg-white shadow-lg rounded-2xl min-w-4xl">
          <div className="right-side flex-1 bg-green-400 ml-8 rounded-2xl flex items-center justify-center">
            <h2 className="hollow-text text-6xl font-bold text-center">
              Sign Up
            </h2>
          </div>
          <div className="bg-white p-8 flex-1 rounded-2xl">
            <h2 className="text-2xl font-semibold text-center mb-6">
              Create Account
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Enter Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="Enter Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  value={password}
                  placeholder="Enter your password"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white cursor-pointer py-2 rounded-md hover:bg-blue-700 transition"
              >
                Sign Up
              </button>
            </form>
            <p className="mt-4 text-sm text-center text-gray-600">
              Already have an account?{" "}
              <a href="/auth/login" className="text-blue-600 hover:underline">
                Login
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
