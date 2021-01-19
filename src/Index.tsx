import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom';
import { RecoilRoot, MutableSnapshot } from 'recoil';
import { Layout } from 'antd';
import { Router } from '@reach/router';
import { UserState } from './store/LoginPageState';
import HttpErrorHandling from './components/behavior/HttpErrorHandling/HttpErrorHandling';
import StateManagement from './components/behavior/StateManagement/StateManagement';
import ErrorBoundary from './components/behavior/ErrorBoundary/ErrorBoundary';

import User from './domain/User';
import ScrollToTop from './components/behavior/ScrollToTop/ScrollToTop';
import ProtectedRoute from './components/behavior/ProtectedRoute/ProtectedRoute';

import './assets/styles/App.scss';
import Loading from './components/ui/Loading/Loading';

const HomePage = lazy(() => import('./containers/Home/HomePage'));
const CreateNewAccountPage = lazy(() => import('./containers/Authentication/CreateNewAccount/CreateNewAccountPage'));
const ForgotPasswordPage = lazy(() => import('./containers/Authentication/ForgotPassword/ForgotPasswordPage'));
const ResetPasswordPage = lazy(() => import('./containers/Authentication/ResetPassword/ResetPasswordPage'));
const LoginPage = lazy(() => import('./containers/Authentication/Login/LoginPage'));
const CompaniesSearchPage = lazy(() => import('./containers/Companies/Search/CompaniesSearchPage'));
const CompanyPage = lazy(() => import('./containers/Companies/Company/CompanyPage'));

ReactDOM.render(
  <RecoilRoot initializeState={(snapshot: MutableSnapshot) => {
    const user = localStorage.getItem('user');

    if (user !== null) {
      const loggedUser = JSON.parse(user) as User;

      snapshot.set(UserState, loggedUser);
    }
  }}>
    <ErrorBoundary>
      <HttpErrorHandling />
      <StateManagement />
      <Layout>
        <Suspense fallback={<Loading />}>
          <Router primary={false}>
            <ScrollToTop path="/">
              <HomePage default />
              <HomePage path="/" />
              <LoginPage path="login" />
              <CreateNewAccountPage path="create-new-account" />
              <ForgotPasswordPage path="forgot-password" />
              <ResetPasswordPage path="reset-password" />
              <CompaniesSearchPage path="companies" />
              <ProtectedRoute path="companies/:companyId/:companyName" for={CompanyPage} />
            </ScrollToTop>
          </Router>
        </Suspense>
      </Layout>
    </ErrorBoundary>
  </RecoilRoot>,
  document.getElementById('root')
);
