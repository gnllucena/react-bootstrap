import React, { Fragment, FunctionComponent, useRef, useState } from 'react';
import { Menu as MenuAntd } from 'antd';
import { Link, navigate } from '@reach/router';
import { useRecoilValue, useResetRecoilState } from 'recoil';
import useOnClickOutside from '../../hooks/UseOnClickOutside';
import useIsFullscreen from '../../hooks/UseIsFullscreen';
import { LoginPageState } from '../../../store/LoginPageState';

import './MenuAuthentication.scss';

export interface MenuAuthenticationProps {
  onNavigate?(): void
}

const MenuAuthentication: FunctionComponent<MenuAuthenticationProps> = ({
  onNavigate
}) => {
  const [hidden, setHidden] = useState<boolean>(true);
  const ref = useRef<HTMLDivElement>(null);
  const loginPageState = useRecoilValue(LoginPageState);
  const resetLoginPageState = useResetRecoilState(LoginPageState);
  const isAuthenticated = loginPageState.Id !== undefined;
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
                  <img src={loginPageState.Avatar} alt="Avatar" />
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
          <div className="avatar-wrapper">
            <div className="avatar-image">
              <Fragment>
                <img src={loginPageState.Avatar} alt="Avatar" />
              </Fragment>
            </div>
            <div className="avatar-info">
              <h3>
                Hi,
                {loginPageState.Name.split(' ')[0]}
              </h3>
              <Link to="account-settings" onClick={onNavigate}>Account Settings</Link>
            </div>
          </div>
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
