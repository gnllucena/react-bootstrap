import React, { FunctionComponent } from 'react';
import { RouteComponentProps } from '@reach/router';

export const HomePage: FunctionComponent<RouteComponentProps> = (props: RouteComponentProps) => {
  React.useEffect(() => {
    return () => { };
  }, []);

  return (
    <div>
      <p>Home Page</p>
    </div>
  );
}