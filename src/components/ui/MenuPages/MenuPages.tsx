import React, { FunctionComponent } from 'react';
import { Menu } from 'antd';
import { Link } from '@reach/router';

import './MenuPages.scss';

export interface MenuPagesProps {
  align: 'horizontal' | 'vertical',
  onNavigate?(): void
}

const MenuPages: FunctionComponent<MenuPagesProps> = ({ 
  align,
  onNavigate
}) => (
  <Menu mode={align} className="menu-links">
    <Menu.Item key="0">
      <Link
        to="/companies"
        getProps={({ isPartiallyCurrent }): Record<string, unknown> => (isPartiallyCurrent ? { className: 'active' } : {})}
        onClick={onNavigate}
      >
        Companies
      </Link>
    </Menu.Item>
    <Menu.Item key="1">
      <Link
        to="/pricing-plans"
        getProps={({ isPartiallyCurrent }): Record<string, unknown> => (isPartiallyCurrent ? { className: 'active' } : {})}
        onClick={onNavigate}
      >
        Pricing
      </Link>
    </Menu.Item>
  </Menu>
);

export default MenuPages;
