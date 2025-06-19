import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import CloudResources from '../components/CloudResources/CloudResources';
import Compute from '../components/CloudResources/CloudResourcesCompute';
import Storage from '../components/CloudResources/Storage';
import Networks from '../components/CloudResources/Networks';
import Databases from '../components/CloudResources/Databases';

const CloudResourcesRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="compute" />} />
      <Route path="compute" element={<Compute />} />
      <Route path="storage" element={<Storage />} />
      <Route path="networks" element={<Networks />} />
      <Route path="databases" element={<Databases />} />
    </Routes>
  );
};

export default CloudResourcesRoutes;
