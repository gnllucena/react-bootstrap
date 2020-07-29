import React from 'react';
import { Router } from "@reach/router"
import { HomePage } from './routes/Home/HomePage';
import { StockPage } from './routes/Stock/StockPage';

import './App.scss';
import ErrorBoundary from './components/behavior/ErrorBoundary/ErrorBoundary';

function App() {
  return (
    <ErrorBoundary>
      <div className="App">
        <Router>
          <HomePage default />
          <HomePage path="/" />
          <StockPage path="stock" />
        </Router>
      </div>
    </ErrorBoundary>
  );
}

export default App;
