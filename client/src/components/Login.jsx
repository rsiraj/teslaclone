import React from "react";
// import { useState } from "react";
import "./Login.scss";

function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const signIn = (e) => {
//     e.preventDefault();
//   };

  return (
    <div className="signin">
      <div className="signin_header">
        <div className="signin_logo"></div>
        <div className="signin_language"></div>
      </div>
      <div className="signin_info">
        <h1>Sign In</h1>
        <form className="signin_form">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            // value={email}
            // onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="email">Password</label>
          <input
            type="password"
            id="password"
            // value={password}
            // onChange={(e) => setPassword(e.target.value)}
          />
          <button className="contact-form-btn" name="Sign In" type="submit">
            SIGN IN
          </button>
        </form>
        <div className="signin_divider">
          <p className="emailpass">
            Forgot email? <hr /> Forgot password?
          </p>
          <h2 class="background">
            <span>OR</span>
          </h2>
          <br />
          <button
            className="contact-form-btn-num2"
            name="Sign In"
            type="submit"
          >
            CREATE ACCOUNT
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
