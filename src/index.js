import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter as Router,
} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router basename="/Problem_Cracker">
      <App />
    </Router>
  </React.StrictMode>
);
// basename="/PATH_OF_GITHUB"

reportWebVitals();
