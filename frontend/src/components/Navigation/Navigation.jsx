import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../context/ThemeContext";
import "./Navigation.css";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navigation">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          <span className="logo-text">Electrolyte</span>
        </Link>

        <div className={`nav-menu ${isMenuOpen ? "active" : ""}`}>
          <Link
            to="/"
            className="nav-link"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="nav-link"
            onClick={() => setIsMenuOpen(false)}
          >
            About Us
          </Link>
          <Link
            to="/vendors"
            className="nav-link"
            onClick={() => setIsMenuOpen(false)}
          >
            Vendors
          </Link>
          <Link
            to="/services"
            className="nav-link"
            onClick={() => setIsMenuOpen(false)}
          >
            Services
          </Link>
          <a
            href="#contact"
            className="nav-link cta-button"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact Us
          </a>
          <button onClick={toggleTheme} className="theme-toggle-button">
            {theme === 'light' ? 'Dark' : 'Light'} Mode
          </button>
        </div>

        <div className="hamburger" onClick={toggleMenu}>
          <span className={isMenuOpen ? "active" : ""}></span>
          <span className={isMenuOpen ? "active" : ""}></span>
          <span className={isMenuOpen ? "active" : ""}></span>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
