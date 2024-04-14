// src/components/SimulatorPopup.js
import React from 'react';

const SimulatorPopup = ({ onClose }) => {
  return (
    <div className="simulator-popup">
      <div className="simulator-popup-content">
        <h2>Simulator</h2>
        <p>This is the simulator popup.</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default SimulatorPopup;