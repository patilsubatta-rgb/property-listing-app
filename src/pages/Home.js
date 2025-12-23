import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* Navbar */}
      <nav className="navbar">
        <div className="container">
          <h1 className="logo">🏠 Property Finder</h1>

          <ul className="nav-links">
            <li>
              <Link to="/" className="active">Home</Link>
            </li>
            <li>
              <Link to="/properties">Properties</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="container">
        <section className="hero">
          <h1>Find Your Dream Property</h1>
          <p>
            Discover the perfect home from our curated collection of properties
            across India
          </p>

          <button
            className="btn-primary"
            onClick={() => navigate("/properties")}
          >
            Browse Properties →
          </button>
        </section>
      </main>

      <footer>
        <p>&copy; 2024 Property Finder. All rights reserved.</p>
      </footer>
    </>
  );
};

export default Home;
