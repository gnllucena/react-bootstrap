import React, { FunctionComponent } from 'react';
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
  disabled?: boolean
  onChange?(value: number | [number, number]): void
}

const Slider: FunctionComponent<SliderProps> = ({
  name,
  label,
  maxValue,
  minValue,
  range,
  value,
  disabled,
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
        max={maxValue}
        min={minValue}
        range={range}
        marks={marks}
        tooltipPlacement="top"
        defaultValue={value}
        disabled={disabled}
        onChange={changed}
      />

      { triggered() && <div className="slider-error-wrapper"><span>{meta.error}</span></div>}
    </div>
  );
};

export default Slider;
