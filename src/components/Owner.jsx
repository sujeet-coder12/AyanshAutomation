import React from "react";
import dhanraj from "../assets/dhanraj.png"

const Owner = () => {
  return (
    <section className="owner">
      <div className="owner-container">

        {/* Owner Image */}
        {/* <div className="owner-image">
          <img src={dhanraj} alt="Owner" />
        </div> */}

        {/* Owner Details */}
        <div className="owner-details">
          {/* <h2>Owner</h2> */}
          <h3>From Owner Desk</h3>

          <p>
            Founder of <strong>Ayansh Automation & Hygiene System</strong> with over
            <strong>30+ years of industry experience</strong> in automation and hygiene
            solutions. Highly skilled in installation, repair, and maintenance of
            automatic sliding doors, sliding gates, boom barriers, roll-up doors,
            air curtains, and advanced automation systems for homes, residential
            societies, commercial buildings, and industrial facilities.
          </p>

          <p>
            Known for delivering reliable solutions, professional service, and
            long-term customer support. Committed to providing high-quality
            automation systems with precision installation and excellent
            after-sales service across Mumbai and nearby regions.
          </p>

          <p className="owner-exp">
            Experience: <strong>30+ Years</strong>
          </p>

          {/* Contact Buttons */}
          <div className="owner-buttons">

            {/* Call */}
            <a href="tel:+919136064696" className="owner-call">
              <i className="fas fa-phone"></i> Call
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/919136064696"
              target="_blank"
              rel="noopener noreferrer"
              className="owner-whatsapp"
            >
              <i className="fab fa-whatsapp"></i> WhatsApp
            </a>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Owner;