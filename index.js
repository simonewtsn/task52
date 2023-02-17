import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
//importing style, react and reactDOM library, and app component

//creating root element, rendering app component within root element
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

