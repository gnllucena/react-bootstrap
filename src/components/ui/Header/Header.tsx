import React, { CSSProperties, FunctionComponent } from 'react';
import { Affix } from 'antd';
import HeaderFullscreen from '../HeaderFullscreen/HeaderFullscreen';
import HeaderMobile from '../HeaderMobile/HeaderMobile';
import useIsFullscreen from '../../hooks/UseIsFullscreen';

import './Header.scss';

export interface HeaderProps {
  fixed: boolean,
  background?: 'transparent' | 'default'
}

const Header: FunctionComponent<HeaderProps> = ({
  fixed,
  background
}) => {
  const isFullscreen = useIsFullscreen();
  
  const content = () => {
    return isFullscreen ? (
      <HeaderFullscreen />
    ) : (
      <HeaderMobile />
    )
  }

  return (
    <div className={`header-wrapper header-${background ?? 'default'}`} style={{zIndex: 11}}>
      {
        fixed ? (
          <Affix offsetTop={0}>
            {content()}
          </Affix>
        ) : (
          content()
        )
      }
    </div>
  );
};

export default Header;
