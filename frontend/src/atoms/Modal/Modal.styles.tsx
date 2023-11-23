import styled from 'styled-components';
import { IModalStyleProps } from './types';

const DivStyled = styled.div<IModalStyleProps>`
  display: block;
  width: 100%;
`;
DivStyled.displayName = 'Modal';

export default {
  DivStyled,
};