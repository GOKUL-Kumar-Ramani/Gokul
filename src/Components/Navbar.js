import React, { useState } from 'react';
import { Link } from 'react-scroll';
import './Navbar.css'; // Import the CSS file

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to track menu visibility

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle menu state
  };

  const handleDownload = () => {
    // Replace 'your-resume.pdf' with your actual resume file name
    const resumeUrl = '/resume.pdf';
    
    // Create a temporary link element
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'YourName_Resume.pdf'; // Replace with your name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <nav className={`navbar ${isMenuOpen ? 'active' : ''}`}>
      <ul>
        <li>
          <Link to="hero" smooth={true} duration={500}>
            Intro
          </Link>
        </li>
        <li>
          <Link to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li>
          <Link to="projects" smooth={true} duration={500}>
            Projects
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
        <li className="download">
          <Link onClick={handleDownload} smooth={true} duration={500}>
            <img src="path-to-your-image.png" className="download-icon" alt="Download Icon" />
            Download
          </Link>
        </li>
      </ul>
      <div className="hamburger" onClick={toggleMenu}>
        {isMenuOpen ? '×' : '☰'} {/* Change to '×' when menu is open */}
      </div>
    </nav>
  );
};

export default Navbar;
