import React, { FunctionComponent } from 'react';
import { Redirect, RouteComponentProps } from '@reach/router';
 
type Props = RouteComponentProps & { 
  for: FunctionComponent;
};

export const ProtectedRoute: FunctionComponent<Props> = ({ 
  for: Component 
}) => {
  if (false) {
    return <Component />;
  } else {
    return <Redirect from="" to="/login" noThrow />;
  }
};