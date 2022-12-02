import React, { useState } from "react";
import "./Login.css";
// import { useRef, UseState } from "react";
import { Navigation } from "react-router-dom";
const Login = () => {
  const [user, setuser] = useState("");
  const [pwd, setPwd] = useState("");
  //   const [errMsg, setErrmsg] = useState("");
  //   const [success, setSuccess] = useState(false);

  const handleLogin = () => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        emailAddress: user,
        password: pwd,
      }),
    };
    fetch("http://localhost:8282/auth/login", options)
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(user, pwd);
      })
      .catch((error) => {
        console.log(user, pwd);
        console.error(error);
      });
  };

  return (
    <div className="login-screen">
      <h1>Login</h1>

      <section>
        <form onSubmit={handleLogin}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            onChange={(e) => setuser(e.target.value)}
            value={user}
            autoComplete="off"
            required
          />
          <br />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            onChange={(e) => setPwd(e.target.value)}
            value={pwd}
            required
          />
          <br />
          <br />
          {/* <button >Submit</button> */}
          <a className="button" href="/home">Submit</a>
          <span>
            Don't Have an Acount <a href="/signup">Register</a>
          </span>
        </form>
      </section>
    </div>
  );
};

export default Login;
