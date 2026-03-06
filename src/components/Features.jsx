function Features() {
  return (
    <section className="features">
      <p className="section-label">WHY US</p>
      <h2>Features & Benefits</h2>

      <div className="features-grid">
        <div className="feature-card">
          <div className="feature-icon">🏅</div>
          <h3>High-Quality Solutions</h3>
          <p>
            We use only the best materials and components, ensuring durability
            and top performance.
          </p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">⚙️</div>
          <h3>Custom & Scalable Systems</h3>
          <p>
            Our solutions adapt to your needs — from small businesses to large
            industrial operations.
          </p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">⚡</div>
          <h3>Easy Installation & Support</h3>
          <p>
            Quick setup with minimal disruption, backed by expert technical
            support whenever you need it.
          </p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">₹</div>
          <h3>Affordable Pricing</h3>
          <p>
            Competitive pricing without compromising on quality. Maximum value
            for your investment.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Features;