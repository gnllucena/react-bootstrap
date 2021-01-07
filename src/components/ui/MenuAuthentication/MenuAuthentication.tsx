import React, { Fragment, FunctionComponent, useRef, useState } from 'react';
import { UserOutlined } from '@ant-design/icons';
import { Avatar, Menu as MenuAntd } from 'antd';
import { Link, navigate } from '@reach/router';
import { useRecoilValue, useResetRecoilState } from 'recoil';
import useOnClickOutside from '../../hooks/UseOnClickOutside';
import useIsFullscreen from '../../hooks/UseIsFullscreen';
import { UserState } from '../../../store/LoginPageState';

import './MenuAuthentication.scss';
import MenuAvatar from '../MenuAvatar/MenuAvatar';

export interface MenuAuthenticationProps {
  onNavigate?(): void
}

const MenuAuthentication: FunctionComponent<MenuAuthenticationProps> = ({
  onNavigate
}) => {
  const [hidden, setHidden] = useState<boolean>(true);
  const ref = useRef<HTMLDivElement>(null);
  const user = useRecoilValue(UserState);
  const resetLoginPageState = useResetRecoilState(UserState);
  const isAuthenticated = user.Id !== undefined;
  const isFullscreen = useIsFullscreen();

  const handleDropdown = (): void => {
    setHidden(!hidden);
  };

  const closeDropdown = (): void => {
    setHidden(true);
  };

  const logout = (): void => {
    navigate('/');

    setTimeout(() => {
      resetLoginPageState();  
    }, 1);
  };

  useOnClickOutside(ref, () => closeDropdown());

  return (
    isAuthenticated ? (
      isFullscreen ? (
        <div className="avatar-wrapper-fullscreen">
          <div className="avatar-wrapper">
            <div className="avatar-dropdown" ref={ref}>
              <div className="dropdown-handler" onClick={handleDropdown} onKeyUp={handleDropdown} tabIndex={0} role="button">
                <Fragment>
                  <MenuAvatar />
                </Fragment>
              </div>

              <MenuAntd className={`dropdown-menu ${hidden ? 'hide' : 'active'}`}>
                <MenuAntd.Item onClick={closeDropdown} key="2">
                  <Link to="account-settings">Account Settings</Link>
                </MenuAntd.Item>
                <MenuAntd.Item key="3">
                  <button onClick={logout} type="button">Log Out</button>
                </MenuAntd.Item>
              </MenuAntd>
            </div>
          </div>
        </div>
      ) : (
        <div className="avatar-wrapper-mobile">
          <Link to="/account-settings" onClick={onNavigate}>
            <div className="avatar-wrapper">
              <div className="avatar-image">
                <Fragment>
                  <MenuAvatar />
                </Fragment>
              </div>
              <div className="avatar-info">
                <h3>
                  Hi, {user.Name.split(' ')[0]}
                </h3>
                Account Settings
              </div>
            </div>
          </Link>
        </div>
      )
    ) : (
      <MenuAntd>
        <MenuAntd.Item key="0">
          <Link to="/login" onClick={onNavigate}>Sign in</Link>
        </MenuAntd.Item>
        <MenuAntd.Item key="1">
          <Link to="/create-new-account" onClick={onNavigate}>Sign up</Link>
        </MenuAntd.Item>
      </MenuAntd>
    )
  );
};

export default MenuAuthentication;
