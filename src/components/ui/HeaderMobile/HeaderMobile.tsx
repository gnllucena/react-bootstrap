import React, { FunctionComponent, useState } from 'react';
import { Link } from '@reach/router';
import { Button, Drawer } from 'antd';
import MenuPages from '../MenuPages/MenuPages';
import MenuAuthenticated from '../MenuAuthenticated/MenuAuthenticated';
import { CloseOutlined } from '@ant-design/icons';

import './HeaderMobile.scss';
import { useRecoilValue } from 'recoil';
import { UserState } from '../../../store/LoginPageState';
import MenuUnauthenticated from '../MenuUnauthenticated/MenuUnauthenticated';

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
        placement="right"
        closable={false}
        onClose={changeDrawer}
        width="285px"
        className="header-mobile-drawer-wrapper"
        visible={sidebarMenuOpen}
      >
        <div className="header-mobile-drawer-close">
          <button onClick={changeDrawer} type="button">
            <CloseOutlined />
          </button>
        </div>

        <div className="main-menu">
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
