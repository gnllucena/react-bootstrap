import React, { FunctionComponent, useEffect } from 'react';
import { RouteComponentProps } from '@reach/router';

export const StockPage: FunctionComponent<RouteComponentProps> = (props: RouteComponentProps) => {
  useEffect(() => {
    return () => { };
  }, []);

  return (
    <div>
      <p>Stock Page</p>
    </div>
  );
}

export default StockPage;