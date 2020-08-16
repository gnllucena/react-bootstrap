import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom';
import { Layout, Spin } from 'antd';
import { Router } from "@reach/router"
import { ErrorBoundary } from './components/behavior/ErrorBoundary/ErrorBoundary';
import { ProtectedRoute } from './components/behavior/ProtectedRoute/ProtectedRoute';
import { HttpErrorHandling } from './components/behavior/HttpErrorHandling/HttpErrorHandling';
import { Header } from './components/ui/Header/Header';

import './assets/styles/App.scss';

const HomePage = lazy(() => import('./routes/Home/HomePage'));
const LoginPage = lazy(() => import('./routes/Login/LoginPage'));
const StockPage = lazy(() => import('./routes/Stock/StockPage'));
const MePage = lazy(() => import('./routes/Me/MePage'));

ReactDOM.render(
  // <React.StrictMode>
  <ErrorBoundary>
    <HttpErrorHandling></HttpErrorHandling>
    <Layout>
      <Header></Header>

      <Suspense fallback={<Spin size="large" />}>
        <Router>
          <HomePage default />
          <HomePage path="/" />
          <StockPage path="stock" />
          <LoginPage path="login" />
          <ProtectedRoute path="me" for={MePage} />
        </Router>
      </Suspense>
    </Layout>
  </ErrorBoundary>
  // </React.StrictMode>
  ,
  document.getElementById('root')
);