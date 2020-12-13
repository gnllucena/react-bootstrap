import React, { FunctionComponent } from 'react';
import { RouteComponentProps } from '@reach/router';
import Header from '../../components/ui/Header/Header';
import { Content } from 'antd/lib/layout/layout';


const HomePage: FunctionComponent<RouteComponentProps> = (props: RouteComponentProps) => (
  <>
    <Header />

    <Content>
      <p>home page</p>
    </Content>
  </>
);

export default HomePage;
