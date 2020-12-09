import React, { FunctionComponent } from 'react';
import { Redirect, RouteComponentProps } from '@reach/router';
import { navigate } from "@reach/router"

type Props = RouteComponentProps & {
  for: FunctionComponent;
};

const ProtectedRoute: FunctionComponent<Props> = ({ 
  for: Component 
}) => {
  if (false) {
    return <Component />;
  }

  // redirectTo("/login");

  return <Redirect to="/login" noThrow />;
};

export default ProtectedRoute;
