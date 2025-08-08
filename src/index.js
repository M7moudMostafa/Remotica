import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./index.css"
import { init } from '@noriginmedia/norigin-spatial-navigation';

const root = ReactDOM.createRoot(document.getElementById('root'));

init({
  debug: true,
  // visualDebug: true
})

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
