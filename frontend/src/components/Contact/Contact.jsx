import React, { useState } from 'react';
import './Contact.css';

// contact constants
const COMPANY = {
  name: 'Electrolyte Solutions',
  phonePrimary: '+919892686600',
  phoneSecondary: '+919029352208',
  email: 'contact@electrolytesolin.com',
  whatsapp: '+919029352208',
  website: 'https://www.electrolytesolin.com',
  addressLines: [
    'Unit No. 11, 3rd Floor, B-Wing',
    'Gami Industrial Park, ITC',
    'Industrial Area Pawane, MIDC',
    'Navi Mumbai - 400 710',
  ],
};

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Here you would typically send the data to your backend
      console.log('Form submitted:', formData);
      
      // Simulating API call
      setTimeout(() => {
        setSubmitStatus('success');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          company: '',
          subject: '',
          message: '',
        });
        
        // Reset status after 5 seconds
        setTimeout(() => setSubmitStatus(null), 5000);
        setIsSubmitting(false);
      }, 1000);
    } catch (error) {
      setSubmitStatus('error');
      setIsSubmitting(false);
    }
  };

  const copyToClipboard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      alert('Copied: ' + text);
    } catch (err) {
      alert('Copy failed.');
    }
  };

  const vcardHref = '/contact.vcf';
  const scheduleHref = `mailto:${COMPANY.email}?subject=Schedule%20Meeting&body=Hi%20${COMPANY.name}%2C%0A%0AI%20would%20like%20to%20schedule%20a%20meeting.`;
  const linkedInHref = 'https://www.linkedin.com/company/electrolytesoln';
  const chatHref = `https://wa.me/${COMPANY.whatsapp.replace(/\D/g, '')}`;

  return (
    <main id="contact-main" className="site-main">
      <article className="contact-page-content">
        <div className="entry-content">
          <div className="entry-content-inner">
            {/* Hero Banner Section */}
            <section id="contact_banner_section" className="bt_bb_section contact-hero-banner">
              <div className="contact-hero-bg" />

              <div className="contact-hero-content">
                <div className="contact-hero-container">
                  <div className="contact-hero-main">
                    {/* Separator */}
                    <div className="separator" />

                    {/* Main Title */}
                    <h1 className="contact-hero-title animate-in">
                      Get In Touch
                    </h1>

                    {/* Subtitle */}
                    <h3 className="contact-hero-description animate-in">
                      We're here to help and answer any question you might have. Reach out to us today!
                    </h3>

                    {/* Separator */}
                    <div className="separator" />
                  </div>
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

            {/* Contact Information & Form Section */}
            <section id="contact-content-section" className="bt_bb_section contact-content-section">
              <div className="container">
                <div className="contact-wrapper">
                  {/* Contact Information */}
                  <div className="contact-info">
                    <div className="contact-info-box animate-in">
                      <div className="contact-info-icon">
                        <i className="ri-phone-line"></i>
                      </div>
                      <h3>Phone</h3>
                      <p>
                        <a href={`tel:${COMPANY.phonePrimary}`}>{COMPANY.phonePrimary}</a>
                        &nbsp; <button className="link-btn" onClick={() => copyToClipboard(COMPANY.phonePrimary)}>Copy</button>
                      </p>
                      <p>
                        <a href={`tel:${COMPANY.phoneSecondary}`}>{COMPANY.phoneSecondary}</a>
                        &nbsp; <button className="link-btn" onClick={() => copyToClipboard(COMPANY.phoneSecondary)}>Copy</button>
                      </p>
                    </div>

                    <div className="contact-info-box animate-in">
                      <div className="contact-info-icon">
                        <i className="ri-mail-line"></i>
                      </div>
                      <h3>Email</h3>
                      <p>
                        <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>
                        &nbsp; <button className="link-btn" onClick={() => copyToClipboard(COMPANY.email)}>Copy</button>
                      </p>
                    </div>

                    <div className="contact-info-box animate-in">
                      <div className="contact-info-icon">
                        <i className="ri-map-pin-line"></i>
                      </div>
                      <h3>Address</h3>
                      <p>Unit No. 11, 3rd Floor, B-Wing</p>
                      <p>Gami Industrial Park, ITC</p>
                      <p>Industrial Area Pawane, MIDC</p>
                      <p>Navi Mumbai - 400 710</p>
                    </div>

                    <div className="contact-info-box animate-in">
                      <div className="contact-info-icon">
                        <i className="ri-global-line"></i>
                      </div>
                      <h3>Website</h3>
                      <p>
                        <a href={COMPANY.website} target="_blank" rel="noopener noreferrer">{COMPANY.website.replace(/^https?:\/\//, '')}</a>
                      </p>
                      <p>
                        <a className="vcard-link" href={vcardHref} download>Download vCard</a>
                      </p>
                    </div>

                    <div className="contact-info-box animate-in">
                      <div className="contact-info-icon">
                        <i className="ri-whatsapp-line"></i>
                      </div>
                      <h3>WhatsApp</h3>
                      <p>
                        <a href={chatHref} target="_blank" rel="noopener noreferrer">{COMPANY.whatsapp}</a>
                        &nbsp; <button className="link-btn" onClick={() => window.open(chatHref, '_blank')}>Chat</button>
                      </p>
                      <p>
                        <button className="primary-btn" onClick={() => window.open(scheduleHref)}>Schedule Meeting</button>
                        &nbsp; <a className="social-link" href={linkedInHref} target="_blank" rel="noopener noreferrer"><i className="ri-linkedin-fill"></i> LinkedIn</a>
                      </p>
                    </div>
                  </div>

                  {/* Contact Form */}
                  <div className="contact-form-container animate-in">
                    <h2 className="form-title">Send Us a Message</h2>
                    
                    {submitStatus === 'success' && (
                      <div className="success-message">
                        <i className="ri-check-line"></i>
                        <p>Thank you! Your message has been sent successfully. We'll get back to you soon.</p>
                      </div>
                    )}

                    {submitStatus === 'error' && (
                      <div className="error-message">
                        <i className="ri-close-line"></i>
                        <p>Oops! Something went wrong. Please try again.</p>
                      </div>
                    )}

                    <form onSubmit={handleSubmit} className="contact-form">
                      <div className="form-row">
                        <div className="form-group">
                          <label htmlFor="firstName">First Name</label>
                          <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleInputChange}
                            required
                            placeholder="John"
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="lastName">Last Name</label>
                          <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleInputChange}
                            required
                            placeholder="Doe"
                          />
                        </div>
                      </div>

                      <div className="form-row">
                        <div className="form-group">
                          <label htmlFor="email">Email Address</label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            placeholder="john@example.com"
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="phone">Phone Number</label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            placeholder="+91 XXXXXXXXXX"
                          />
                        </div>
                      </div>

                      <div className="form-group">
                        <label htmlFor="company">Company Name</label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          placeholder="Your Company"
                        />
                      </div>

                      <div className="form-group">
                        <label htmlFor="subject">Subject</label>
                        <input
                          type="text"
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          required
                          placeholder="How can we help?"
                        />
                      </div>

                      <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          required
                          placeholder="Tell us more about your inquiry..."
                          rows="6"
                        ></textarea>
                      </div>

                      <button
                        type="submit"
                        className="submit-btn"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                        <i className={`ri-${isSubmitting ? 'loader-4' : 'send-plane'}-line`}></i>
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </section>

            {/* Map Section */}
            <section id="contact-map-section" className="bt_bb_section contact-map-section">
              <div className="map-container">
                <iframe
                  title="Electrolyte Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.8897267851777!2d73.14269!3d19.04867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7e8f8d8d8d8d9%3A0x8d8d8d8d8d8d8d8d!2sGami%20Industrial%20Park%2C%20Pawane%2C%20Navi%20Mumbai!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="500"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </section>
          </div>
        </div>
      </article>
    </main>
  );
};

export default Contact;
