import React from 'react';
import { IButtonProps } from './types';
import styles from './Button.styles';

const { ButtonStyled, ButtonText } = styles;

const Button: React.FC<IButtonProps> = ({ id, type, children, disabled, isLoading, onClick }) => {
  return (
    <ButtonStyled
      id={id}
      type={type}
      className="Button"
      data-testid="test-Button"
      disabled={disabled}
      $isLoading={isLoading}
      onClick={!disabled ? onClick : () => {}}>
      <ButtonText>{children}</ButtonText>
    </ButtonStyled>
  );
};

export default Button;
