import React, { FunctionComponent, useState } from 'react';
import { Link } from '@reach/router';
import { IoIosClose } from 'react-icons/io';

import './HeaderMobile.scss';
import logo from '../../../assets/images/logo-alt.svg';
import { Button, Drawer } from 'antd';
import { Menu } from '../Menu/Menu';

export const HeaderMobile: FunctionComponent = () => {
  const [sidebarMenuOpen, setSidebarMenuOpen] = useState<boolean>(false);

  return (
    <div className="header-mobile-wrapper default">
      <div className="logo-wrapper">
        <Link to="/">
          <img src={logo} alt="semnome017" />
          <h3>semnome017</h3>
        </Link>
      </div>

      <Button onClick={() => setSidebarMenuOpen(!sidebarMenuOpen)} className={`hamburg-btn ${sidebarMenuOpen ? 'active' : ''}`}>
        <span />
        <span />
        <span />
      </Button>

      <Drawer
        placement="right"
        closable={false}
        onClose={() => setSidebarMenuOpen(!sidebarMenuOpen)}
        width="285px"
        className="header-mobile-drawer-wrapper"
        visible={sidebarMenuOpen}
      >
        <div className="header-mobile-drawer-close">
          <button onClick={() => setSidebarMenuOpen(!sidebarMenuOpen)}>
            <IoIosClose />
          </button>
        </div>
        
        <div className="main-menu">
          <Menu align="vertical" />
        </div>
        

        {/* {loggedIn ? (
          <AvatarWrapper>
            <AvatarImage>
              <Logo src={avatarImg} />
            </AvatarImage>
            <AvatarInfo>
              <Text as="h3" content="Nova Scotia" />
              <TextLink
                link={AGENT_PROFILE_PAGE}
                content="View Profile"
              />
            </AvatarInfo>
          </AvatarWrapper>
        ) : (
          <AuthMenu className="auth-menu" />
        )}
        <MobileMenu className="main-menu" /> */}


      </Drawer>
    </div>
  );
};