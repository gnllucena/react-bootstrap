import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom';
import { RecoilRoot, MutableSnapshot } from 'recoil';
import { Layout, Spin } from 'antd';
import { Router } from "@reach/router"
import { ErrorBoundary } from './components/behavior/ErrorBoundary/ErrorBoundary';
import { ProtectedRoute } from './components/behavior/ProtectedRoute/ProtectedRoute';
import { HttpErrorHandling } from './components/behavior/HttpErrorHandling/HttpErrorHandling';
import { StateManagement } from './components/behavior/StateManagement/StateManagement';
import { Header } from './components/ui/Header/Header';
import { User } from './domain/models/User';
import { UserState } from './domain/atoms/UserState';

import './assets/styles/App.scss';

const HomePage = lazy(() => import('./containers/Home/HomePage'));
const CreateNewAccountPage = lazy(() => import('./containers/Authentication/CreateNewAccount/CreateNewAccountPage'))
const ForgotPasswordPage = lazy(() => import('./containers/Authentication/ForgotPassword/ForgotPasswordPage'))
const ResetPasswordPage = lazy(() => import('./containers/Authentication/ResetPassword/ResetPasswordPage'))
const LoginPage = lazy(() => import('./containers/Authentication/Login/LoginPage'));
const StockPage = lazy(() => import('./containers/Stock/StockPage'));
const MePage = lazy(() => import('./containers/Me/MePage'));

const initialize = (snapshot: MutableSnapshot) => {
  let store = localStorage.getItem('user');

  if (store !== null) {
    let user = JSON.parse(store) as User;

    snapshot.set(UserState, user)
  }
}

ReactDOM.render(
  <RecoilRoot initializeState={initialize}>
    <ErrorBoundary>
      <HttpErrorHandling></HttpErrorHandling>
      <StateManagement></StateManagement>

      <Layout>
        <Header></Header>
        <Suspense fallback={<Spin size="large" />}>
          <Router>
            <HomePage default />
            <HomePage path="/" />
            <StockPage path="stock" />
            <LoginPage path="login" />
            <CreateNewAccountPage path="create-new-account" />
            <ForgotPasswordPage path="forgot-password" />
            <ResetPasswordPage path="reset-password" />
            <ProtectedRoute path="me" for={MePage} />
          </Router>
        </Suspense>
      </Layout>
    </ErrorBoundary>
  </RecoilRoot>,
  document.getElementById('root')
);