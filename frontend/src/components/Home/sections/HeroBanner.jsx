import React, { useState, useEffect } from "react";
import "../styles/HeroBanner.css";

const HeroBanner = ({ scrollY }) => {
  const [rotatingWordIndex, setRotatingWordIndex] = useState(0);

  const rotatingWords = [
    "LED Video Walls",
    "Industrial Electronics",
    "Device Refurbishment",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setRotatingWordIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [rotatingWords.length]);

  const handleParallax = () => {
    return {
      transform: `translateY(${scrollY * 0.5}px)`,
    };
  };

  return (
    <section
      id="home_banner_section_text"
      className="bt_bb_section hero-banner"
      style={handleParallax()}
    >
      {/* Background Video/Image */}
      <div className="hero-banner-bg" />

      <div className="hero-banner-content">
        <div className="hero-banner-container">
          <div className="hero-banner-main">
            {/* Separator */}
            <div className="separator" />

            {/* Main Title */}
            <h1 className="hero-banner-title animate-in">
              Component-Level Repair:
            </h1>

            {/* Rotating Words Section */}
            <div className="hero-banner-rotating-section">
              <h2 className="hero-banner-subtitle">
                <span>Specializing in</span>
                <div className="rotating-words-wrapper">
                  {rotatingWords.map((word, index) => (
                    <span
                      key={index}
                      className={`rotating-word ${
                        index === rotatingWordIndex ? "active" : ""
                      }`}
                    >
                      {word}
                    </span>
                  ))}
                </div>
              </h2>
            </div>

            {/* Separator */}
            <div className="separator" />

            {/* Subheadline */}
            <h3 className="hero-banner-description animate-in">
              Dedicated to protecting operational technology and critical
              infrastructure with robust solutions tailored to tomorrow's
              challenges.
            </h3>

            {/* Separator */}
            <div className="separator" />

            {/* CTA Button */}
            <a href="/Solution" className="btn-primary animate-in">
              <span className="btn-text">EXPLORE OUR SERVICES</span>
              <i className="ri-arrow-right-line"></i>
            </a>

            {/* Separator */}
            <div className="separator" />
          </div>

          {/* Spacer Column */}
          <div className="hero-banner-spacer" />
        </div>

        {/* Statistics/Counters Section */}
        <div className="hero-banner-stats">
          <StatCounter
            icon="S"
            label="CUSTOMERS"
            value="2500+"
            dataIcon="remixiconsbusiness"
          />
          <StatCounter
            icon="-"
            label="PARTNERS"
            value="1500+"
            dataIcon="remixiconsuser"
          />
          <StatCounter
            icon="+"
            label="DEPLOYMENTS"
            value="15000+"
            dataIcon="remixiconsfinance"
          />
          <StatCounter
            icon="+"
            label="COUNTRIES"
            value="21+"
            dataIcon="remixiconsfinance"
          />
        </div>
      </div>

      {/* Bottom Coverage Image */}
      <div className="section-bottom-coverage">
        <img
          src="/images/Home/bottom_black_01_1.png"
          alt="wave"
          loading="lazy"
        />
      </div>
    </section>
  );
};

// Statistics Counter Component
const StatCounter = ({ icon, label, value, dataIcon }) => {
  return (
    <div className="stat-counter animate-in">
      <div className="stat-counter-icon">
        <i className={`ri-${dataIcon}`} style={{ fontSize: "2.5em" }}></i>
      </div>
      <div className="separator separator-small" />
      <h4 className="stat-counter-label">{label}</h4>
      <div className="separator separator-small" />
      <div className="stat-counter-value">{value}</div>
    </div>
  );
};

export default HeroBanner;
