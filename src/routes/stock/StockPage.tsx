import React, { FunctionComponent, useEffect } from 'react';
import { RouteComponentProps } from '@reach/router';
import { Stock } from '../../domain/models/Stock';

export const StockPage: FunctionComponent<RouteComponentProps> = (props: RouteComponentProps) => {
  useEffect(() => {
    let stocks = new Array<Stock>();
  
    let id = stocks[9].Id

    id = 10;

    console.log(id);

    return () => { };
  }, []);

  return (
    <div>
      <p>Stock Page</p>
    </div>
  );
}