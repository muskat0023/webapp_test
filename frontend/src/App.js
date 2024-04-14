// frontend/src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import SimulatorSelectPage from './pages/SimulatorSelectPage';
import SimulatorPage from './pages/SimulatorPage';
import AuthService from './services/AuthService';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/simulators" element={<SimulatorSelectPage />} />
          <Route path="/simulator/:id" element={<SimulatorPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
