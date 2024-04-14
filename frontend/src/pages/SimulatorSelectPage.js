// src/pages/SimulatorSelectPage.js
import React from 'react';
import './SimulatorSelectPage.css';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import ContentContainer from '../components/ContentContainer';
import Footer from '../components/Footer';

const SimulatorSelectPage = () => {
  return (
    <div className="simulator-select-page">
      <Header />
      <div className="main-content">
        <Sidebar />
        <ContentContainer />
      </div>
      <Footer />
    </div>
  );
};

export default SimulatorSelectPage;