// src/components/ContentContainer.js
import React from 'react';
import SimulatorButton from './SimulatorButton';

const ContentContainer = () => {
  const simulators = [
    { id: 1, name: 'Simulator 1' },
    { id: 2, name: 'Simulator 2' },
    { id: 3, name: 'Simulator 3' },
    { id: 4, name: 'Simulator 4' },
    { id: 5, name: 'Simulator 5' },
  ];

  const handleSimulatorButtonClick = (simulator) => {
    const width = 800;
    const height = 600;
    const left = window.screen.width / 2 - width / 2;
    const top = window.screen.height / 2 - height / 2;

    const features = `width=${width},height=${height},left=${left},top=${top}`;
    window.open(`/simulator/${simulator.id}`, '_blank', features);

    const handleMessage = (event) => {
      if (event.data.type === 'SIMULATOR_LOADED' && event.data.id === simulator.id) {
        console.log(`Simulator ${simulator.id} loaded`);
        // 필요한 경우 추가 작업 수행
      }
    };
      
  };

  return (
    <div className="content-container">
      <h2>Favorite</h2>
      <hr />
      <div className="simulator-buttons">
        {simulators.map((simulator) => (
          <SimulatorButton
            key={simulator.id}
            simulator={simulator}
            onClick={() => handleSimulatorButtonClick(simulator)}
          />
        ))}
      </div>
      <hr />
      {/* 빈 공간 */}
    </div>
  );
};

export default ContentContainer;