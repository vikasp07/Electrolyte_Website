import React, { useState, useEffect } from "react";
import "./Certifications.css";

const Certifications = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="certifications-container">
      {/* Hero Section */}
      <section className="certifications-hero">
        <div className="hero-content">
          <h1>Certifications</h1>
          <p>Our commitment to quality and compliance</p>
        </div>
      </section>

      {/* Certifications Content */}
      <section className="certifications-content">
        <div className="container">
          <h2>Quality Certifications</h2>
          <p>
            At Electrolyte Solutions, we are committed to maintaining the highest standards of quality and safety.
            Our certifications demonstrate our dedication to excellence in electrochemical solutions.
          </p>

          <div className="certifications-grid">
            <div className="certification-item">
              <h3>ISO 9001:2015</h3>
              <p>Quality Management Systems</p>
            </div>
            <div className="certification-item">
              <h3>ISO 14001:2015</h3>
              <p>Environmental Management Systems</p>
            </div>
            <div className="certification-item">
              <h3>ISO 45001:2018</h3>
              <p>Occupational Health and Safety</p>
            </div>
            <div className="certification-item">
              <h3>ZED Bronze Certified</h3>
              <p>MSME Sustainable ZED Scheme - Zero Defect–Zero Effect principles</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Certifications;