
import React from "react";

const About = () => {
  return (
    <section className="about">
      <div className="about-container">

        {/* LEFT SIDE */}
        <div className="about-left">
          <h2>About Ayansh Automation & Hygiene System</h2>

          <p>
            Ayansh Automation & Hygiene System is a trusted provider of advanced 
            automation and hygiene solutions across Mumbai, Daman, Surat, 
            Ahmedabad, and nearby regions. We specialize in installation, repair, 
            and AMC services for automatic sliding gates, sliding doors, swing gates, 
            boom barriers, roll-up doors, air curtains, hand dryers, blinds, and 
            complete home, society, and industrial automation systems.
          </p>

          <p>
            We are committed to delivering high-quality products with precision 
            installation, fast service, and competitive pricing. Our experienced 
            team provides customized solutions based on customer requirements, 
            along with free site visits and professional consultation.
          </p>
        </div>

        {/* RIGHT SIDE - OUR WORK */}
        <div className="about-right">
          <div className="work-card">
            <h3>Our Work</h3>

            <ul className="work-list">
              <li>Automatic Sliding Door</li>
              <li>Automatic Sliding/Swing Gate</li>
              <li>Boom Barrier with RFID System</li>
              <li>Roll-Up Door</li>
              <li>Sectional Door</li>
              <li>Crash Rated Bollard</li>
              <li>Dock Leveler</li>
              <li>Air Curtain / PVC Curtain</li>
              <li>Hand Dryer</li>
              <li>Insect Killer</li>
            </ul>
          </div>
        </div>

      </div>

      {/* CONTACT SECTION */}
      <div className="contact-section">
        <h3>Contact Us</h3>

        <div className="contact-buttons">
          {/* Call Button */}
          <a href="tel:+919136064696" className="call-btn">
            <i className="fas fa-phone"></i> Call Now
          </a>

          {/* WhatsApp Button */}
          <a
            href="https://wa.me/919136064696"
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-btn"
          >
            <i className="fab fa-whatsapp"></i> WhatsApp
          </a>
        </div>

        <p className="contact-number">
          Mobile: +91 9136064696 / +91 8655291742
        </p>
      </div>
    </section>
  );
};

export default About;