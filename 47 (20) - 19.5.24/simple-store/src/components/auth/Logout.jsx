import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.removeItem('token');  // Clear the token from localStorage
    navigate('/login');  // Redirect to the login page
  }, [navigate]);

  return null;
};

export default Logout;
