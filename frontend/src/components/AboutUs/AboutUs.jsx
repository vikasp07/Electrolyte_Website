import React, { useState, useEffect } from 'react';
import HeroBanner from './sections/HeroBanner';
import CompanyOverview from './sections/CompanyOverview';
import WhyOregonSystems from './sections/WhyOregonSystems';
import CoreValues from './sections/CoreValues';
import OurProcess from './sections/OurProcess';
import './AboutUs.css';

const AboutUs = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="about-us-container">
      <HeroBanner scrollY={scrollY} />
      <CompanyOverview />
      <WhyOregonSystems />
      <CoreValues />
      <OurProcess />
    </div>
  );
};

export default AboutUs;
