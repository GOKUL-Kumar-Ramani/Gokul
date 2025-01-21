import React from 'react';
import './Hero.css'; // Assuming you are using a separate CSS file for styling

const Hero = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-content">
        <div className="hero-text">
          <h1>Hi, I'm <span className="highlight">Gokul k</span></h1>
          <p>
            I am a Software Developer with 6+ years of experience,
          </p>
          <p>
            Experience on Web, Android, iOS, and Linux platforms, with a passion for enhancing user experiences.
          </p>
        </div>
        <div className="hero-image">
          <img src="your-image-url.jpg" alt="Your Image" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
