import sliding from "../assets/sliding.jpeg";
import door from "../assets/door.jpeg";
import boom from "../assets/boom.jpeg";
import pvc from "../assets/pvc.jpeg";

function Services() {
  return (
    <section className="services">
      <p className="section-label">OUR SERVICES</p>
      <h2>Products & Services</h2>

      <div className="services-grid">
        
        <div className="service-card">
          <h3>Sliding Door</h3>
          <img src={sliding} alt="Automation Systems" />
          <p>An automatic sliding door is a sensor-based door that opens and closes automatically along a horizontal track, providing convenience,
             safety, and a modern look.
          </p>
         
        </div>

        <div className="service-card">
          <h3>Automatic Door</h3>
          <img src={door} alt="Automatic Door" />
          <p>
            An automatic door opens and closes automatically using sensors.
            It detects movement or presence and operates smoothly.
          </p>
        </div>

        <div className="service-card">
          <h3>Boom Barrier</h3>
          <img src={boom} alt="Custom Installations" />
          <p>
            A Boom barrier with RFID is an automated vehicle access control system that uses
            RFID tags to allow authorized vehicles to enter and exit seamlessly without manual intervention.
          </p>
         
        </div>

        <div className="service-card">
          <h3>PVC Curtain</h3>
          <img src={pvc} alt="After Sales Support" />
          <p>
            PVC curtains are flexible transparent strip barriers used in industrial and commercial spaces to 
            control temperature, save energy, and block dust and insects while allowing easy access.
          </p>
         
        </div>

      </div>
    </section>
  );
}

export default Services;