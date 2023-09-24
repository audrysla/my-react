import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import Tabs from './m/Tabs';
import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
const tabs = ReactDOM.createRoot(document.getElementById('Tabs'));

// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

tabs.render(
  <React.StrictMode>
    <Tabs />
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
