import React, { CSSProperties, FunctionComponent } from 'react';
import { Slider as SliderAntd } from 'formik-antd';
import { useField } from 'formik';

import './Slider.scss';

export interface SliderProps {
  name: string,
  label: string,
  maxValue: number,
  minValue: number,
  range: boolean,
  value: number | [number, number]
  focus?: boolean,
  disabled?: boolean
  style?: CSSProperties,
  onChange?(value: number | [number, number]): void
}

export const Slider: FunctionComponent<SliderProps> = ({
  name,
  label,
  maxValue,
  minValue,
  range,
  value,
  focus,
  disabled,
  style,
  onChange
}) => {
  const [field, meta, helpers] = useField(name);

  const triggered = () => meta.error && meta.touched;

  const marks: any = {};
  marks[`${minValue.toString()}`] = `${minValue.toString()}`;
  marks[`${maxValue.toString()}`] = `${maxValue.toString()}`;

  const changed = (value: number | [number, number]) => {
    if (onChange) {
      onChange(value);
    }
  }

  return (
    <div className={`slider-wrapper ${triggered() ? 'has-error' : ''}`}>
      <div className="label-wrapper">{label}</div>

      <SliderAntd
        name={name}
        autoFocus={focus ?? false}
        max={maxValue}
        min={minValue}
        range={range}
        marks={marks}
        tooltipPlacement="top"
        defaultValue={value}
        disabled={disabled}
        onChange={changed}
        style={style}
      />

      { triggered() && <div className="slider-error-wrapper"><span>{meta.error}</span></div>}
    </div>
  );
};