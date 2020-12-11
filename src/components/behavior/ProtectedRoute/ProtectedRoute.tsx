import React, { FunctionComponent } from 'react';
import { useRecoilValue } from 'recoil';
import { Redirect, RouteComponentProps } from '@reach/router';
import { LoginPageState } from '../../../store/LoginPageState';

type Props = RouteComponentProps & {
  for: FunctionComponent;
};

const ProtectedRoute: FunctionComponent<Props> = ({ 
  for: Component,
  location
}) => {
  const loginPageState = useRecoilValue(LoginPageState);
  
  if (loginPageState.Id !== undefined) {
    return <Component />;
  }

  return <Redirect to={`/login?url=${location?.href}`} />;
};

export default ProtectedRoute;
