import React from "react";
import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Electrolyte</h3>
            <p>Leading solutions for your business needs.</p>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/about">About Us</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Services</h4>
            <ul>
              <li>
                <a href="#services">Consulting</a>
              </li>
              <li>
                <a href="#services">Development</a>
              </li>
              <li>
                <a href="#services">Support</a>
              </li>
              <li>
                <a href="#services">Training</a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contact Info</h4>
            <p>Email: info@electrolyte.com</p>
            <p>Phone: +1 (555) 123-4567</p>
            <p>Address: 123 Business St, Tech City</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            &copy; {currentYear} Electrolyte Solutions. All rights reserved.
          </p>
          <div className="footer-links">
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
