import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBTZRZ1z8WQno5-jYkW806SjaWSUiu-QY4",
  authDomain: "noctua-b4f09.firebaseapp.com",
  databaseURL: "https://noctua-b4f09-default-rtdb.firebaseio.com",
  projectId: "noctua-b4f09",
  storageBucket: "noctua-b4f09.appspot.com",
  messagingSenderId: "762629023753",
  appId: "1:762629023753:web:0c8232697352d8f20130d8",
  measurementId: "G-F691Z2G3B5"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
