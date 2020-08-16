import React, { Component } from 'react';
import { FunctionComponent } from 'react';
import { Button as ButtonAntd } from 'antd';

import './Button.scss';

export interface ButtonProps {
  text: string,
  type: 'submit' | 'button' | 'reset',
  style: 'primary' | 'default' | 'link' | 'ghost' | 'dashed' | 'text',
  icon?: Component
  disabled?: boolean
}

export const Button: FunctionComponent<ButtonProps> = ({ 
  text,
  type,
  style,
  icon,
  disabled
}) => {
  return (
    <ButtonAntd
      className='btn-primary'
      type={style}
      htmlType={type}
      icon={icon}
      loading={false}
      disabled={disabled}
      onClick={() => {}}
    >
      {text}
    </ButtonAntd>
  );
};