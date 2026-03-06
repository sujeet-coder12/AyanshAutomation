// import backk from "../assets/backk.mp4";

// function Hero() {
//   return (
//     <section className="hero">
// <<<<<<< HEAD

// =======
      
// >>>>>>> 6244ac3efcc2d9e064dd5a0a8cc63344dc0d1b52
//       {/* Background Video */}
//       <video autoPlay muted loop playsInline className="hero-video">
//         <source src={backk} type="video/mp4" />
//       </video>

//       <div className="hero-content">
//         <span className="badge">Trusted Automation Partner in Mumbai</span>

//         <h1>
//           Smarter Automation.
//           <br />
//           <span>Cleaner Hygiene.</span>
//         </h1>

//         <p>
//           Delivering high-quality automation systems and hygiene solutions
//           that businesses trust for reliability, safety, and performance.
//         </p>

//         <div className="hero-buttons">
// <<<<<<< HEAD
//           <a href="#contact" className="btn-outline">
//             Contact Us
//           </a>
// =======
//           <button className="btn-outline">Contact Us</button>
// >>>>>>> 6244ac3efcc2d9e064dd5a0a8cc63344dc0d1b52
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Hero;

import backk from "../assets/backk.mp4";

function Hero() {
  return (
    <section className="hero">
      
      {/* Background Video */}
      <video autoPlay muted loop playsInline className="hero-video">
        <source src={backk} type="video/mp4" />
      </video>

      <div className="hero-content">
        <span className="badge">Trusted Automation Partner in Mumbai</span>

        <h1>
          Smarter Automation.
          <br />
          <span>Cleaner Hygiene.</span>
        </h1>

        <p>
          Delivering high-quality automation systems and hygiene solutions
          that businesses trust for reliability, safety, and performance.
        </p>

        <div className="hero-buttons">
          <a href="#contact" className="btn-outline">
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;