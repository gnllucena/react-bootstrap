import React, { FunctionComponent } from 'react';
import { Menu as MenuAntd } from 'antd';
import { Link } from '@reach/router';

import './MenuAuthentication.scss';

export const MenuAuthentication: FunctionComponent = () => {
  return (
    <MenuAntd>
      <MenuAntd.Item key="0">
        <Link to="/login">Sign in</Link>
      </MenuAntd.Item>
      <MenuAntd.Item key="1">
        <Link to="/register">Sign up</Link>
      </MenuAntd.Item>
    </MenuAntd>
  );
};