import React from 'react';
import { IInputProps } from './types';
import styles from './Input.styles';

const { DivStyled, LabelStyled, InputStyled } = styles;

const Input: React.FC<IInputProps> = ({
  id = 'testInputId',
  label,
  type,
  placeholder,
  required,
  value,
  disabled,
  style,
  onBlur,
  onChange,
  ...props
}) => {
  return (
    <DivStyled className="Input" data-testid="test-InputGroup">
      {label && <LabelStyled>{label}</LabelStyled>}
      <InputStyled
        id={id}
        data-testid={id}
        placeholder={placeholder}
        required={required}
        type={type}
        style={style}
        disabled={disabled}
        value={value}
        onBlur={onBlur}
        onChange={onChange}
        {...props}
      />
    </DivStyled>
  );
};

export default Input;
