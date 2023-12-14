import styled, { css } from 'styled-components';
import { ICheckboxStyleProps } from './types';

const disabledCheckbox = () => {
  return css`
    cursor: not-allowed;

    & svg {
      pointer-events: none;
    }

    & h4 {
      pointer-events: none;
    }
  `;
};

const DivStyled = styled.div<ICheckboxStyleProps>`
  display: flex;
  gap: 8px;
  align-items: center;
  width: max-content;

  & svg {
    cursor: pointer;
  }

  & h4 {
    font-weight: normal;
    cursor: pointer;
  }

  ${({ $disabled }) => $disabled && disabledCheckbox()}
`;

export default {
  DivStyled,
};
