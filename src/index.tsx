import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

// Get the element with the ID 'root'
const container = document.getElementById('root');

// Check if the container is not null
if (container !== null) {
  const root = createRoot(container); // Create a root only if container is not null
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  // Handle the error if the container is null
  console.error('Failed to find the root element');
}
