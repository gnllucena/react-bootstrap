import React, { FunctionComponent } from 'react';
import { Affix } from 'antd';
import HeaderFullscreen from '../HeaderFullscreen/HeaderFullscreen';
import HeaderMobile from '../HeaderMobile/HeaderMobile';
import useIsFullscreen from '../../hooks/UseIsFullscreen';

import './Header.scss';

export interface HeaderProps {
  fixed: boolean,
  background?: 'detail' | 'default'
}

const Header: FunctionComponent<HeaderProps> = ({
  fixed,
  background
}) => {
  const isFullscreen = useIsFullscreen();
  
  const content = () => {
    var header = isFullscreen ? (
      <HeaderFullscreen />
    ) : (
      <HeaderMobile />
    )
    
    return (
      <div className={`header-wrapper header-${background ?? 'default'}`} style={{zIndex: 11}}>
        {header}
      </div>
    )
  }

  return (
    fixed ? (
      <Affix>
        { content() }
      </Affix>
    ) : (
     content()
    )
  );
};

export default Header;
