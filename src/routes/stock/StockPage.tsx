import * as React from 'react';
import { RouteComponentProps } from '@reach/router';

export const StockPage: React.FC<RouteComponentProps> = (props: RouteComponentProps) => {
  React.useEffect(() => {
    return () => { };
  }, []);

  return (
    <div>
      <p>Stock Page</p>
    </div>
  );
}