import React, { FunctionComponent } from 'react';
import { Affix } from 'antd';
import HeaderFullscreen from '../HeaderFullscreen/HeaderFullscreen';
import HeaderMobile from '../HeaderMobile/HeaderMobile';
import useIsFullscreen from '../../hooks/UseIsFullscreen';

import './Header.scss';

const Header: FunctionComponent = () => {
  const isFullscreen = useIsFullscreen();
  
  return (
    <div className="header-wrapper" style={{zIndex: 11}}>
      <Affix offsetTop={1}>
        {
          isFullscreen ? (
            <HeaderFullscreen />
          ) : (
            <HeaderMobile />
          )
        }
      </Affix>
    </div>
  );
};

export default Header;
