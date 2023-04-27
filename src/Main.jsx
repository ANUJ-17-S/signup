import React, { useState } from "react";

const SignUpPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmName, setName] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // sign up logic goes here
  };

  return (
    <form onSubmit={handleSubmit}>
      <div id="input-up">
        <div className="sign">
          <label htmlFor="confirm-Name">Name</label>
          <input
            type="text"
            //defaultValue="Enter your name"
            value={confirmName}
            onChange={handleNameChange}
          />
        </div>
        <div className="sign">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            //defaultValue="Enter your email"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div className="sign">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <div className="sign">
          <button className="btn-sign" type="submit" required label="Sign up">
            Sign Up
          </button>
        </div>
      </div>
    </form>
  );
};
export default SignUpPage;
