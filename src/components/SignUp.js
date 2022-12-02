import React, { useState } from "react";
import "./Login.css";
// import { useRef, UseState } from "react";

const SignUp = () => {
  const [user, setuser] = useState("");
  const [pwd, setPwd] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [dob, setDob] = useState("");
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
      <h1>Register</h1>

      <section>
        <form onSubmit={handleLogin}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            onChange={(e) => setuser(e.target.value)}
            value={user}
            autoComplete="off"
            placeholder="Aimable"
            required
          />
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            onChange={(e) => setUserEmail(e.target.value)}
            value={userEmail}
            placeholder="johnDoe"
            autoComplete="off"
            required
          />
          <label htmlFor="dates">DOB</label>
          <input
            type="date"
            id="dates"
            onChange={(e) => setDob(e.target.value)}
            value={dob}
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
          <a className="button" href="/home">Submit</a>
          {/* <button href="home.js">Submit</button> */}
          <span>
            Have an Acount <a href="/">Login</a>
          </span>
        </form>
      </section>
    </div>
  );
};

export default SignUp;
