import React, { FunctionComponent, useState } from 'react';
import { Drawer as DrawerAntd } from 'antd';
import { CloseOutlined } from '@ant-design/icons';

import './Drawer.scss';

interface DrawerProps {
  placement: 'top' | 'right' | 'bottom' | 'left'
  width: number,
  open: boolean,
  onClose(): void
}

const Drawer: FunctionComponent<DrawerProps> = props => (
  <DrawerAntd
    placement={props.placement}
    closable={false}
    onClose={props.onClose}
    width={`${props.width}px`}
    className="drawer-wrapper"
    visible={props.open}
  >
    <div className="drawer-close-wrapper">
      <button onClick={props.onClose} type="button">
        <CloseOutlined />
      </button>
    </div>

    <div className="drawer-children-wrapper">
      {props.children}        
    </div>
  </DrawerAntd>
);

export default Drawer;
