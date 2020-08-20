import React, { FunctionComponent, useRef, useState, Fragment, useEffect, MutableRefObject } from 'react';
import { Menu as MenuAntd } from 'antd';
import { Link } from '@reach/router';
import { useRecoilState, useRecoilValue, useResetRecoilState } from 'recoil';
import { UserState } from '../../../domain/atoms/UserState';
import { User } from '../../../domain/models/User';

import './MenuAuthentication.scss';

export const MenuAuthentication: FunctionComponent = () => {
  const [hidden, setHidden] = useState<boolean>(true);
  const userState = useRecoilValue(UserState);
  const resetUserState = useResetRecoilState(UserState);
  const isAuthenticated = userState.Id !== undefined;

  const ref = useRef<HTMLDivElement>(null);
  const handler = () => closeDropdown();

  useEffect(() => {
    const listener = (event: Event) => {
      const el = ref?.current;
      
      if (!el || el.contains((event?.target as Node) || null)) {
        return;
      }

      handler();
    };

    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, handler]);
  
  const handleDropdown = () => {
    setHidden(!hidden)
  };

  const closeDropdown = () => {
    setHidden(true);
  };

  const logout = () => {
    resetUserState();
  }

  return (
    isAuthenticated ? (
      <>
        <div className="avatar-wrapper-fullscreen">
          <div className="avatar-wrapper">
            <div className="avatar-dropdown" ref={ref}>
              <div className="dropdown-handler" onClick={handleDropdown}>
                <Fragment>
                  <img src={userState.Avatar} alt="Avatar" />
                </Fragment>
              </div>

              <MenuAntd className={`dropdown-menu ${hidden ? 'hide' : 'active'}`}>
                <MenuAntd.Item onClick={closeDropdown} key="2">
                  <Link to='account-settings'>Account Settings</Link>
                </MenuAntd.Item>
                <MenuAntd.Item key="3">
                  <button onClick={logout}>Log Out</button>
                </MenuAntd.Item>
              </MenuAntd>
            </div>  
          </div>
        </div>
        <div className="avatar-wrapper-mobile">
          <div className="avatar-wrapper">
            <div className="avatar-image">
              <Fragment>
                <img src={userState.Avatar} alt="Avatar" />
              </Fragment>
            </div>
            <div className="avatar-info">
              <h3>Hi, {userState.Name.split(' ')[0]}</h3>
              <Link to='account-settings'>Account Settings</Link>
            </div>
          </div>
        </div>
      </>
    ) : (
      <MenuAntd>
        <MenuAntd.Item key="0">
          <Link to="/login">Sign in</Link>
        </MenuAntd.Item>
        <MenuAntd.Item key="1">
          <Link to="/create-new-account">Sign up</Link>
        </MenuAntd.Item>
      </MenuAntd>
    )
  );
};