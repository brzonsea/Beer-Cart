import React from 'react';
import { RotateLoader } from 'react-spinners';
import './LoadingSpinner.css';

const LoadingSpinner = () => (
  <div className="loading-spinner">
    <RotateLoader
      color="#3369e8"
      loading
    />
  </div>
);

export default LoadingSpinner;
