import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <div className="contact-info">
          <h2>Let's Connect</h2>
          <p>Have a question or want to work together? Feel free to reach out!</p>
          
          <div className="social-links">
            <a 
              href="https://wa.me/+916369830692" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link whatsapp"
            >
              <i className="fab fa-whatsapp"></i>
              <span>WhatsApp</span>
            </a>
            
            <a 
              href="https://instagram.com/YOUR_HANDLE" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link instagram"
            >
              <i className="fab fa-instagram"></i>
              <span>Instagram</span>
            </a>
            
            <a 
              href="https://facebook.com/YOUR_PROFILE" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link facebook"
            >
              <i className="fab fa-facebook"></i>
              <span>Facebook</span>
            </a>
            
            <a 
              href="mailto:gokulhemak@gmail.com" 
              className="social-link email"
            >
              <i className="fas fa-envelope"></i>
              <span>Email</span>
            </a>
          </div>
        </div>

        <div className="contact-form">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
              ></textarea>
            </div>

            <button type="submit" className="submit-btn">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;