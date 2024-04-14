// src/components/SimulatorHeader.js
import React from 'react';

const SimulatorHeader = ({ title, onSimulate }) => {
  return (
    <div className="sim-header">
      <h2>{title}</h2>
      <button onClick={onSimulate}>Simulate</button>
    </div>
  );
};

export default SimulatorHeader;