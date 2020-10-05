import React, { FunctionComponent, useState } from 'react';
import { Link } from '@reach/router';
import { IoIosClose } from 'react-icons/io';
import { Button, Drawer } from 'antd';
import Menu from '../Menu/Menu';
import MenuAuthentication from '../MenuAuthentication/MenuAuthentication';

import './HeaderMobile.scss';

const logo = require('../../../assets/images/logo-alt.svg') as string;

const HeaderMobile: FunctionComponent = () => {
  const [sidebarMenuOpen, setSidebarMenuOpen] = useState<boolean>(false);

  const changeDrawer = () => {
    setSidebarMenuOpen(!sidebarMenuOpen);
  }

  return (
    <div className="header-mobile-wrapper default">
      <div className="logo-wrapper">
        <Link to="/">
          <img src={logo} alt="semnome017" />
          <h3>semnome017</h3>
        </Link>
      </div>

      <Button onClick={changeDrawer} className={`hamburg-btn ${sidebarMenuOpen ? 'active' : ''}`}>
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
            <IoIosClose />
          </button>
        </div>

        <div className="main-menu">
          <MenuAuthentication onNavigate={changeDrawer} />
          <Menu align="vertical" onNavigate={changeDrawer} />
        </div>
      </Drawer>
    </div>
  );
};

export default HeaderMobile;
