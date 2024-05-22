import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import "./Navbar.css"

const Layout1 = () => {
  return (
      <div className="container">
          <div className="logo">
            <Link to="/">Navigation</Link>
          </div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/formtask">Form</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
            </ul>
          </nav>
          
          <Outlet/>
        </div>
  )
}

export default Layout1
