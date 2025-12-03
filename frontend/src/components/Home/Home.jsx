import React, { useEffect, useState } from 'react';
import './Home.css';
import HeroBanner from './sections/HeroBanner';
import MissionVisionValues from './sections/MissionVisionValues';
import SolutionsSlider from './sections/SolutionsSlider';
import UseCasesSlider from './sections/UseCasesSlider';
import OurServices from './sections/OurServices';

const Home = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main id="home-main" className="site-main">
      <article className="home-page-content">
        <div className="entry-content">
          <div className="entry-content-inner">
            {/* Hero Banner Section */}
            <HeroBanner scrollY={scrollY} />

            {/* Mission, Vision, Values Section */}
            <MissionVisionValues />

            {/* Solutions Slider Section */}
            <SolutionsSlider />

            {/* Use Cases Section */}
            <UseCasesSlider />

            {/* Our Services Section */}
            <OurServices />
          </div>
        </div>
      </article>
    </main>
  );
};

export default Home;
