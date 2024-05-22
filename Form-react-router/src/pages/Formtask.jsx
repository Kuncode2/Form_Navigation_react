import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import "./for.css"
const Formtask = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });

const handleinput=(e)=>{
  let name = e.target.name;
  console.log(name);
  let value = e.target.value
  console.log(value);
  setUser({
    ...user,
    [name] :value
  })
}

  return (
    <section>
      <main>
        <div className="section-registration">
          <div className="container grid grid-two-cols">
            <div className="registration-image">
              <img
                src="reg.png"
                alt="register please"
                width="400"
                height="400"
              />
            </div>
            <div className="registraction-form">
              <h3 className="main-heading mb-3">registration form</h3>
              <br />
              <form>
                <div>
                  <label htmlFor="username">username</label>
                  <input
                    type="text"
                    name="username"
                    placeholder="username"
                    id="username"
                    required
                    autoComplete="off"
                    value={user.username}
                    onChange={handleinput}
                  />      
                </div>
                <div>
                  <label htmlFor="username">email</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="email"
                    id="email"
                    required
                    autoComplete="off"
                    value={user.email}
                    onChange={handleinput}
                  />
                </div>
                <div>
                  <label htmlFor="phone">username</label>
                  <input
                    type="number"
                    name="phone"
                    placeholder="phone"
                    id="phone"
                    required
                    autoComplete="off"
                    value={user.phone}
                    onChange={handleinput}
                  />
                </div>
                <div>
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    name='password'
                    placeholder='password'
                    id='password'
                    required
                    autoComplete="off"
                  />
                </div>
                <br />
                <button type="submit" className="btn btn-submit">
                  Register
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
      <Outlet/>
    </section>
  );
};

export default Formtask;
