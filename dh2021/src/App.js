import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from "react";
import Router from "./components/Router.js";
import { BrowserRouter } from 'react-router-dom';

function App() {
  const [response, setResponse] = useState("");
  
  useEffect(() => {
    fetch("http://localhost:9000/testAPI")
      .then(res => res.text())
      .then(res => setResponse(res))
      .catch(err => err);
  }, [])

  return (
    <BrowserRouter>
      <Router></Router>
    </BrowserRouter>
    
  );
  /*return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p className="App-intro">{response}</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );*/
}

export default App;
