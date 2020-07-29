import * as React from 'react';
import { RouteComponentProps } from '@reach/router';

export const StockPage: React.FC<RouteComponentProps> = (props: RouteComponentProps) => {
  const [lista, setLista] = React.useState<Array<any>>([])

  React.useEffect(() => {
    let i = lista[9].var.is;
    
    return () => { };
  }, []);

  return (
    <div>
      <p>Stock Page</p>
    </div>
  );
}