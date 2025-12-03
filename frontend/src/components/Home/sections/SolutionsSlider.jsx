import React, { useRef, useState, useEffect } from 'react';
import '../styles/SolutionsSlider.css';

const SolutionsSlider = () => {
  const sliderRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  const slides = [
    {
      id: 1,
      title: 'Display & AV',
      description: 'Refurbish and restore video walls to factory performance',
      image: '/images/firmware-2.jpg',
      link: '/Solution',
    },
    {
      id: 2,
      title: 'Home Appliances',
      description: 'Authorized repairs for fans, geysers, cooktops and IoT appliances',
      image: '/images/Secure-Transfer-1.jpg',
      link: '/Solution',
    },
    {
      id: 3,
      title: 'Industrial Electronics',
      description: 'PCB and component-level repairs for controllers and modules',
      image: '/images/Browser-isolation-1.jpg',
      link: '/Solution',
    },
    {
      id: 4,
      title: 'Refurb Resale',
      description: 'ETN-graded products for resale and corporate buyback',
      image: '/images/AI-built-data-1.jpg',
      link: '/Solution',
    },
    {
      id: 5,
      title: 'Critical Infrastructure',
      description: 'Secure servicing with traceable FA reports',
      image: '/images/Network-Segmentation.jpg',
      link: '/Solution',
    },
    {
      id: 6,
      title: 'Insider Risk Solutions',
      description: 'Comprehensive insider threat management',
      image: '/images/insider-risk.jpg',
      link: '/Solution',
    },
    {
      id: 7,
      title: 'Data Diode',
      description: 'Unidirectional data transfer solutions',
      image: '/images/Data-Diode.jpg',
      link: '/Solution',
    },
    {
      id: 8,
      title: 'Cross Domain Solution',
      description: 'Secure cross-domain communication',
      image: '/images/Cross-domain.jpg',
      link: '/Solution',
    },
  ];

  // Auto-play slider
  useEffect(() => {
    if (!autoPlay) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [autoPlay, slides.length]);

  const handlePrevious = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    setAutoPlay(false);
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setAutoPlay(false);
  };

  const handleDotClick = (index) => {
    setCurrentSlide(index);
    setAutoPlay(false);
  };

  return (
    <section id="solutions-section" className="bt_bb_section solutions-section">
      <div className="solutions-content">
        {/* Section Header */}
        <div className="solutions-header">
          <h3 className="solutions-title">Our Solutions</h3>
        </div>

        {/* Slider Container */}
        <div className="solutions-slider-wrapper">
          <div
            className="solutions-slider"
            ref={sliderRef}
            style={{
              transform: `translateX(-${currentSlide * 100}%)`,
              transition: 'transform 0.5s ease-in-out',
            }}
          >
            {slides.map((slide) => (
              <div
                key={slide.id}
                className="solutions-slide"
                style={{
                  backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('${slide.image}')`,
                }}
              >
                <a href={slide.link} className="slide-link">
                  <div className="slide-overlay">
                    <h3 className="slide-title">
                      {slide.title} — {slide.description}
                    </h3>
                  </div>
                </a>
              </div>
            ))}
          </div>

          {/* Slider Controls */}
          <button
            className="slider-nav-btn slider-nav-prev"
            onClick={handlePrevious}
            aria-label="Previous slide"
          >
            <i className="ri-arrow-left-s-line"></i>
          </button>
          <button
            className="slider-nav-btn slider-nav-next"
            onClick={handleNext}
            aria-label="Next slide"
          >
            <i className="ri-arrow-right-s-line"></i>
          </button>

          {/* Slider Dots */}
          <div className="slider-dots">
            {slides.map((_, index) => (
              <button
                key={index}
                className={`dot ${index === currentSlide ? 'active' : ''}`}
                onClick={() => handleDotClick(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="solutions-cta">
          <a href="/Solution" className="btn-outline">
            <span className="btn-text">Explore All Solutions</span>
          </a>
        </div>
      </div>

      {/* Bottom Coverage Image */}
      <div className="section-bottom-coverage">
        <img src="/images/bottom_black_01.png" alt="wave" loading="lazy" />
      </div>
    </section>
  );
};

export default SolutionsSlider;
