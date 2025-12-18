import React, { useRef, useState, useEffect } from "react";
import "../styles/UseCasesSlider.css";

const UseCasesSlider = () => {
  const sliderRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  const useCases = [
    {
      id: 1,
      title:
        "Secure File Transfer and Syslog Replication Using Owl Data Diodes",
      description:
        "This case study outlines the implementation of a secure file transfer and syslog replication solution using Owl Cyber Defense data...",
      image:
        "/images/Home/Secure-File-Transfer-and-Syslog-Replication-Using-Owl-Data-Diodes.jpg",
      link: "/case-study-grid",
      tagline: "",
    },
    {
      id: 2,
      title: "Case Study: OSI PI Historian Replication Using OWL Data Diodes",
      description:
        "This case study examines the implementation of OSI PI Historian replication using Owl Cyber Defense data diodes to ensure unidirectional...",
      image:
        "/images/Home/OSI-PI-Historian-Replication-Using-OWL-Data-Diodes.jpg",
      link: "/case-study-grid",
      tagline: "",
    },
    {
      id: 3,
      title: "Secure OPC Data Replication Using Owl Data Diodes",
      description:
        "This case study showcases the implementation of a secure OPC data replication solution using Owl Cyber Defense data diodes.",
      image:
        "/images/Home/Secure-OPC-Data-Replication-Using-Owl-Data-Diodes.jpg",
      link: "/case-study-grid",
      tagline: "",
    },
    {
      id: 4,
      title: "Database Replication Using Data Diodes",
      description:
        "This case study explores how Owl Cyber Defense's data diodes enable secure database replication by ensuring unidirectional data transfer.",
      image: "/images/Home/Database-Replication-Using-Data-Diodes.jpg",
      link: "/case-study-grid",
      tagline: "",
    },
    {
      id: 5,
      title: "Securing Critical CCTV Networks and Enterprise",
      description:
        "This use case explores how OWL Cyber Defense solutions, specifically Data Diodes and Perimeter Defense Solutions (OPDS)",
      image: "/images/Home/Securing-Critical-CCTV-Networks-and-Enterprise.jpg",
      link: "/case-study-grid",
      tagline: "Explore Tranquility",
    },
  ];

  useEffect(() => {
    if (!autoPlay) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % useCases.length);
    }, 6000); // autoplay stays 6 seconds

    return () => clearInterval(interval);
  }, [autoPlay, useCases.length]);

  return (
    <section id="usecases-section" className="bt_bb_section usecases-section">
      <div
        className="usecases-bg-image"
        style={{
          backgroundImage: "url('/images/Home/Industry-based-Use-Cases.jpg')",
        }}
      />

      <div className="usecases-content">
        <div className="usecases-header">
          <h3 className="usecases-title">Industry based Use Cases</h3>
        </div>

        <div className="usecases-slider-wrapper">
          <div className="usecases-slider" ref={sliderRef}>
            {useCases.map((useCase, index) => (
              <div
                key={useCase.id}
                className={`usecase-slide ${
                  index === currentSlide ? "active" : ""
                }`}
                style={{
                  opacity: index === currentSlide ? 1 : 0,
                  transform:
                    index === currentSlide
                      ? "translateX(0)"
                      : "translateX(100%)",
                  transition: "all 2s ease-in-out", // UPDATED TO 2 SECONDS
                  position: index === currentSlide ? "relative" : "absolute",
                }}
              >
                <div className="usecase-slide-content">
                  <div className="usecase-image">
                    <img
                      src={useCase.image}
                      alt={useCase.title}
                      loading="lazy"
                    />
                  </div>
                  <div className="usecase-info animate-bottom">
                    {useCase.tagline && (
                      <p className="usecase-tagline">{useCase.tagline}</p>
                    )}
                    <h2 className="usecase-title">{useCase.title}</h2>
                    <p className="usecase-description">{useCase.description}</p>
                    <a href={useCase.link} className="btn-usecase">
                      View More <i className="ri-arrow-right-long-line"></i>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bottom-arrow">
            <a
              href="#our-services-section"
              className="arrow-link"
              aria-label="Scroll to services"
            >
              <img
                src="/images/Home/bottom_array.png"
                alt="Scroll down"
                loading="lazy"
              />
            </a>
          </div>
        </div>
      </div>

      <div className="section-bottom-coverage">
        <img
          src="/images/Home/bottom_black_02-1.png"
          alt="wave"
          loading="lazy"
        />
      </div>
    </section>
  );
};

export default UseCasesSlider;
