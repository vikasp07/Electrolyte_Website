import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Column 1 */}
        <div className="footer-col">
          <h4>Electrolyte Solutions</h4>
          <ul>
            <li>Advanced PCB Repair &</li>
            <li>Refurbishment for OEMs and</li>
            <li>Electronics Brands</li>
            <li className="highlight">ISO 9001:2015 Certified</li>
          </ul>
        </div>

        {/* Column 2 */}
        <div className="footer-col">
          <h4>Services</h4>
          <ul>
            <li>
              <Link to="/services">L3 & L4 PCB Repair</Link>
            </li>
            <li>
              <Link to="/services">PCB Refurbishment</Link>
            </li>
            <li>
              <Link to="/services">Embedded Diagnostics</Link>
            </li>
            <li>
              <Link to="/services">Component-Level Rework</Link>
            </li>
          </ul>
        </div>

        {/* Column 3 */}
        <div className="footer-col">
          <h4>Industries</h4>
          <ul>
            <li>
              <Link to="/clients">Consumer Electronics</Link>
            </li>
            <li>
              <Link to="/clients">Home Appliances</Link>
            </li>
            <li>
              <Link to="/clients">LED & Power Electronics</Link>
            </li>
            <li>
              <Link to="/clients">IoT Devices</Link>
            </li>
          </ul>
        </div>

        {/* Column 4 */}
        <div className="footer-col">
          <h4>Company</h4>
          <ul>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/certifications">Quality & Infrastructure</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/contact">Request Facility Audit</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        © 2025 Electrolyte Solutions. All rights reserved. | Advanced PCB Repair
        Services India
      </div>
    </footer>
  );
}
