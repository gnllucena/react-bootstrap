import React, { Component, CSSProperties, FunctionComponent } from 'react';
import { Button as ButtonAntd } from 'antd';

import './Button.scss';

export interface ButtonProps {
  text: string,
  size: 'small' | 'big'
  type: 'submit' | 'button' | 'reset',
  design: 'primary' | 'default' | 'link' | 'ghost' | 'dashed' | 'text',
  icon?: Component
  loading?: boolean,
  disabled?: boolean,
  style?: CSSProperties,
  onClick?(): void
}

export const Button: FunctionComponent<ButtonProps> = ({
  text,
  size,
  type,
  design,
  icon,
  loading,
  disabled,
  style,
  onClick
}) => (
  <ButtonAntd
    className={`btn btn-${size} btn-${design}`}
    type={design}
    style={style}
    htmlType={type}
    icon={icon}
    loading={loading}
    disabled={loading ? true : disabled}
    onClick={() => {
      if (onClick) {
        onClick();
      }
    }}
  >
    {text}
  </ButtonAntd>
);

export default Button;
