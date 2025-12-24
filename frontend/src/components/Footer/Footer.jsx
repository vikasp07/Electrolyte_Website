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
            <li>L3 & L4 PCB Repair</li>
            <li>PCB Refurbishment</li>
            <li>Embedded Diagnostics</li>
            <li>Component-Level Rework</li>
          </ul>
        </div>

        {/* Column 3 */}
        <div className="footer-col">
          <h4>Industries</h4>
          <ul>
            <li>Consumer Electronics</li>
            <li>Home Appliances</li>
            <li>LED & Power Electronics</li>
            <li>IoT Devices</li>
          </ul>
        </div>

        {/* Column 4 */}
        <div className="footer-col">
          <h4>Company</h4>
          <ul>
            <li>About Us</li>
            <li>Quality & Infrastructure</li>
            <li>Contact</li>
            <li>Request Facility Audit</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        © 2025 Electrolyte Solutions. All rights reserved. | Advanced PCB Repair Services India
      </div>
    </footer>
  );
}
