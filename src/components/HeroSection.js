import React from 'react';
import './HeroSection.css'; // Import your CSS file (if needed)

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <h1 className="hero-title">Hire Your Next Candidate On The Career Company</h1>
            <a href="/contact" className="btn btn-dark">Discover More</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
