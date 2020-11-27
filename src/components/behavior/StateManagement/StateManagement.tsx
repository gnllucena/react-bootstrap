import { FunctionComponent, useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { LoginPageState } from '../../../store/LoginPageState';

const StateManagement: FunctionComponent = () => {
  const loginPageState = useRecoilValue(LoginPageState);

  useEffect(() => {
    const key = 'user';

    if (loginPageState.Id === undefined) {
      localStorage.removeItem(key);
      sessionStorage.removeItem(key);
    } else {
      const value = JSON.stringify(loginPageState);

      if (loginPageState.RememberMe) {
        localStorage.setItem(key, value);
      } else {
        sessionStorage.setItem(key, value);
      }
    }
  }, [loginPageState]);

  return null;
};

export default StateManagement;
