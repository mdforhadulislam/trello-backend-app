import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/App';
import Router from './app/Router';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);
