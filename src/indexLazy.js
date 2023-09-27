import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import './build-css/index.css';
import './build-css/common.css';
// import Routing from './js/Routing';
// import Footer from './js/Footer';

const Routing = lazy(() => import('./js/Routing'));
const Footer = lazy(() => import('./js/Footer'));

const root = ReactDOM.createRoot(document.getElementById('root'));

const renderLoader = () => <div class="loader"></div>;

root.render(
  <React.StrictMode>
    <Suspense fallback={renderLoader()}>
      <Routing/>
      <Footer/>
    </Suspense>
  </React.StrictMode>
); 

reportWebVitals();
