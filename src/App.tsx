import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Router } from "@reach/router"
import { HomePage } from './routes/home/HomePage';
import { StockPage } from './routes/stock/StockPage';

function App() {
  return (
    <div className="App">
      <Router>
        <HomePage default />
        <HomePage path="/" />
        <StockPage path="stock" />
      </Router>

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />  
      </header>
    </div>
  );
}

export default App;
