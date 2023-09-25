import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import './build-css/index.css';
import Header from './js/header';
import Contents from './js/Contents';
import Footer from './js/Footer';

const header = ReactDOM.createRoot(document.getElementById('header'));
const contents = ReactDOM.createRoot(document.getElementById('contents'));
const footer = ReactDOM.createRoot(document.querySelector('footer'));

header.render(
  <React.StrictMode>
    <Header />
  </React.StrictMode>
);

contents.render(
  <React.StrictMode>
    <Contents />
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
