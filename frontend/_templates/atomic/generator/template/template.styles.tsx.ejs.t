---
to: "<%= !isTemplate ? null : `${path}/${compName}.styles.tsx` %>"
---
import styled from 'styled-components';

const DivStyled = styled.div`
  display: block;
  width: 100%;
`;
DivStyled.displayName = '<%= compName %>';

export default {
  DivStyled,
};