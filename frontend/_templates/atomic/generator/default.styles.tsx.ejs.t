---
to: "<%= (!isTemplate) ? `${path}/${compName}.styles.tsx` : null %>"
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