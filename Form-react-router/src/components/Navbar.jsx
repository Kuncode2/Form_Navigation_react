import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      <header>
        <div className="container">
          <div className="logo">
            <NavLink to="/">Navigation</NavLink>
          </div>
          <nav>
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/About">About</NavLink>
              </li>
              <li>
                <NavLink to="/Formtask">Form</NavLink>
              </li>
              <li>
                <NavLink to="/login">Login</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
