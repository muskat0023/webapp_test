import React from 'react';
import { useNavigate } from 'react-router-dom';
import SimulatorItem from './SimulatorItem';

const SimulatorList = () => {
  const navigate = useNavigate();

  const simulators = [
    { id: 10001, name: 'Forming Simulator' },
    { id: 10002, name: 'Sealing Simulator' },
    { id: 10003, name: 'CBD Simulator' },
    { id: 10004, name: 'CCR Simulator' },
    { id: 10005, name: 'DSF Simulator' },
  ];

  const handleSimulatorClick = (simulatorId) => {
    navigate(`/simulator/${simulatorId}`);
  };

  return (
    <div>
      <h2>Select a Simulator</h2>
      {simulators.map((simulator) => (
        <SimulatorItem
          key={simulator.id}
          simulator={simulator}
          onClick={handleSimulatorClick}
        />
      ))}
    </div>
  );
};

export default SimulatorList;