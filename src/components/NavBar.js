import React from "react";
import { Link, NavLink } from "react-router-dom";
import "../pages/home.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <h1 className="logo">🏠 Property Finder</h1>

        <ul className="nav-links">
          <li>
            <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/properties" className={({ isActive }) => isActive ? "active" : ""}>
              Properties
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""}>
              About
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
