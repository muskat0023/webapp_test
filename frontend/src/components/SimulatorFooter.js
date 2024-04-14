// src/components/SimulatorFooter.js
import React from 'react';
import './SimulatorFooter.css';
import companyLogo from '../assets/company-logo.ico';

const SimulatorFooter = () => {
  return (
    <footer className="simulator-footer">
      <div className="simulator-footer-left">
        <p>&copy; 2024 Company Name. All rights reserved.</p>
      </div>
      <div className="simulator-footer-right">
        <img src={companyLogo} alt="Company Logo" className="company-logo" />
      </div>
    </footer>
  );
};

export default SimulatorFooter;