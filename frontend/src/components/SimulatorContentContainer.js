// src/components/SimulatorContentContainer.js
import React from 'react';

const SimulatorContentContainer = ({ isSimulated, description, report }) => {
  return (
    <div className="sim-content-container">
      {isSimulated ? (
        <div className="sim-report">{report}</div>
      ) : (
        <div className="sim-description">{description}</div>
      )}
    </div>
  );
};

export default SimulatorContentContainer;