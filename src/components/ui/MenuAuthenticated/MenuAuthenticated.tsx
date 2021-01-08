import React, { Fragment, FunctionComponent, useRef, useState } from 'react';
import { Menu } from 'antd';
import { Link, navigate } from '@reach/router';
import { useRecoilValue, useResetRecoilState } from 'recoil';
import useOnClickOutside from '../../hooks/UseOnClickOutside';
import useIsFullscreen from '../../hooks/UseIsFullscreen';
import { UserState } from '../../../store/LoginPageState';
import MenuAvatar from '../MenuAvatar/MenuAvatar';

import './MenuAuthenticated.scss';

export interface MenuAuthenticatedProps {
  onNavigate?(): void
}

const MenuAuthenticated: FunctionComponent<MenuAuthenticatedProps> = ({
  onNavigate
}) => {
  const [hidden, setHidden] = useState<boolean>(true);
  const ref = useRef<HTMLDivElement>(null);
  const user = useRecoilValue(UserState);
  const resetLoginPageState = useResetRecoilState(UserState);
  
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
    isFullscreen ? (
      <div className="avatar-wrapper-fullscreen">
        <div className="avatar-wrapper">
          <div className="avatar-dropdown" ref={ref}>
            <div className="dropdown-handler" onClick={handleDropdown} onKeyUp={handleDropdown} tabIndex={0} role="button">
              <Fragment>
                <MenuAvatar />
              </Fragment>
            </div>

            <Menu className={`dropdown-menu ${hidden ? 'hide' : 'active'}`}>
              <Menu.Item onClick={closeDropdown} key="2">
                <Link to="account-settings">Account Settings</Link>
              </Menu.Item>
              <Menu.Item key="3">
                <button onClick={logout} type="button">Log Out</button>
              </Menu.Item>
            </Menu>
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
  )
};

export default MenuAuthenticated;
