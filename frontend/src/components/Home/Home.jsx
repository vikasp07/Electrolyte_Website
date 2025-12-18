import React, { useEffect, useState } from "react";
import "./Home.css";
import HeroBanner from "./sections/HeroBanner";
import MissionVisionValues from "./sections/MissionVisionValues";

import UseCasesSlider from "./sections/UseCasesSlider";
import OurServices from "./sections/OurServices";
import OurClients from "./sections/OurClients";

const Home = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
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

            {/* Use Cases Section */}
            <UseCasesSlider />

            {/* Our Services Section */}
            <OurServices />

            {/* Our Clients Section */}
            <OurClients />
          </div>
        </div>
      </article>
    </main>
  );
};

export default Home;
