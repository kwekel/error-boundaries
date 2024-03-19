import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ErrorBoundary } from './error.boundary';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ErrorBoundary fallback={<h1>Error at app level</h1>}>
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);
