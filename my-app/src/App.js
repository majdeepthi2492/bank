import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="bank">
          <div className="sub">
            <div className="sub1"><span className="sub3">Bank</span>details</div>
            <p className="sub2">Division Of SMBB MAIN BANK</p>
          </div>
          <div className="sub4">Products</div>
          <div className="sub4">About Us</div>
          <div className="sub4">Career</div>
          <div className="sub4">FAQs</div>
          <div  className="sub4">Blog</div>
          <button className="sub5">OPEN SAVINGS</button>
          <button className="sub6">LOGIN</button>
          </div>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
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
  );
}

export default App;
