import React, { FunctionComponent } from 'react';
import { RouteComponentProps } from '@reach/router';
import { Stock } from '../../domain/models/Stock';

export const StockPage: FunctionComponent<RouteComponentProps> = (props: RouteComponentProps) => {
  React.useEffect(() => {
    let stocks = new Array<Stock>();
  
    let id = stocks[9].Id

    return () => { };
  }, []);

  return (
    <div>
      <p>Stock Page</p>
    </div>
  );
}