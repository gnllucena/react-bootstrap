import React, { useEffect, FunctionComponent } from 'react';
import { RouteComponentProps } from '@reach/router';

export const MePage: FunctionComponent<RouteComponentProps> = (props: RouteComponentProps) => {
  useEffect(() => {
    return () => { };
  }, []);

  return (
    <div>
      <p>Me Page</p>
    </div>
  );
}

export default MePage;