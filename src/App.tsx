import React from 'react';
import { Layout, Menu } from 'antd';
import { Router } from "@reach/router"
import { HomePage } from './routes/Home/HomePage';
import { StockPage } from './routes/Stock/StockPage';
import { MePage } from './routes/Me/MePage';
import { LoginPage } from './routes/Login/LoginPage';
import { ErrorBoundary } from './components/behavior/ErrorBoundary/ErrorBoundary';
import { ProtectedRoute } from './components/behavior/ProtectedRoute/ProtectedRoute';
import { HttpErrorHandling } from './components/behavior/HttpErrorHandling/HttpErrorHandling';
import { Header } from './components/ui/Header/Header';

import './App.scss';

function App() {  
  return (
    // SUSPENSE + RECOILJS
    <ErrorBoundary>
      <HttpErrorHandling></HttpErrorHandling>
      <Layout>
        <Header></Header>

        <Layout.Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
          <Router>
            <HomePage default />
            <HomePage path="/" />
            <StockPage path="stock" />
            <LoginPage path="login" />
            <ProtectedRoute path="me" for={MePage} />
          </Router>
        </Layout.Content>
        <Layout.Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Layout.Footer>
      </Layout>
    </ErrorBoundary>
  );
}

export default App;