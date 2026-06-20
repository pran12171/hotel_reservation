import { NavLink } from "react-router-dom";
import logo from "./assets/logo.png";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-links">
        <NavLink to="/" className="nav-link">
          Home
        </NavLink>
        <NavLink to="/about" className="nav-link">
          About Us
        </NavLink>
        <NavLink to="/contact" className="nav-link">
          Contact Us
        </NavLink>
        <NavLink to="/code" className="nav-link">
          Reserve a Table
        </NavLink>
        <NavLink to="/login" className="nav-link">
          Login
        </NavLink>
        <NavLink to="/menu" className="nav-link">
  Menu
</NavLink>
      </div>
      <img src={logo} alt="Flavors of Pavartty logo" className="nav-logo" />
    </nav>
  );
}

export default Navbar;