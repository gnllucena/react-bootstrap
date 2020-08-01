import React, { useEffect, FunctionComponent } from 'react';
import { RouteComponentProps } from '@reach/router';

export const LoginPage: FunctionComponent<RouteComponentProps> = (props: RouteComponentProps) => {
  useEffect(() => {
    return () => { };
  }, []);

  return (
    <div>
      <p>Login Page</p>
    </div>
  );
}