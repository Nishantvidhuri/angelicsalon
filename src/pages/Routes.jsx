import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Location from './Location';

function AppRoutes() { // Rename to avoid conflict with React Router's Routes
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/location" element={<Location />} />
    </Routes>
  );
}

export default AppRoutes;
