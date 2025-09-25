import React from "react";
import './Contact.css';

const Contact = () => (
  <section className="contact-page" id="contact">
    <h2>Contact Us</h2>
    <form>
      <input type="text" placeholder="Your Name" required />
      <input type="email" placeholder="Your Email" required />
      <textarea placeholder="Your Message" rows="4" required></textarea>
      <button type="submit">Send Message</button>
    </form>
  </section>
);

export default Contact;
