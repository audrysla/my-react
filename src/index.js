import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import './build-css/index.css';
import './build-css/common.css';
import './build-css/mixin.css';
import Routing from './js/Routing';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Routing/>
  </React.StrictMode>
); 

reportWebVitals();
