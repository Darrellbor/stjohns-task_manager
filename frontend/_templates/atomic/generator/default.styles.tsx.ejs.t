---
to: "<%= (!isTemplate) ? `${path}/${compName}.styles.tsx` : null %>"
---
import styled from 'styled-components';
import { <%= stylePropName %> } from './types';

const DivStyled = styled.div<<%=stylePropName %>>`
  display: block;
  width: 100%;
`;
DivStyled.displayName = '<%= compName %>';

export default {
  DivStyled,
};