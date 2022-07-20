import React from "react";
import {createRoot} from 'react-dom/client';
import {StrictMode} from 'react';
import App from "./App.js";

// Importing the Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";

const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
