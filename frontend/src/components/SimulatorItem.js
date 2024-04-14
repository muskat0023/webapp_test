import React from 'react';

const SimulatorItem = ({ simulator, onClick }) => {
  return (
    <div onClick={() => onClick(simulator.id)}>
      <h3>{simulator.name}</h3>
    </div>
  );
};

export default SimulatorItem;