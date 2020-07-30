import React, { FunctionComponent } from 'react';
import { RouteComponentProps } from '@reach/router';

export const MePage: FunctionComponent<RouteComponentProps> = (props: RouteComponentProps) => {
  React.useEffect(() => {
    return () => { };
  }, []);

  return (
    <div>
      <p>Me Page</p>
    </div>
  );
}