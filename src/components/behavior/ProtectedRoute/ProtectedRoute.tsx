import React, { FunctionComponent } from 'react';
import { Redirect, RouteComponentProps } from '@reach/router';
 
type Props = RouteComponentProps & { 
  as: FunctionComponent;
};

export const ProtectedRoute: FunctionComponent<Props> = ({ 
  as: Component 
}) => {
  if (false) {
    return <Component />;
  } else {
    return <Redirect from="" to="/login" noThrow />;
  }
};