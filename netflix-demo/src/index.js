import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './movies/index'
// import App from './movies/register/Register'
// import App from './movies/login/Login';
// import App from './movies/pages/home/index';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
