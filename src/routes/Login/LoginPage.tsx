import React, { FunctionComponent } from 'react';
import { RouteComponentProps } from '@reach/router';

export const LoginPage: FunctionComponent<RouteComponentProps> = (props: RouteComponentProps) => {
  React.useEffect(() => {
    return () => { };
  }, []);

  return (
    <div>
      <p>Login Page</p>
    </div>
  );
}