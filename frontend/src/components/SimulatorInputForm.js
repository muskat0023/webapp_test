// frontend/src/components/SimulatorInputForm.js
import React from "react";
import "./SimulatorInputForm.css";

const SimulatorInputForm = ({ inputs, onChange }) => {
  const handleInputChange = (index, value) => {
    // 소수점 둘째 자리까지만 허용하는 정규식
    const regex = /^\d+(\.\d{0,2})?$/;

    if (regex.test(value)) {
      onChange(index, value);
    }
  };

  return (
    <div className="simulator-input-form">
      {inputs.map((input, index) => (
        <div className="input-row" key={index}>
          <div className="input-label">
            <span className="input-name">{input.name}</span>
            <span className="input-range">[{input.min}~{input.max}]</span>
          </div>
          <div className="input-field">
            <input
              type="number"
              step="0.01"
              value={input.value}
              onChange={(e) => handleInputChange(index, e.target.value)}
            />
            {input.error && (
              <div className="error-balloon">
                <span className="error-message">{input.error}</span>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SimulatorInputForm;