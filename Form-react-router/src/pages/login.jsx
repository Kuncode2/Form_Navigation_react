import React, { useState } from "react";

const Login = () => {
  const [use, setUse] = useState({
    email: "",
    password: "",
  });

  const handleclick = (e) => {  
    let store = e.target.name;
    console.log(store);
    let real = e.target.value;
    console.log(real);
    setUse({
      ...use,
      [store]: real,
    });
  };

  return (
    <div className="section-Login">
      <div className="container grid grid-two-cols">
        <div className="image">
          <img src="reg.png" alt="register please" width="400" height="400" />
        </div>
        <div className="loginform">
          <h3 className="main-heading mb-3">Login Form</h3>
          <br />
          <form>
            <label htmlFor="email">Email</label> 
            <input
              type="email"
              name="email"
              placeholder="email"
              id="email"
              value={use.email}
              onChange={handleclick}  
              autoComplete="off"
            />
            <br />
            <label htmlFor="password">Password</label> {/* Fixed htmlFor value */}
            <input
              type="password"
              name="password"  // Fixed to match the state key
              placeholder="Password"
              id="password"
              value={use.password}
              onChange={handleclick}  // Added the onChange handler
              autoComplete="off"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
