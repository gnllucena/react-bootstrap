import React, { FunctionComponent } from 'react';
import { Menu as MenuAntd } from 'antd';
import { Link } from '@reach/router';

import './Menu.scss';

export interface MenuProps {
  align: 'horizontal' | 'vertical'
}

export const Menu: FunctionComponent<MenuProps> = ({ align }) => {
  return (
    <MenuAntd mode={align}>
      <MenuAntd.Item key="0">
        <Link to="/" getProps={({ isCurrent }) => { return isCurrent ? { className: "active" } : {} }}>Search</Link>
      </MenuAntd.Item>
      <MenuAntd.Item key="1">
        <Link to="/stocks" getProps={({ isCurrent }) => { return isCurrent ? { className: "active" } : {} }}>Stocks</Link>
      </MenuAntd.Item>
      <MenuAntd.Item key="2">
        <Link to="/sectors" getProps={({ isCurrent }) => { return isCurrent ? { className: "active" } : {} }}>Sectors</Link>
      </MenuAntd.Item>
    </MenuAntd>
  );
};