import React, { CSSProperties, FunctionComponent } from 'react';
import { Input as InputAntd } from 'formik-antd';
import { useField } from 'formik';

import './Input.scss';

export interface InputProps {
  name: string,
  label: string,
  placeholder?: string,
  value?: string,
  disabled?: boolean,
  autoComplete?: string,
  style?: CSSProperties,
  onChange?(value: string): void
}

const Input: FunctionComponent<InputProps> = ({
  name,
  label,
  placeholder,
  value,
  disabled,
  autoComplete,
  style,
  onChange
}) => {
  const [field, meta, helpers] = useField(name);

  const triggered = () => meta.error && meta.touched;

  const changed = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(event.target.defaultValue);
    }
  }

  return (
    <div className={`input-wrapper ${triggered() ? 'has-error' : ''}`}>
      <div className="label-wrapper">{label}</div>

      <InputAntd
        size="large"
        name={name}
        placeholder={placeholder}
        defaultValue={value}
        autoComplete={autoComplete}
        disabled={disabled}
        onChange={changed}
        style={style}
      />

      { triggered() && <div className="input-error-wrapper"><span>{meta.error}</span></div>}
    </div>
  );
};

export default Input;
