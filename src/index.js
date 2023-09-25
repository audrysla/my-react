import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import './build-css/index.css';
// import App from './App';
import Tab from './js/Tab';
import Header from './js/header';
import Footer from './js/Footer';

const header = ReactDOM.createRoot(document.getElementById('header'));
const root = ReactDOM.createRoot(document.getElementById('root'));
const footer = ReactDOM.createRoot(document.querySelector('footer'));

header.render(
  <React.StrictMode>
    <Header />
  </React.StrictMode>
);

root.render(
  <React.StrictMode>
    <Tab />
  </React.StrictMode>
);

footer.render(
  <React.StrictMode>
    <Footer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
