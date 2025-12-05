import React, { useRef } from 'react';
import '../styles/OurServices.css';

const OurServices = () => {
  const sliderRef = useRef(null);

  const services = [
    {
      id: 1,
      title: 'LED & Video Wall Repair',
      image: '/images/Resident-Engineer.jpg',
      icon: 'ri-chat-smile-2-line',
      link: '/Services#led-video-wall',
    },
    {
      id: 2,
      title: 'OEM Field Service & Warranty Support',
      image: '/images/Training-Partner.jpg',
      icon: 'ri-user-settings-line',
      link: '/Services#oem-field-service',
    },
    {
      id: 3,
      title: 'PCB & Chip-Level Repair',
      image: '/images/Consulting-Service.jpg',
      icon: 'ri-pie-chart-line',
      link: '/Services#pcb-chip-repair',
    },
    {
      id: 4,
      title: 'Product Refurbishment (ETN)',
      image: '/images/Annual-maintainence.jpg',
      icon: 'ri-git-branch-line',
      link: '/Services#product-refurbishment',
    },
    {
      id: 5,
      title: 'Parts Cannibalization & Parts Swap',
      image: '/images/Cyber-Lab.jpg',
      icon: 'ri-voiceprint-line',
      link: '/Services#parts-cannibalization',
    },
    {
      id: 6,
      title: 'GAP Assessment',
      image: '/images/Gap-Assessment-2.jpg',
      icon: 'ri-openai-line',
      link: '/Services#gap-assessment',
    },
  ];

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <section id="our-services-section" className="bt_bb_section our-services-section">
      <div className="our-services-content">
        {/* Section Header */}
        <div className="our-services-header">
          <h3 className="our-services-title">Our Services</h3>
        </div>

        {/* Service Slider */}
        <div className="our-services-slider-wrapper">
          <div className="our-services-slider" ref={sliderRef}>
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>

          {/* Slider Controls */}
          <button
            className="service-nav-btn service-nav-prev"
            onClick={scrollLeft}
            aria-label="Previous services"
          >
            <i className="ri-arrow-left-s-line"></i>
          </button>
          <button
            className="service-nav-btn service-nav-next"
            onClick={scrollRight}
            aria-label="Next services"
          >
            <i className="ri-arrow-right-s-line"></i>
          </button>
        </div>
      </div>
    </section>
  );
};

// Service Card Component
const ServiceCard = ({ service }) => {
  return (
    <div className="service-card">
      <a href={service.link} className="service-card-link">
        <div className="service-image-wrapper">
          <img
            src={service.image}
            alt={service.title}
            loading="lazy"
            className="service-image"
          />
        </div>
      </a>
      <i className={`service-icon ${service.icon}`}></i>
      <h2 className="service-title">
        <a href={service.link}>{service.title}</a>
      </h2>
    </div>
  );
};

export default OurServices;
