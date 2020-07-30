import React, { FunctionComponent, useEffect } from 'react';
import axios from 'axios';
import { RouteComponentProps } from '@reach/router';

export const HomePage: FunctionComponent<RouteComponentProps> = (props: RouteComponentProps) => {
  useEffect(() => {
    axios.get('foo')

    return () => { };
  }, []);

  return (
    <div>
      <p>Home Page</p>
    </div>
  );
}