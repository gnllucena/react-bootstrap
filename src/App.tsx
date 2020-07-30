import React from 'react';
import { Router } from "@reach/router"
import { HomePage } from './routes/Home/HomePage';
import { StockPage } from './routes/Stock/StockPage';
import { MePage } from './routes/Me/MePage';
import { LoginPage } from './routes/Login/LoginPage';
import { ErrorBoundary } from './components/behavior/ErrorBoundary/ErrorBoundary';
import { ProtectedRoute } from './components/behavior/ProtectedRoute/ProtectedRoute';

import './App.scss';

function App() {
  return (
    <ErrorBoundary>
      <div className="App">
        <Router>
          <HomePage default />
          <HomePage path="/" />
          <StockPage path="stock" />
          <LoginPage path="login" />
          <ProtectedRoute path="me" as={MePage} />
        </Router>
      </div>
    </ErrorBoundary>
  );
}

export default App;
