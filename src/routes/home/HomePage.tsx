import * as React from 'react';
import { RouteComponentProps } from '@reach/router';

export const HomePage: React.FC<RouteComponentProps> = (props: RouteComponentProps) => {
  React.useEffect(() => {
    return () => { };
  }, []);

  return (
    <div>
      <p>Home Page</p>
    </div>
  );
}