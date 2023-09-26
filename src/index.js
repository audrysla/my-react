import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import './build-css/index.css';
import Routing from './js/Routing';
import Header from './js/header';
import Footer from './js/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    
    <Routing/>
    <Footer/>
  </React.StrictMode>
);

reportWebVitals();
