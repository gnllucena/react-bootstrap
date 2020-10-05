import React, { FunctionComponent } from 'react';
import { Input as InputAntd } from 'formik-antd';
import { useField } from 'formik';

import './Password.scss';

export interface PasswordProps {
  name: string,
  label: string,
  placeholder?: string,
  disabled?: boolean,
  autoComplete?: string,
  onChange?(value: string): void
}

const Password: FunctionComponent<PasswordProps> = ({
  name,
  label,
  placeholder,
  disabled,
  autoComplete,
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
    <div className={triggered() ? 'input-wrapper has-error' : 'input-wrapper'}>
      <div className="label-wrapper">{label}</div>

      <InputAntd.Password
        size="large"
        name={name}
        placeholder={placeholder}
        autoComplete={autoComplete}
        disabled={disabled}
        onChange={changed}
      />

      { triggered() && <div className="input-error-wrapper"><span>{meta.error}</span></div>}
    </div>
  );
};

export default Password;
