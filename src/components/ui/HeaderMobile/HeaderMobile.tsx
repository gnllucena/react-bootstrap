import React, { FunctionComponent, useState } from 'react';
import { Link } from '@reach/router';
import { Button } from 'antd';
import MenuPages from '../MenuPages/MenuPages';
import MenuAuthenticated from '../MenuAuthenticated/MenuAuthenticated';
import { CloseOutlined } from '@ant-design/icons';
import { useRecoilValue } from 'recoil';
import { UserState } from '../../../store/LoginPageState';
import MenuUnauthenticated from '../MenuUnauthenticated/MenuUnauthenticated';

import './HeaderMobile.scss';
import Drawer from '../Drawer/Drawer';

const HeaderMobile: FunctionComponent = () => {
  const [sidebarMenuOpen, setSidebarMenuOpen] = useState<boolean>(false);
  const user = useRecoilValue(UserState);
  const isAuthenticated = user.Id !== undefined;

  const changeDrawer = () => {
    setSidebarMenuOpen(!sidebarMenuOpen);
  }

  return (
    <div className="header-mobile-wrapper default">
      <div className="logo-wrapper">
        <Link to="/">
          <h3>zro17</h3>
        </Link>
      </div>

      <Button onClick={changeDrawer} className={`hamburger ${sidebarMenuOpen ? 'active' : ''}`}>
        <span />
        <span />
        <span />
      </Button>

      <Drawer
        width={285}
        placement="right"
        open={sidebarMenuOpen}
        onClose={() => {
          setSidebarMenuOpen(false);
        }}
      >
        <div className="header-mobile-items-wrapper">
          {
            isAuthenticated ? (
              <MenuAuthenticated onNavigate={changeDrawer} />
            ) : (
              <MenuUnauthenticated onNavigate={changeDrawer} />
            )
          }
          <MenuPages align="vertical" onNavigate={changeDrawer} />
        </div>
      </Drawer>
    </div>
  );
};

export default HeaderMobile;
