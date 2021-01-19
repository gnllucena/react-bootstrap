import React, { FunctionComponent } from 'react';
import { UserOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';
import { useRecoilState } from 'recoil';
import { UserState } from '../../../store/LoginPageState';

import './MenuAvatar.scss';

const MenuAvatar: FunctionComponent = () => {
  const userState = useRecoilState(UserState);
  
  return (
    <div className="menu-avatar">
      <Avatar size="large" icon={<UserOutlined />} />
    </div>
  );
};

export default MenuAvatar;
