import React, { FunctionComponent } from 'react';
import { Menu as MenuAntd } from 'antd';
import { Link } from '@reach/router';

import './Menu.scss';

export interface MenuProps {
  align: 'horizontal' | 'vertical',
  onNavigate?(): void
}

const Menu: FunctionComponent<MenuProps> = ({ 
  align,
  onNavigate
}) => (
  <MenuAntd mode={align} className="menu-links">
    <MenuAntd.Item key="0">
      <Link
        to="/companies"
        getProps={({ isPartiallyCurrent }): Record<string, unknown> => (isPartiallyCurrent ? { className: 'active' } : {})}
        onClick={onNavigate}
      >
        Companies
      </Link>
    </MenuAntd.Item>
    <MenuAntd.Item key="1">
      <Link
        to="/valuation"
        getProps={({ isPartiallyCurrent }): Record<string, unknown> => (isPartiallyCurrent ? { className: 'active' } : {})}
        onClick={onNavigate}
      >
        Valuation
      </Link>
    </MenuAntd.Item>
    <MenuAntd.Item key="2">
      <Link
        to="/wallet"
        getProps={({ isPartiallyCurrent }): Record<string, unknown> => (isPartiallyCurrent ? { className: 'active' } : {})}
        onClick={onNavigate}
      >
        My Wallet
      </Link>
    </MenuAntd.Item>
  </MenuAntd>
);

export default Menu;
