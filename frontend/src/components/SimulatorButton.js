// src/components/SimulatorButton.js
import React from 'react';

const SimulatorButton = ({ simulator, onClick }) => {
  return (
    <button className="simulator-button" onClick={onClick}>
      {simulator.name}
    </button>
  );
};

export default SimulatorButton;