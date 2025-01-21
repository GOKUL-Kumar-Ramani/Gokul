import React from 'react';
import './Skills.css'; // Import the CSS file

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <h2>My Skills</h2>
      <div className="skills-container">
        <div className="skill-wrapper">
          <div className="skill-item">
            <img src="path-to-your-image/react-logo.png" alt="React" />
          </div>
          <div className="skill-item">
            <img src="path-to-your-image/js-logo.png" alt="JavaScript" />
          </div>
          <div className="skill-item">
            <img src="path-to-your-image/html-logo.png" alt="HTML" />
          </div>
          <div className="skill-item">
            <img src="path-to-your-image/css-logo.png" alt="CSS" />
          </div>
          {/* Add more skill items as needed */}
        </div>
      </div>
    </section>
  );
};

export default Skills;
