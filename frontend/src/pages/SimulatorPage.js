// src/pages/SimulatorPage.js
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import SimulatorHeader from "../components/SimulatorHeader";
import SimulatorInputForm from "../components/SimulatorInputForm";
import SimulatorContentContainer from "../components/SimulatorContentContainer";
import SimulatorFooter from "../components/SimulatorFooter";
import "./SimulatorPage.css";

const SimulatorPage = () => {
  const { id } = useParams();
  const [modelInfo, setModelInfo] = useState(null);
  const [inputs, setInputs] = useState([]);
  const [isSimulated, setIsSimulated] = useState(false);
  const [simulationResult, setSimulationResult] = useState(null);

  useEffect(() => {
    fetchModelInfo();
  }, []);

  const fetchModelInfo = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/api/model-info`);
      const modelData = response.data;
      console.log("Model Data:", modelData);
      setModelInfo(modelData);
      initializeInputs(modelData.inputs);
    } catch (error) {
      console.error("Error fetching model info:", error);
    }
  };

  const initializeInputs = (inputParams) => {
    const initialInputs = inputParams.map((param) => ({
      ...param,
      value: "",
      error: "",
    }));
    console.log("Initialized Inputs:", initialInputs);
    setInputs(initialInputs);
  };

  const handleInputChange = (index, value) => {
    const newInputs = [...inputs];
    newInputs[index].value = value;
    console.log("Updated Inputs:", newInputs);
    setInputs(newInputs);
  };

  const validateInputs = () => {
    const regex = /^\d+(\.\d+)?$/;
    const updatedInputs = inputs.map((input) => {
      if (input.value === "") {
        return { ...input, error: "값을 입력해주세요." };
      }
      if (!regex.test(input.value)) {
        return { ...input, error: "유효하지 않은 입력입니다." };
      }
      const numericValue = parseFloat(input.value);
      if (
        isNaN(numericValue) ||
        numericValue < input.min ||
        numericValue > input.max
      ) {
        return {
          ...input,
          error: `값은 ${input.min}에서 ${input.max} 사이여야 합니다.`,
        };
      }
      return { ...input, error: "" };
    });
    console.log("Validated Inputs:", updatedInputs);
    setInputs(updatedInputs);
    return updatedInputs.every((input) => input.error === "");
  };

  const handleSimulate = async () => {
    if (validateInputs()) {
      try {
        const inputData = inputs.map((input) => parseFloat(input.value));
        console.log("Input Data:", inputData);
        const response = await axios.post("http://localhost:5000/api/predict", {
          data: inputData,
        });
        const predictions = response.data.predictions[0];
        console.log("Predictions:", predictions);
        const formattedResult = modelInfo.outputs
          .map(
            (output, index) =>
              `${output.name}: ${predictions[index].toFixed(2)}`
          )
          .join(", ");
        console.log("Formatted Result:", formattedResult);
        setSimulationResult(formattedResult);
        setIsSimulated(true);
      } catch (error) {
        console.error("Error simulating:", error);
      }
    }
  };

  if (!modelInfo) {
    return <div>Loading...</div>;
  }

  return (
    <div className="simulator-page">
      <SimulatorHeader title="Simulator" onSimulate={handleSimulate} />
      <div className="simulator-content">
        <SimulatorInputForm inputs={inputs} onChange={handleInputChange} />
        <SimulatorContentContainer
          isSimulated={isSimulated}
          description="Input parameter description"
          report={simulationResult}
        />
      </div>
      <SimulatorFooter />
    </div>
  );
};

export default SimulatorPage;