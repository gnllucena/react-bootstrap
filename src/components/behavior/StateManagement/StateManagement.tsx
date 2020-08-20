import { FunctionComponent, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { UserState } from '../../../domain/atoms/UserState';

export const StateManagement: FunctionComponent = () => {
  const [userState, setUserState] = useRecoilState(UserState)

  useEffect(() => {
    let key = 'user';

    if (userState.Id === undefined) {
      localStorage.removeItem(key);
      sessionStorage.removeItem(key);
    }
  }, [userState])

  return null;
};

