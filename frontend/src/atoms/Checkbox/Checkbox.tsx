import React from 'react';
import { ICheckboxProps } from './types';
import styles from './Checkbox.styles';
import CheckboxIcon from 'atoms/Icons/Checkbox';

const { DivStyled } = styles;

const Checkbox: React.FC<ICheckboxProps> = ({ checked, label, disabled, onClick }) => {
  return (
    <DivStyled className="Checkbox" data-testid="test-Checkbox-Group" $disabled={disabled}>
      <CheckboxIcon id="test-CheckboxId" checked={checked} onClick={onClick} />
      <h4 onClick={onClick}>{label}</h4>
    </DivStyled>
  );
};

export default Checkbox;
