import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/App';
import TitleBar from './title-bar/TitleBar'
import AboutUs from './about-us/AboutUs'
import reportWebVitals from './reportWebVitals';
// import { render } from '@testing-library/react';

ReactDOM.render(
  <React.StrictMode>
    <TitleBar/>
    <App/>
    <AboutUs/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
