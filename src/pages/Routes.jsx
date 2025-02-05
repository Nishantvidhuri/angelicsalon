import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Location from './Location';
import Services from './Services';

function AppRoutes() { // Rename to avoid conflict with React Router's Routes
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/location" element={<Location />} />
      <Route path="/services" element={<Services />} />

    </Routes>
  );
}

export default AppRoutes;
