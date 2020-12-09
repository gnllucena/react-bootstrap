import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom';
import { RecoilRoot, MutableSnapshot } from 'recoil';
import { Layout } from 'antd';
import { Router } from '@reach/router';
import HttpErrorHandling from './components/behavior/HttpErrorHandling/HttpErrorHandling';
import StateManagement from './components/behavior/StateManagement/StateManagement';
import ErrorBoundary from './components/behavior/ErrorBoundary/ErrorBoundary';
import Header from './components/ui/Header/Header';
import User from './domain/User';
import { LoginPageState } from './store/LoginPageState';

import './assets/styles/App.scss';
import ScrollToTop from './components/behavior/ScrollToTop/ScrollToTop';
import ProtectedRoute from './components/behavior/ProtectedRoute/ProtectedRoute';
import StockPage from './containers/Stocks/Stock/StockPage';

const HomePage = lazy(() => import('./containers/Home/HomePage'));
const CreateNewAccountPage = lazy(() => import('./containers/Authentication/CreateNewAccount/CreateNewAccountPage'));
const ForgotPasswordPage = lazy(() => import('./containers/Authentication/ForgotPassword/ForgotPasswordPage'));
const ResetPasswordPage = lazy(() => import('./containers/Authentication/ResetPassword/ResetPasswordPage'));
const LoginPage = lazy(() => import('./containers/Authentication/Login/LoginPage'));
const StocksSearchPage = lazy(() => import('./containers/Stocks/Search/StocksSearchPage'));

const initialize = (snapshot: MutableSnapshot): void => {
  const store = localStorage.getItem('user');

  if (store !== null) {
    const user = JSON.parse(store) as User;

    snapshot.set(LoginPageState, user);
  }
};

ReactDOM.render(
  // <React.StrictMode>
    <RecoilRoot initializeState={initialize}>
      <ErrorBoundary>
        <HttpErrorHandling />
        <StateManagement />
        <Layout>
          <Header />
          <Suspense fallback={<div>splash screen</div>}>
            <Router primary={false}>
              <ScrollToTop path="/">
                <HomePage default />
                <HomePage path="/" />
                <LoginPage path="login" />
                <CreateNewAccountPage path="create-new-account" />
                <ForgotPasswordPage path="forgot-password" />
                <ResetPasswordPage path="reset-password" />
                {/* <StocksSearchPage path="stocks" />
                <StockPage path="/stocks/:banana" /> */}
                <ProtectedRoute path="stocks" for={StocksSearchPage} />
                <ProtectedRoute path="stocks/:id" for={StockPage} />
              </ScrollToTop>
            </Router>
          </Suspense>
        </Layout>
      </ErrorBoundary>
    </RecoilRoot>
  // </React.StrictMode>,
  ,
  document.getElementById('root')
);
