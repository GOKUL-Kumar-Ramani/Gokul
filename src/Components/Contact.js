import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="section">
      <h2>Contact</h2>
      <p>If you'd like to get in touch, feel free to drop a message!</p>
      <form>
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Your Email" />
        <textarea placeholder="Your Message"></textarea>
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;
