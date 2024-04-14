// src/components/LogoutButton.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import AuthService from '../services/AuthService';

const LogoutButton = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    AuthService.logout();
    navigate('/');
  };

  return (
    <button onClick={handleLogout}>Logout</button>
  );
};

export default LogoutButton;