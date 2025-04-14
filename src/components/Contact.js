import React from 'react';
import 'react-social-icons/github'
import 'react-social-icons/linkedin'
import { SocialIcon } from 'react-social-icons'
import '../styles/components/Contact.css';

const Contact = () => {
  return (
    <footer className="footer-container">
      <div className="contact-container">
        <h2 className="contact-title">Contact</h2>
        <div className="contact-info">
          <span className="contact-icon">📞</span>
          <span className="contact-text">+91-9163689800</span>
        </div>
        <div className="contact-info">
          <span className="contact-icon">📧</span>
          <span className="contact-text">smtp.connectmak@outlook.com</span>
        </div>
        <div className="contact-info">
          <span className="contact-icon">📍</span>
          <span className="contact-text">Bengaluru, KA, India</span>
        </div>
        <div className="social-icon-container">
          <SocialIcon target="_blank" url="https://github.com/smakthe"/>
          <SocialIcon target="_blank" url="https://www.linkedin.com/in/scmakra99"/>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
