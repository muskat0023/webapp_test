// src/components/Footer.js
import React from 'react';
import './Footer.css';
import companyLogo from '../assets/company-logo.ico';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <p>&copy; 2024 Company Name. All rights reserved.</p>
      </div>
      <div className="footer-right">
        <img src={companyLogo} alt="Company Logo" className="company-logo" />
      </div>
    </footer>
  );
};

export default Footer;