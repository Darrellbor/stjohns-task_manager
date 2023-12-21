import styled from 'styled-components';
import { IColorElProps } from './types';
import colors from 'styles/colors';

const DivStyled = styled.div`
  display: flex;
  gap: 25px;
  max-width: 100%;
`;

const ColorItem = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;

  & h4 {
    font-weight: normal;
    color: ${colors.white};
  }
`;

const ColorEl = styled.div<IColorElProps>`
  padding: 13px;
  border-radius: 100%;
  ${({ $color }) => `background-color: ${colors.calendar[$color]}`};
`;

export default {
  DivStyled,
  ColorItem,
  ColorEl
};