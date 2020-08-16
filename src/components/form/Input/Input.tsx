import React from 'react';
import { Input as InputAntd } from 'formik-antd';
import { useField } from "formik";
import { FunctionComponent } from 'react';

import './Input.scss';

export interface InputProps {
  name: string,
  label: string,
  placeholder?: string, 
  value?: string,
  disabled?: boolean,
  autoComplete?: string
}

export const Input: FunctionComponent<InputProps> = ({ 
  name, 
  label, 
  placeholder,
  value,
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

      <InputAntd size="large" 
        name={name} 
        placeholder={placeholder} 
        value={value} 
        autoComplete={autoComplete} 
        disabled={disabled}
      />
      
      { triggered() && <div className="input-error-wrapper"><span>{meta.error}</span></div> }
    </div>
  );
};