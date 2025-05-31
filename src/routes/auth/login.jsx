import React, { useState } from "react";
import { loginUser } from "../../redux/slices/authSlice";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validationError, setValidationError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setValidationError("Email and password are required.");
      return;
    }

    setValidationError("");

    try {
      dispatch(loginUser({ email, password })).then((res) => {
        if (res.meta.requestStatus === "fulfilled") {
          localStorage.setItem("token", res.payload.token);
          navigate("/");
        }
      });

      setEmail("");
      setPassword("");
    } catch (err) {
      if (err?.status === 422) {
        setValidationError(err?.message || "Invalid credentials.");
      } else {
        navigate("/_error", { state: { error: err } });
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center mb-6">Log In</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {validationError && (
            <div className="text-red-500 text-sm text-center">
              {validationError}
            </div>
          )}

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              required
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
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
              required
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <div className="text-right">
            <Link
              to="/auth/forgot-password"
              className="text-sm text-indigo-600 hover:underline"
            >
              Forgot password?
            </Link>
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition"
          >
            Log In
          </button>

          <div className="flex items-center justify-center my-4">
            <span className="text-gray-500 text-sm">OR</span>
          </div>

          <button
            type="button"
            className="w-full border border-gray-300 py-2 rounded-md text-sm hover:bg-gray-50"
            onClick={() => {
              window.location.href = "http://localhost:8080/api/auth/google";
            }}
          >
            Continue with Google
          </button>

          <div className="text-center text-sm mt-4">
            Don’t have an account?{" "}
            <Link
              to="/auth/register"
              className="text-indigo-600 hover:underline"
            >
              Sign up
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
