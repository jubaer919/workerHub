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
    <div>
      {success ? (
        <p>Check your email for the reset password link</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button type="submit">Submit Email</button>
        </form>
      )}
    </div>
  );
}

export default ForgotPassword;
