import React, { useState, useEffect } from "react";
import axios from "axios";

const Auth = (props) => {
  const [authMode, setAuthMode] = useState("signin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");

  const changeAuthMode = () => {
    setAuthMode(authMode === "signin" ? "signup" : "signin");
  };
  const signIn = () => {
    axios({
      // Endpoint to send files
      url: "http://localhost:8080/auth/generateToken",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      responseType: "text",
      // Attaching the form data
      data: {
        username: email,
        password: password,
      },
    })
      // Handle the response from backend here
      .then((res) => {
        console.log(res.data);
        setToken(res.data);
      })

      // Catch errors if any
      .catch((err) => {
        console.log(err);
      });
  };

  if (authMode === "signin") {
    return (
      <div className="Auth-form-container">
        <form className="Auth-form">
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Sign In</h3>
            <div className="text-center">
              Not registered yet?{" "}
              <span className="link-primary" onClick={changeAuthMode}>
                Sign Up
              </span>
            </div>
            <div className="form-group mt-3">
              <label>Email address</label>
              <input
                type="email"
                className="form-control mt-1"
                placeholder="Enter email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Enter password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <button
                type="button"
                className="btn btn-primary"
                onClick={signIn}
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }

  return (
    <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign Up</h3>
          <div className="text-center">
            Already registered?{" "}
            <span className="link-primary" onClick={changeAuthMode}>
              Sign In
            </span>
          </div>
          <div className="form-group mt-3">
            <label>Full Name</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="e.g Jane Doe"
            />
          </div>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Email Address"
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Password"
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="button" className="btn btn-primary" onClick={signIn}>
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Auth;
