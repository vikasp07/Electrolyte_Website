import React from 'react';
import './Vendors.css';

const vendorData = [
  {
    name: 'Atomberg',
    category: 'Smart Fans, Home Appliances',
    logo: '/images/Vendors/atomberg_logo.png',
    services: [
      'Installation, demo',
      'Warranty repair',
      'L4 PCB repair',
      'Field service',
      'Call handling',
    ],
  },
  {
    name: 'Bajaj Electricals',
    category: 'Induction & Infrared Cooktops',
    logo: '/images/Vendors/bajaj_electricals_logo.png',
    services: [
      'Main PCB repair',
      'Display PCB repair',
      'Refurbishment',
      'Product-level diagnostics',
    ],
  },
  {
    name: 'Xtreme Media',
    category: 'LED Video Walls',
    logo: '/images/Vendors/Xtreme_Media_Logo.jpg',
    services: [
      'LED module repair',
      'Receiving card repair',
      'Outdoor/indoor LED servicing',
    ],
  },
  {
    name: 'Carnot Technologies',
    category: 'Automotive Telematics PCBs',
    logo: '/images/Vendors/carnot_Logo.jpg',
    services: [
      'L1/L2 PCB repair',
      'Telematics diagnostics',
    ],
  },
  {
    name: 'Anchor by Panasonic',
    category: 'Electrical Switches, Wiring Devices',
    logo: '/images/Vendors/Anchor_by_Panasonic_logo.png',
    services: [
      'Consumer electronics service support',
      'Installation',
      'Repair',
      'Technical assistance',
    ],
  },
  {
    name: 'Symphony',
    category: 'Air Coolers, Cooling Appliances',
    logo: '/images/Vendors/Symphony_logo.png',
    services: [
      'Product servicing',
      'Maintenance',
      'Repair / refurbishment',
      'PCB-level diagnostics',
    ],
  },
  {
    name: 'Kent Mineral RO',
    category: 'Water Purifiers',
    logo: '/images/Vendors/Kent_logo.png',
    services: [
      'Installation',
      'Repair services',
      'PCB diagnostics',
      'Product screening & refurbishment',
    ],
  },
  {
    name: 'AO Smith',
    category: 'Water Heaters, Purifiers',
    logo: '/images/Vendors/AO_Smith_logo.png',
    services: [
      'Home appliance repair',
      'Component-level PCB servicing',
      'Maintenance support',
    ],
  },
  {
    name: 'Usha',
    category: 'Fans, Appliances',
    logo: '/images/Vendors/USHA_Logo.jpg',
    services: [
      'Home appliance service',
      'PCB-level repair',
      'Installation and after-sales support',
    ],
  },
];

const Vendors = () => {
  return (
    <main id="vendors-main" className="site-main vendors-page">
      <article className="vendors-page-content">
        <div className="entry-content">
          <div className="entry-content-inner">
            <section className="vendors-hero">
              <div className="vendors-hero-inner">
                <h1 className="vendors-title">Vendors</h1>
                <p className="vendors-subtitle">Trusted partners and suppliers we work with.</p>
              </div>
            </section>

            <section className="vendors-list" id="vendors-list">
              <h2>Our Vendors</h2>

              <div className="vendors-grid">
                {vendorData.map((v, i) => (
                  <article key={v.name} className={`vendor-card oregon-box animate-in`} style={{animationDelay: `${i * 120}ms`}}>
                    <div className="vendor-card-inner">
                      {/* Flip container */}
                      <div className="flip-card-container" tabIndex={0} aria-label={`Vendor ${v.name}`}>
                        <div className="flip-card">
                          <div className="card-front">
                            <figure className="img-bg">
                              {v.logo ? (
                                <img src={v.logo} alt={`${v.name} logo`} />
                              ) : (
                                <img src="/images/Vendors/placeholder.png" alt={v.name} />
                              )}
                              <figcaption className="card-caption">{v.name}</figcaption>
                            </figure>
                          </div>

                          <div className="card-back">
                            <div className="card-back-content">
                              <ul>
                                {v.services.map((s, idx) => (
                                  <li key={idx}>{s}</li>
                                ))}
                              </ul>
                              <div className="vendor-cta">
                                <a className="btn-link btn-style701" href={`#${v.name.toLowerCase().replace(/\s+/g,'-')}`}><span>Contact / Details</span></a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          </div>
        </div>
      </article>
    </main>
  );
};

export default Vendors;
