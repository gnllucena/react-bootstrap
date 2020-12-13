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
        getProps={({ isCurrent }): Record<string, unknown> => (isCurrent ? { className: 'active' } : {})}
        onClick={onNavigate}
      >
        Companies
      </Link>
    </MenuAntd.Item>
  </MenuAntd>
);

export default Menu;
