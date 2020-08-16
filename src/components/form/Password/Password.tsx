import React from 'react';
import { Input as InputAntd } from 'formik-antd';
import { useField } from "formik";
import { FunctionComponent } from 'react';

import './Password.scss';

export interface PasswordProps {
  name: string,
  label: string,
  placeholder?: string,
  disabled?: boolean,
  autoComplete?: string
}

export const Password: FunctionComponent<PasswordProps> = ({ 
  name, 
  label, 
  placeholder,
  disabled,
  autoComplete
}) => {
  const [field, meta, helpers] = useField(name);

  function triggered() {
    return meta.error && meta.touched;
  }

  return (
    <div className={triggered() ? "input-wrapper has-error" : "input-wrapper" }>
      <div className="label-wrapper">{label}</div>

      <InputAntd.Password size="large" 
        name={name} 
        placeholder={placeholder} 
        autoComplete={autoComplete} 
        disabled={disabled}
      />
      
      { triggered() && <div className="input-error-wrapper"><span>{meta.error}</span></div> }
    </div>
  );
};