import styled, { css, keyframes } from 'styled-components';
import colors from 'styles/colors';
import { IButtonStyleProps } from './types';

const loadingAnimation = keyframes`
  0% {
    transform: translateX(0);
  }

  100% {
    transform: translateX(-1.75rem);
  }
`;

const loadingStyle = () => {
  return css`
    cursor: wait;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 150%;
      height: 100%;
      background: repeating-linear-gradient(
        60deg,
        transparent,
        transparent 0.75rem,
        ${colors.dark} 0.75rem,
        ${colors.dark} 1.5rem
      );
      animation: ${loadingAnimation} 1s infinite linear;
    }
  `;
};

const ButtonStyled = styled.button<IButtonStyleProps>`
  align-items: center;
  background-origin: border-box;
  border-radius: 12px;
  max-width: 100%;
  padding: 15px 55px;
  outline: none;
  border: none;
  transition: all 0.5s ease-in-out;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  background-color: ${colors.brand};
  ${({ $isLoading }) => $isLoading && loadingStyle()}

  &:hover {
    transform: scale(1.15);
    box-shadow: 0 18px 40px ${colors.button.shadow};
  }

  &:disabled {
    cursor: not-allowed;
  }
`;

const ButtonText = styled.span`
  text-transform: capitalize;
  color: ${colors.white};
  font-size: 18px;
  position: relative;
`;

export default {
  ButtonStyled,
  ButtonText,
};
