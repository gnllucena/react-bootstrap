import { FunctionComponent, useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import UserState from '../../../store/atoms/domain/UserState';

const StateManagement: FunctionComponent = () => {
  const userState = useRecoilValue(UserState);

  useEffect(() => {
    const key = 'user';

    if (userState.Id === undefined) {
      localStorage.removeItem(key);
      sessionStorage.removeItem(key);
    } else {
      const value = JSON.stringify(userState);

      if (userState.RememberMe) {
        localStorage.setItem(key, value);
      } else {
        sessionStorage.setItem(key, value);
      }
    }
  }, [userState]);

  return null;
};

export default StateManagement;
