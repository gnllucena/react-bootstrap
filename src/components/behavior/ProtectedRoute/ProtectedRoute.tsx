import React, { FunctionComponent } from 'react';
import { Redirect, RouteComponentProps } from '@reach/router';

type Props = RouteComponentProps & {
  for: FunctionComponent;
};

const ProtectedRoute: FunctionComponent<Props> = ({ for: Component }) => {
  if (false) {
    return <Component />;
  }

  return <Redirect from="" to="/login" noThrow />;
};

export default ProtectedRoute;
