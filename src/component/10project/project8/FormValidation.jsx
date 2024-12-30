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

  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userName.length > 8) {
      setErrorUserName("");
      setUserColor("green");
    } else {
      setErrorUserName("UserName must be 8 letter");
      setUserColor("red");
    }
    if (email.includes("@gmail")) {
      setErrorEmail("");
      setEmailColor("green");
    } else {
      setErrorEmail("you must add the @gmail");
      setEmailColor("red");
    }
    if (password.length > 8) {
      setErrorPassword("");
      setPasswordColor("green");
    } else {
      setErrorPassword("your password should be 8 char long");
    }
    if (password !== "" && password === confirmPassword) {
      setErrorConfirmPassword("");
      setConfirmPasswordColor("green");
    } else {
      setErrorConfirmPassword("your password did not match..");
      setConfirmPasswordColor("red");
    }
    setFormData({
      userName: userName,
      email: email,
      password: password,
      confirmPassword: confirmPassword,
    });
  };
  console.log(formData);
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
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm your password"
              required
            />
            <p className="errorMessage">{errorConfirmPassword}</p>
          </div>

          <button type="submit" className="submit-btn">
            Sign Up
          </button>
        </form>

        <pre>{JSON.stringify(formData, null, 2)}</pre>
      </div>
    </div>
  );
};

export default FomValidation;
