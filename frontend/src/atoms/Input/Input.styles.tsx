import styled from 'styled-components';
import { IInputStyleProps } from './types';
import colors from 'styles/colors';

const DivStyled = styled.div<IInputStyleProps>`
  display: block;
  width: 100%;
  margin-bottom: 15px;
`;

const LabelStyled = styled.label`
  display: block;
  margin-bottom: 5px;
  text-transform: capitalize;
`;

const InputStyled = styled.input`
  width: 100%;
  max-width: 100%;
  border-radius: 12px;
  border: 1px solid ${colors.input.border};
  background-color: ${colors.input.background};
  padding: 16.666667px;
  box-sizing: border-box;
  outline: none;
  transition: all 0.4s ease-in-out;
  color: ${colors.brand};

  &:focus {
    border-color: ${colors.brand};
  }

  ::placeholder {
    color: ${colors.input.placeholder};
    font-style: italic;
  }
`;

export default {
  DivStyled,
  LabelStyled,
  InputStyled,
};
