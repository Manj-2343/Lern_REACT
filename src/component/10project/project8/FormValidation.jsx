import React, { useState } from "react";
import "./FormValidation.css";

const FomValidation = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [errorUserName, setErrorUserName] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [errorConfirmPassword, setErrorConfirmPassword] = useState("");

  const [userColor, setUserColor] = useState("");
  const [emailColor, setEmailColor] = useState("");
  const [passwordColor, setPasswordColor] = useState("");
  const [confirmPasswordColor, setConfirmPasswordColor] = useState("");

  const handleSubmit = (e) => {};
  return (
    <div className="signup-container">
      <div className="signup-image-container">
        <img
          src={
            "https://d1bltcifwhkdae.cloudfront.net/uploads/Stock-Photos-L2-Categories-04-1024x692.jpg"
          }
          alt="Signup"
          className="signup-image"
        />
      </div>
      <div className="form-container">
        <h2>Create Account</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              value={""}
              onChange={""}
              placeholder="Enter your username"
              required
            />
            <p className="errorMessage">{errorUserName}</p>
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={""}
              onChange={""}
              placeholder="Enter your email"
              required
            />
            <p className="errorMessage">{errorEmail}</p>
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={""}
              onChange={""}
              placeholder="Enter your password"
              required
            />
            <p className="errorMessage">{errorPassword}</p>
          </div>

          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={""}
              onChange={""}
              placeholder="Confirm your password"
              required
            />
            <p className="errorMessage">{errorConfirmPassword}</p>
          </div>

          <button type="submit" className="submit-btn">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default FomValidation;
